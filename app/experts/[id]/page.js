import React from 'react'

export default async function UserDetails({ params }) {
  const {id} = params;

  // call apis to fetch user details using the id from JSON placeholder
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userDetails = await response.json();

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {userDetails.id}</p>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Website: {userDetails.website}</p>
    </div>
  )
}
