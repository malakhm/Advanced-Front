import DataTable from 'react-data-table-component';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const customStyles = {
	headRow: {
		style: {
			border: 'none',
		},
	},
	headCells: {
		style: {
			color: '#FFFFFF',
      backgroundColor:'#DA9100',
			fontSize: '14px',
		},
	},
	rows: {
		highlightOnHoverStyle: {
			backgroundColor: '#e2f0fb',
			borderBottomColor: '#FFFFFF',
	
			outline: '1px solid #FFFFFF',
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

const Tables = Template.bind({});

Tables.args = {
	fixedHeaderScrollHeight: '300px',
};

export default Tables;