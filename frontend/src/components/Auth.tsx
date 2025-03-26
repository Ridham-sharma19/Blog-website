import { ChangeEvent, useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import { signupInput } from "@ridhuuu/project-common"
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Auth({ type }:{type:"signup"|"signin"}){
    const navigate=useNavigate();
    const [postInputs,setPostInputs]=useState<signupInput>({
    name:"",
    username:"",
    password:""
        }
    )
    async function sendRequest() {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
          postInputs,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jwt = response.data; // Raw token string
        if (!jwt || typeof jwt !== "string") {
          throw new Error("Invalid JWT received from backend");
        }
        localStorage.setItem("token", jwt);
        console.log("Token set:", localStorage.getItem("token"));
        navigate("/blogs");
      } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          console.log("Status:", e.response.status);
          console.log("Data:", e.response.data);
          alert(`Error: ${e.response.data.message || "Something went wrong"}`);
        } else {
          console.error(e);
          alert("An unexpected error occurred");
        }
      }
    }

    return(
        <div className="h-screen flex justify-center items-center  flex-col">
            <div className="text-4xl font-extrabold">
                Create an account
            </div>
            <div className="text-slate-400">
                {type=="signin"?"Do not have an account?":"Alread have an account?"} <Link className="underline text-blue-600" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"Sign up":"Sign in"}</Link>
            </div>
            <div className="w-sm mt-7">
            {type==="signup" && <Labelledinput label="Name" placeholder="Your name..." onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name:e.target.value
                })
            }}/>}
            <Labelledinput label="Username" placeholder="Youremal@gmail.com" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    username:e.target.value
                })
            }}/>
            <Labelledinput label="Password" type={"password"} placeholder="* * * * * *" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    password:e.target.value
                })
            }}/>
           </div>
           <div className="mt-4">
           <button type="button" onClick={sendRequest} className="text-white w-sm  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up":"Sign in"}</button>
           </div>
        </div>
    )
}


interface LabelledinputType {
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    type?:string

}

function Labelledinput({ label, placeholder, onChange, type }: LabelledinputType) {
    return (
      <div className="mt-3 w-full max-w-md px-2 sm:mt-4 sm:max-w-sm">
        <label className="block mb-1 text-xs font-medium text-black sm:text-sm">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 sm:text-sm sm:rounded-lg sm:p-3"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }