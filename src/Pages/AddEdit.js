import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import axios from "axios"

const AddEdit = () => {
  // Redirecting using the useNavigate
  const navigate = useNavigate()

  // Using useState to handle input values
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
  })

  // Updating a particular value using it's id - first fetching a particular
  const { id } = useParams()
  // console.log(id)
  useEffect(() => {
    if (id) {
      getSpecificUser(id)
    }
  }, [id])
  // get a specific user
  const getSpecificUser = async (id) => {
    const response = await axios.get(
      `https://contactsmanager-api.onrender.com/view/${id}`
    )

    if (response.status === 200) {
      setValues({ ...response.data })
    }
  }

  // handling update
  const handleUpdate = async (id, values) => {
    const response = await axios.put(
      `https://contactsmanager-api.onrender.com/${id}`,
      values
    )
    if (response.status === 200) {
      toast.success("User Info Updated!")
    }
  }

  // Destructuring values to the used in the input field
  const { fullName, phone, email } = values

  // Handling individual input with useState to setValues
  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  // Handling submit for both POST and PUT method
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!fullName || !phone || !email) {
      toast.error("All inputs are required!")
    } else {
      if (!id) {
        submitData(values)

        setValues({
          fullName: "",
          phone: "",
          email: "",
        })

        setTimeout(() => {
          navigate("/", { replace: true })
        }, 2000)
      } else {
        handleUpdate(id, values)

        setTimeout(() => {
          navigate("/", { replace: true })
        }, 2000)
      }
    }
  }

  // Submit values to the database
  const submitData = async (values) => {
    const response = await axios.post(
      "https://contactsmanager-api.onrender.com/add",
      values
    )
    if (response.status === 200) {
      toast.success("New User Added Successfully!")
    }
  }

  return (
    <div className="p-[100px]">
      <form className="w-[90%] md:w-[50%] mx-auto">
        <div>
          <label htmlFor="name" className="text-warm font-bold">
            Full Name:
          </label>
          <input
            id="name"
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleInput}
            className="w-full border-b border-[grey] p-[5px] focus:outline-none"
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
            onChange={handleInput}
            className="w-full border-b border-[grey] p-[5px] focus:outline-none"
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
            onChange={handleInput}
            className="w-full border-b border-[grey] p-[5px] focus:outline-none"
          />
        </div>

        <div className="my-[25px]">
          <button
            className="w-full p-[5px] bg-warm hover:bg-cool text-[white] font-bold hover:text-[black]"
            onClick={handleSubmit}
          >
            {id ? "UPDATE" : " SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEdit
