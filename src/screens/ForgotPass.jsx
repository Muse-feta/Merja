import React, { useState } from 'react'
import { MdAttachEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import login_bg from "../assets/img/login_bg4.png";
import { Axios } from '../Axios';
import { toast } from 'react-toastify';

const ForgotPass = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Axios.post('/forgot-password',{email})
        toast.success(
          "Check your inbox for a recent email, and review spam if not found.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setEmail('')
    } catch (error) {
      console.log(error)
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
  } 
  return (
    <div>
      <section className=" h-screen  flex justify-center pl-0 items-center mx-[100px]">
        <div className="  text-black rounded-2xl  flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in"
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
          <p style={{ color: '#fff', fontSize: '24px' }} className=' mx-24 mt-9'>Reset your password</p>
  <p style={{ color: '#fff', fontSize: '14px' }} className=' mx-10'>
  Fill in your e-mail address below and we will send you an
                  email with further instructions.
  </p>
   </div>
            {/* <!-- Right column container with form --> */}
            <div className="mt-3 ml-1">
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
              
                <div className="flex border-l-4  border-[#0057A8]  bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdAttachEmail />}
                  </div>
                  <input
                    className="outline-none   bg-[#f7f7f7]  "
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Hello, how about our team meeting */}
                <p className=" m-2 text-sm">
                  <Link to="/register">
                    Don't have an account <span> </span>
                    <span className="  font-extrabold">Register Here</span>
                  </Link>
                </p>
                <p className=" m-2 text-sm">
                  <Link to="/login">
                    Already have an account <span> </span>
                    <span className="  font-extrabold">Log In Here</span>
                  </Link>
                </p>
                {/* <!-- Remember me checkbox --> */}
                {/* <!-- Submit button --> */}
                {/* <TERipple rippleColor="light" className="w-full"> */}
                <button
                  type="submit"
                  className="inline-block w-full rounded mb-3 bg-[#573592] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
                  transition duration-150 ease-in-out hover:bg-[#3c206d] " >
                  Send Email
                </button>
                {/* </TERipple> */}
                {/* <!-- Divider --> */}
              </form>
            </div>
          </div>
        
      </section>
    </div>
  );
}

export default ForgotPass