
import { Content } from "../components/Content";
import { ContentSkeleton } from "../components/ContentSkeletone";

import { useBlog } from "../hooks/Custom"
import { useParams } from "react-router-dom";



export function Blog(){
    const { id }=useParams()
    const {loading,blog}=useBlog({
        id: id||""
    });
    if(loading){
        return <div className="">
            <ContentSkeleton/>
            
            
        </div>;
    }
    return(
        <div>
            <Content blog={blog}/>
        </div>
    )
}