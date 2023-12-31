import React, { useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import login_bg from "../assets/img/login_bg4.png";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../Axios"
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  console.log(form)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/register",{firstName: form.firstName, lastName: form.lastName, email: form.email, password: form.password});
      console.log(res)
      setForm({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      navigate('/')
      toast.success("SignUp succesfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error)
      console.log(error.response.data.message)
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      
      <section className="h-screen  flex justify-center pl-0 items-center ">
        {/* <div className="container h-full px-6 py-24"> */}
        <div className="mt-15  text-black rounded-2xl  flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in"
      style={{
        boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.4)', 
          }}>
       
         <div 
         style={{
          backgroundImage: 'url("https://img.freepik.com/free-vector/network-connection-background-gradient_23-2148879893.jpg?size=626&ext=jpg&ga=GA1.2.919220695.1703776412&semt=ais")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px',
          // Increase the minHeight here to make the background image visible
        }}  className='w-full rounded-2xl'
         >
          <p style={{ color: '#fff', fontSize: '24px' }} className=' mx-24 mt-9'>Welcome to our site!</p>
  <p style={{ color: '#fff', fontSize: '14px' }} className=' mx-10'>
    Sign up below to create an account and access exclusive features.
  </p>
   </div>
            {/* <!-- Right column container with form --> */}
            <div className="mt-3 ml-1">
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <div className="flex border-l-4 border-[#0057A8]  bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdAttachEmail />}
                  </div>
                  <input
                    className="outline-none  to-gray-100  bg-[#f7f7f7] "
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {/* <!--Password input--> */}
                <div className="flex outline-none border-l-4  border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdOutlineDriveFileRenameOutline />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="firstName"
                    placeholder="Firs tName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex outline-none border-l-4  border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdOutlineDriveFileRenameOutline />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex outline-none border-l-4  border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<RiLockPasswordFill />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                
                <p className=" m-2 text-sm">
                  <Link to="/login">
                    Already have an account <span> </span>
                    <span className="  font-extrabold">Log In Here</span>
                  </Link>
                </p>
               
                <button
                  type="submit"
                  className="inline-block w-full rounded mb-3 bg-[#573592] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
                  transition duration-150 ease-in-out hover:bg-[#3c206d] " >
                  Register
                </button>
                {/* <!-- Divider --> */}
              </form>
            </div>
          </div>
       
      </section>
    </div>
  );
};

export default Signup;
