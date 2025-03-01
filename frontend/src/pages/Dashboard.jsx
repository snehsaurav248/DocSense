import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UploadDocument from "../components/Documents/UploadDocument";
import DocumentList from "../components/Documents/DocumentList";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout}>Logout</button>
      <UploadDocument />
      <DocumentList />
    </div>
  );
};

export default Dashboard;
