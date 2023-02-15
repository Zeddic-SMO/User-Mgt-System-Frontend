import React, { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { NavLink } from "react-router-dom"
import axios from "axios"

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(
      "https://contactsmanager-api.onrender.com/"
    )

    if (response.status === 200) {
      setData(response.data)
    }
  }

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete? Click Ok to confirm!"
    )
    if (confirm) {
      const response = await axios.delete(
        `https://contactsmanager-api.onrender.com/${id}`
      )

      if (response.status === 200) {
        toast.success("User deleted Successfully!")
        setTimeout(() => {
          getData()
        }, 1000)
      }
    }
  }

  return (
    <div className="w-[90%] md:w-[60%] mx-auto py-[70px] md:py-[100px]">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-left">
          <thead
            className="text-xs text-gray-700 uppercase
          bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr className="bg-warm text-[white]">
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user, idx) => {
                return (
                  <tr
                    key={user._id}
                    className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{idx + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td className="text-center flex">
                      <NavLink to={`/view/${user._id}`}>
                        <button className="p-2 bg-light mx-1 md:mx-3 rounded-sm hover:bg-warm">
                          View
                        </button>
                      </NavLink>
                      <NavLink to={`/update/${user._id}`}>
                        <button className="p-2 bg-cool mx-1 md:mx-3 rounded-sm hover:bg-warm">
                          Edit
                        </button>
                      </NavLink>
                      <button
                        className="p-2 bg-danger mx-1 md:mx-3 rounded-sm hover:bg-warm"
                        onClick={() => handleDelete(user._id)}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
