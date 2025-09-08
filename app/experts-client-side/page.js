
'use client';
import React, { useEffect } from 'react'

export default function Experts() {

 const [users,setUsers] = React.useState([])
  console.log("Experts Page started");

  // Fetch experts data from an API or database
  console.log("Fetching experts data...");

 useEffect(()=>{
    console.log("useEffect called");
    const callApi = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersTemp = await response.json();
        console.log("Fetched users at client side:", usersTemp);
        setUsers(usersTemp);
    }
    callApi();
 },[])
  console.log("Fetched users:", users);

  console.log("Rendering Experts Page");

  return (
    <div>
      <h2>Experts Page</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Field</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e,i)=>{
            return (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.website}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}
