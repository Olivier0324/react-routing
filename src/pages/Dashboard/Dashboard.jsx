import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <div className="DasboardWrapper">
      <div className="sideBar">
        <h3>Dashboard</h3>
        <div className="sidebarLinks">
          <NavLink to="analytics">Analytics </NavLink>
          <NavLink to="settings">Settings </NavLink>
        </div>
          </div>
          {/* End of sidebar */}
          <div className="mainContent">
              <div className='topBar'>Topbar</div>
              <Outlet/>
          </div>
          <div className="fixed">
            <NavLink to="/">Home</NavLink>
          </div>
    </div>
  );
}

export default Dashboard