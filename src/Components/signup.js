import React,{useState} from 'react';
import axios from 'axios'; 
export default function Signup() {

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [useremail, setuseremail] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [password,setpassword] = useState(); 
  const handlesignup = async () =>{
    const user = {
      firstname,
      lastname,
      useremail,
      phonenumber,
      password,
    };
    console.log(user);
   axios.post("http://localhost:4000/api/signup", user).then(function (response) {
       
          window.location.href="/login";
          console.log(response.data)
       
  }).catch(function(error){
    console.log(error);
  })
}
  return (
    
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            onChange={(e) =>{
              setfirstname(e.target.value);
            }}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstname"
            placeholder="first Name"
          />
          <input
            type="text"
            onChange={(e) =>{
              setlastname(e.target.value);
            }}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastname"
            placeholder="last name"
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) =>{
              setuseremail(e.target.value);
            }}
            name="email"
            placeholder="email"
          />
          <input
            type="text"
            onChange={(e) =>{
              setphonenumber(e.target.value);
            }}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="phonenumber"
            placeholder="phone number"
          />
          <input
            type="password"
            onChange={(e) =>{
              setpassword(e.target.value);
            }}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <button onClick={ ()=>{
            handlesignup();
          }}
          
            class="w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to our
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
               *Terms and conditions
            </a>{" "}
            and 
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
               Privacy policy
            </a>
          </div>
        </div>
        <div class="text-grey-dark mt-6">
          Already have an account ?
          <a
          class="no-underline border-b border-blue-200"
        href="../components/login/"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
