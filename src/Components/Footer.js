import React from "react"

function Footer() {
  return (
    <div className="flex justify-center items-center h-[70px] bg-warm text-[white] font-bold">
      &copy; {new Date().getFullYear()} ~ Samuel M. o. || ITSkillsCenter
    </div>
  )
}

export default Footer
