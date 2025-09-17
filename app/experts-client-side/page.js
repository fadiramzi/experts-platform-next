"use client";
import React, { useEffect, useState } from "react";
import myAxios from "../lib/my-axios";
import ExpertsSearch from "../components/experts/experts-search";
import ExpertsFilter from "../components/experts/experts-filter";
import Spinner from "../components/spinner";
import ExpertsPagination from "../components/experts/experts-pagination";
export default function Experts() {
  const [users, setUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [userType, setUserType] = React.useState("all");
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortDir, setSortDir] = React.useState("desc");

  const [pagination,setPagination] = useState({
    /* "total": 7,
        "current_page": 1,
        "per_page": 2,
        "last_page": 4,
        "offset": 8 
        */
      total:0,
      current_page:1,
      per_page:2,
      last_page:4,
      offset:0
  })

  console.log("Experts Page started");

  // Fetch experts data from an API or database
  console.log("Fetching experts data...");

  useEffect(() => {
    const callApi = async () => {
      setIsLoading(true);
      let url = `/users?page=${pagination.current_page}&perPage=${pagination.per_page}&sortDir=${sortDir}`;
      if (userType !== "all") {
        url += `&userType=${userType}`;
      }
      const response = await myAxios.get(url);
      const usersTemp = response.data.data;
      console.log("API response:", usersTemp);
      setUsers(usersTemp);
      setPagination(response.data.pagination)
      setIsLoading(false);
    };
    callApi();
  }, [userType, sortDir, pagination.current_page, pagination.per_page]);
  console.log("Fetched users:", users);

  console.log("Rendering Experts Page");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const response = await myAxios.get(`/users?q=${searchTerm}`);
      console.log(response);
      const usersTemp = response.data.data;
      console.log("API response:", usersTemp);
      setUsers(usersTemp);
    }
  };

  const handleSort = () => {
    if (sortDir == "desc") {
      setSortDir("asc");
    } else setSortDir("desc");
  };

  const onPageChange = (page) => {
    setPagination(
      (prev) => ({ ...prev, current_page: page })
    );
  }
  const setPerPage = (perPage) => {

    setPagination((prev) => ({ ...prev, per_page: perPage }))
  }
  return (
    <div className="bg-gray-900">
      <h2>Experts Page</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ExpertsSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
          <ExpertsFilter userType={userType} setUserType={setUserType} />
          <table className="min-w-full table-fixed">
            <thead className="bg-gray-800">
              <tr>
                <th className="flex items-center  justify-center text-center space-x-2">
                  <span> Name</span>
                  <div onClick={handleSort}>
                    {sortDir === "desc" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th>Email</th>
                <th>Industry</th>
                <th>User Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((e, i) => {
                return (
                  <tr className="bg-slate-500" key={i}>
                    <td className="text-center">{e.name}</td>
                    <td className="text-center">{e.email}</td>
                    <td className="text-center">{e.expert?.industry}</td>
                    <td className="text-center">{e.type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
         <div className="mt-4">
           <ExpertsPagination
           totalPages={pagination.last_page}
           onPageChange={onPageChange}
           currentPage={pagination.current_page}
           lastPage={pagination.last_page}
           perPage={pagination.per_page}
           setPerPage={setPerPage}
           />
         </div>
        </>
      )}
    </div>
  );
}
