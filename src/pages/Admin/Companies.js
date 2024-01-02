import DataTable from 'react-data-table-component';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { FaTrashCan } from "react-icons/fa6";
import './Styles/Companies.css'
import { Link } from 'react-router-dom'


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
		border: 'none',
	  },
	},
  };


//code for fixed header
const FixedHeaderStory = ({ fixedHeaderScrollHeight }) => {
const [data, setData] = useState([])


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
		<Link to="/edit-company" state={{	id:row.id,
											Name: row.name,
											email:row.email,
											logo: row.logo,
											Location: row.location,
											phone: row.phone,
											website: row.website_link,
											}}>
			<CiEdit className='table-icon-main-component edit' onClick={() => handleEdit(row.id)} id={row.id}>Edit</CiEdit>
		</Link>,
		sortable: true,
		reorder: true,
	},
	{
		name: 'Delete',
		cell: (row) => <FaTrashCan  className='table-icon-main-component delete' onClick={() => alert(row.id)} id={row.id}>Delete</FaTrashCan>,
		sortable: true,
		reorder: true,
	},
	

{
  
}
];
//events handling
const handleEdit = async(id)=>{
	
	try{
		const response = await axios.put(`http://localhost:5000/api/companies/${id}`)
		if(response.status === 200) setData(response.data.data)
	}
	catch(err){
		console.log(err.message)
	}

	

}

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
	<div className='table-main-component-new d-flex flex-column'> 
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
  )
}


const Template = args => <FixedHeaderStory {...args} />;

const Companies = Template.bind({});

Companies.args = {
	fixedHeaderScrollHeight: '300px',
};

export default Companies;