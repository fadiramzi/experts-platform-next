import React from 'react'

export default function ExpertsFilter({ userType, setUserType }) {
    console.log("Rendering Experts Filter");
    console.log("Current userType:", userType);
  return (
    <div>
        <div className="w-64">
  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
    Select User Type
  </label>
  <select
    id="userType"
    name="userType"
    className="bg-blue-500 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
    value={userType}
    onChange={(e) => setUserType(e.target.value)}
  >
    <option value="all">All</option>
    <option value="customer">Customer</option>
    <option value="expert">Expert</option>
   
  </select>
</div>

    </div>
  )
}
