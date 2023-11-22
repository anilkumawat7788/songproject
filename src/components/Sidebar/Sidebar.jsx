import React from 'react'
import "./sidebar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
    const logoutHandle = () => {
        // localStorage.removeItem('user');
        localStorage.clear('apiToken');
        navigate("/login")

    }
  return (
    <>
    <div className="sidebar_amin_layout">
      <div className="routings_urls">
        <span><DashboardIcon /> Dashboard</span>
   
      </div>
      <div className="logout_btn">
        <span onClick={logoutHandle}><LogoutIcon /> LogOut</span>
      </div>
    </div>
    </>
  )
}

export default Sidebar;