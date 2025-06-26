import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';


 const [currentPage, setCurrentPage]= useState(1);
  const recordsPerPage=5;
  const lastIndex= currentPage*recordsPerPage;
  const firstIndex= lastIndex-recordsPerPage;
  const records= Data.slice(firstIndex, lastIndex);
  const npage= Math.ceil(Data.length/recordsPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  
const Display=()=>{
const [mydata, setMydata]= useState([]);

   const loadData=async()=>{
    let api="http://localhost:3000/employee";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data)
   }

useEffect(()=>{
    loadData()
}, []);

let sno=0;
const ans=mydata.map((key)=>{
    sno++;
    return(
        <>
          <tr>
            <td> {sno} </td>
            <td> {key.empno} </td>
            <td> {key.name} </td>
            <td> {key.designation} </td>
            <td> {key.salary} </td>
          </tr>
        </>
    )
})
    return(
        <>
         <h1> Display Page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Emp no</th>
          <th> Employee Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
   {ans}
      </tbody>
  </Table>
        </>
    )
}

export default Display;