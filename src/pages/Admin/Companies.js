import DataTable from 'react-data-table-component';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { FaTrashCan } from "react-icons/fa6";
import './Styles/Companies.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from '../../components/sidebar/sidebar.js'
import AdminMenu from '../../components/sidebar/AdminMenu.js'
const handleDelete = async (id) => {
	Swal.fire({
	  title: "Are you sure you want to delete?",
	  icon: "question",
	  iconHtml: "?",
	  confirmButtonText: "Delete",
	  cancelButtonText: "Cancel",
	  showCancelButton: true,
	  showCloseButton: true,
	}).then(async (result) => {
	  if (result.isConfirmed) {
		try {
		  // Assuming 'id' is defined somewhere in your code
		  const response = await axios.delete(
			`http://localhost:5000/api/companies/${id}`
		  );
  
		  Swal.fire({
			title: "Deleted!",
			text: "Your file has been deleted.",
			icon: "success",
			
		  });
		} catch (err) {
		  console.log(err);
		}
	  }
	});
  };
  

//custom styling for the table 
const customStyles = {
	headRow: {
	  style: {
		border: 'none',
	  },
	},
	headCells: {
	  style: {
		color: '#FFFFFF',
		backgroundColor: '#DA9100',
		fontSize: '16px', // Adjust the font size for header cells
		marginLeft: '-12px',
	  },
	},
	rows: {
	  style: {
		marginBottom: '-10px', // Adjust the spacing between rows
	  },
	  highlightOnHoverStyle: {
		backgroundColor: '#e2f0fb',
		borderBottomColor: '#FFFFFF',
		outline: '1px solid #FFFFFF',
	  },
	},
	cells: {
	  style: {
		fontSize: '14px', // Adjust the font size for regular cells
		paddingTop: '20px', // Adjust the padding for regular cells
		paddingBottom: '10px',
	  },
	},
	pagination: {
	  style: {
		marginTop:'30px',
		border: 'none',
	  },
	},
  };


//code for fixed header
const FixedHeaderStory = ({ fixedHeaderScrollHeight }) => {
	
	const [data, setData] = useState([])
	const navigate = useNavigate()
	const nav = ()=>{
		navigate('/add-company')
	}
	//create the table structure
	const columns = [
		{
			name: 'id',
			selector: row => row.id,
			sortable: true,
			reorder: true,
		},{
			name: 'name',
			selector: row => row.name,
			sortable: true,
			reorder: true,
		},
		{
			name: 'email',
			selector: row => row.email,
			sortable: true,
			reorder: true,
		},
		{
			name: 'logo',
			selector: row => <img src={row.logo} width='80px' height='80px'/>,
			sortable: true,
			reorder: true,
		},
	{
			name: 'location',
			selector: row => row.location,
			sortable: true,
			reorder: true,
		},
	{
			name: 'phone',
			selector: row => row.phone,
			sortable: true,
			reorder: true,
		},
	{
			name: 'website url',
			selector: row => row.website_link,
			sortable: true,
			reorder: true,
		},
		{
			name: 'Edit',
			cell: (row) => 
			<Link to="/edit-company" 
			state={{id:row.id,
					Name: row.name,
					email:row.email,
					logo: row.logo,
					Location: row.location,
					phone: row.phone,
					website: row.website_link,
					}}>
				<CiEdit className='table-icon-main-component edit'id={row.id}>Edit</CiEdit>
			</Link>,
			sortable: true,
			reorder: true,
		},
		{
			name: 'Delete',
			cell: (row) => <FaTrashCan  className='table-icon-main-component delete' onClick={() => handleDelete(row.id)} id={row.id}>Delete</FaTrashCan>,
			sortable: true,
			reorder: true,
		},
		

	{
	
	}
	]
	//fetch the data
	const fetchdata = async()=>{
	try{
		const response = await axios.get('http://localhost:5000/api/companies/');
		if(response.status == 200){
		setData(response.data.data)
		}
		console.log(response.data.data)
	}
	catch(err){
		console.error(err.message)
	}
	
	}
	useEffect(()=>{
	fetchdata();
	},[])

	return(
		<>
		<Sidebar><AdminMenu/></Sidebar>
		<div className='table-main-component-new d-flex flex-column'> 
		<div className='Add-company-dashboard-admin-div'>
		
				<button className="btn btn-blue Add-company-dashboard-admin " onClick={()=>nav()}>
					Add Company
				</button>
		
		</div>
		<DataTable
		columns={columns}
		data = {data}
		fixedHeader
		highlightOnHover
		customStyles={customStyles}
		fixedHeaderScrollHeight={fixedHeaderScrollHeight}
		pagination
		/>
	</div>
	</>
	)
}


const Template = args => <FixedHeaderStory {...args} />;

const Companies = Template.bind({});

Companies.args = {
	fixedHeaderScrollHeight: '300px',
};

export default Companies;