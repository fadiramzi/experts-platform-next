
import Link from 'next/link';
import React from 'react'

export default async function Experts() {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

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
                <td><Link href={`/experts/${e.id}`}>Show Details</Link></td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}
