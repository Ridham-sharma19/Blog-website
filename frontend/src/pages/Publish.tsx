import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate} from "react-router-dom";


export function Publish() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const navigate=useNavigate();
  return (
    <div>
     <AppBar />
      <div className="flex items-center flex-col justify-center">
        <div className="max-w-screen-lg w-full mt-4">
          <input
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
            type="text"
            placeholder="Title"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
          />
          <div className="w-full pt-2">
        <TextEditor onChange={(e) => {
            setContent(e.target.value);
        }} />
        </div>
        <button onClick={async ()=>{
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content   
            },{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`
                }
            });
           
                navigate(`/blog/${response.data.id}`);
            
        }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
            Publish post
        </button>
        </div>
        
      </div>
    </div>
  );
}

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return(
        <form >
        <div className="w-full mb-4 border border-gray-200  bg-gray-50">
            <div className="px-1 py-1 bg-white w-full rounded-b-lg">
              
                <textarea onChange={onChange} id="editor" rows={8} className="block w-full px-2 text-sm text-gray-800 bg-white border-0" placeholder="Write a blog..." required></textarea>
            </div>
        </div>
        
     </form>
    )
}