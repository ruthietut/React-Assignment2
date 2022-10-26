import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./Pagination";

import { Link } from "react-router-dom";
let PageSize = 10;
function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((actualData) => {
        setUsers(actualData.results);
        console.log(users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  return (
    <div className="App">
      <div className="Header ">
        <h1>Users Log</h1>
        <h1><Link to="/">Home</Link> </h1>
      </div>
      {currentTableData?.map((user, i) => (
        <div key={i} className="card">
         
          <img src={user.picture.large} alt="Avatar" />
          <h1>{user.name.title},</h1>
        
          <h3 >{user.name.first} </h3>
          <h3 >{user.name.last} </h3>
        
          <p className="">{user.gender} </p>
          <p className="">{user.phonel} </p>
          <p className="">{user.email} </p>
          <p className="">{user.location.city} </p>
          <p className="">{user.location.country} </p>
          

        </div>
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Users;
