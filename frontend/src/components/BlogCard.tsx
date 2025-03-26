import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  id:number;
  title: string;
  content: string;

  publishedDate: string;
}

export const BlogsCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
  <Link to={`/blog/${id}`}>
    <div className="border-b-1 pl-4 pt-2 mt-2 border-slate-200 pb-4 w-screen max-w-screen-md ">
      <div className="flex">
        
        <div className="flex justify-center items-center">
          <Avatar name={authorName}></Avatar>
        </div>
         <div className="font-extralight pl-2 pr-2 flex justify-center items-center">
             {authorName} 
         </div>
         <div className=" pr-2 text-xs flex items-center text-slate-500 justify-center">
             <Circle/>
         </div>
         <div className="font-light flex justify-center items-center text-slate-500">
            {publishedDate}
         </div>
       
      </div>
      <div className="text-xl pt-2 font-semibold cursor-pointer">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-500 text-sm pt-4  font-thin">{`${Math.ceil(content.length / 100)} min`}</div>
      
    </div>
    </Link>)
  ;
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative flex  items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="text-sm text-center font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
function Circle(){
    return (
        <div>
            <div className="h-1 w-1 rounded-full bg-slate-200">
               
            </div>
        </div>
    )
}