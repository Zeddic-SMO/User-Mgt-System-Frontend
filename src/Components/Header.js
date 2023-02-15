import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="flex justify-between py-5 px-2 md:px-10 h-[85px] bg-warm items-center">
      <div>
        <p className="p-2 text-[white] text-2xl font-bold border border-cool rounded-lg md:hidden">
          USM
        </p>
        <p className="p-3 border border-cool rounded-lg text-[white] font-bold text-3lg text-2xl hidden md:inline-block">
          User Mgt System
        </p>
      </div>
      <div className="flex gap-2 sm:gap-4">
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
