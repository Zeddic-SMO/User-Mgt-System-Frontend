import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function View() {
  const [user, setUser] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getUser(id)
  }, [id])

  const getUser = async (id) => {
    const response = await axios.get(`http://localhost:4000/view/${id}`)
    if (response.status === 200) {
      setUser({ ...response.data })
    }
  }
  const navigate = useNavigate()
  const handleBack = (e) => {
    e.preventDefault()
    navigate("/", { replace: true })
  }

  const { fullName, phone, email } = user
  return (
    <div className="p-[100px]">
      <form className="w-[90%] md:w-[50%] mx-auto p-2 rounded-lg shadow-warm shadow-sm">
        <div>
          <label htmlFor="name" className="text-warm font-bold">
            Full Name:
          </label>
          <input
            id="name"
            type="text"
            name="fullName"
            value={fullName}
            disabled
            className="w-full border-b border-[grey] p-[5px] focus:outline-none text-center text-[20px]"
          />
        </div>
        <div className="my-[20px]">
          <label htmlFor="phone" className="text-warm font-bold">
            Phone:
          </label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={phone}
            disabled
            className="w-full border-b border-[grey] p-[5px] focus:outline-none text-center text-[20px]"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-warm font-bold">
            Email:
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            disabled
            className="w-full border-b border-[grey] p-[5px] focus:outline-none text-center text-[20px]"
          />
        </div>

        <div className="my-[25px]">
          <button
            className="w-full p-[5px] bg-warm hover:bg-cool text-[white] font-bold hover:text-[black]"
            onClick={handleBack}
          >
            BACK
          </button>
        </div>
      </form>
    </div>
  )
}

export default View
