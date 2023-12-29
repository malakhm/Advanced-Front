import DataTable from 'react-data-table-component';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { FaTrashCan } from "react-icons/fa6";
import './Styles/Companies.css'
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
		paddingLeft: '0', // Adjust the padding for regular cells
	  },
	},
	pagination: {
	  style: {
		border: 'none',
	  },
	},
  };
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
		selector: row => row.logo,
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
		cell: (row) => <CiEdit className='table-icon-main-component edit' onClick={() => alert(row.id)} id={row.id}>Edit</CiEdit>,
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

const FixedHeaderStory = ({ fixedHeaderScrollHeight }) => {
const [data, setData] = useState([])

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
    <DataTable
    
		columns={columns}
    data = {data}
		fixedHeader
    highlightOnHover
    customStyles={customStyles}
		fixedHeaderScrollHeight={fixedHeaderScrollHeight}
		pagination
	/>

  )
}


const Template = args => <FixedHeaderStory {...args} />;

const Companies = Template.bind({});

Companies.args = {
	fixedHeaderScrollHeight: '300px',
};

export default Companies;