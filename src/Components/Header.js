import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="flex justify-between py-5 px-2 md:px-10 h-[80px] bg-warm items-center">
      <div>
        <p className="p-2 text-[white] font-semi-bold md:bold md:text-2lg text-2xl">
          User Mgt System
        </p>
      </div>
      <div className="flex gap-4">
        <NavLink to="/">
          <p className="p-2 bg-cool rounded-md hover:bg-light">Home</p>
        </NavLink>
        <NavLink to="/add">
          <p className="p-2 bg-cool rounded-md hover:bg-light">Add User</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Header
