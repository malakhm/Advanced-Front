import DataTable from 'react-data-table-component';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { FaTrashCan } from "react-icons/fa6";

import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from '../../components/sidebar/sidebar.js'
import AdminMenu from '../../components/sidebar/AdminMenu.js'
import {CompanyContext} from '../../Context/CompanyConext.js'
import CompanyMenu from '../../components/sidebar/CompanyMenu.js';

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
	const nav = ()=>{
		navigate('/add-design')
	}
	const [data, setData] = useState([])
	const navigate = useNavigate()
	const { token, company } = useContext(CompanyContext)

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
				`https://spaceloomm.onrender.com/api/designs/${id}`,{headers:{Authorization: `Bearer ${token}`}}
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
	  
	//create the table structure
	const columns = [
		{
			name: 'id',
			selector: row => row.id,
			sortable: true,
			reorder: true,
		},
		{
			name: 'category',
			selector: row => row.Category.name,
			sortable: true,
			reorder: true,
		},
		{
			name: 'image1',
			selector: row => <img src={row.images[0]} width='80px' height='80px'/>,
			sortable: true,
			reorder: true,
		},
		{
			name: 'image2',
			selector: row => <img src={row.images[1]} width='80px' height='80px'/>,
			sortable: true,
			reorder: true,
		},
        {
			name: 'image3',
			selector: row => <img src={row.images[2]} width='80px' height='80px'/>,
			sortable: true,
			reorder: true,
		},
        {
			name: 'image4',
			selector: row => <img src={row.images[3]} width='80px' height='80px'/>,
			sortable: true,
			reorder: true,
		},
        {
			name: 'image5',
			selector: row => <img src={row.images[4]} width='80px' height='80px'/>,
			sortable: true,
			reorder: true,
		},
		
        
		{
			name: 'Edit',
			cell: (row) => 
			<Link to="/edit-mydesign" 
			state={{id:row.id,
					images1: row.images[0],
					images2: row.images[1],
					images3: row.images[2],
					images4: row.images[3],
					images5: row.images[4],

					categoryId: row.Category.id
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
		console.log(company.id)
		const response = await axios.get(`https://spaceloomm.onrender.com/api/designs/get/${company.id}`);
		if(response.status == 200){
		setData(response.data.data)
		}
		console.log('data', response.data.data)
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
		<Sidebar><CompanyMenu/></Sidebar>
		<div className='table-main-component-new d-flex flex-column'> 
		<div className='Add-company-dashboard-admin-div'>
		<button className="btn btn-blue Add-company-dashboard-admin " onClick={()=>nav()}>
			Add a Design
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

const DesignsCompany = Template.bind({});

DesignsCompany.args = {
	fixedHeaderScrollHeight: '300px',
};

export default DesignsCompany;