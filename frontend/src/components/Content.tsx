import { Blog } from "../hooks/Custom";
import { AppBar } from "./AppBar";

export function Content({ blog }: { blog: Blog }) {
  return (
    <div>
      <AppBar  />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-2">
          <div className=" col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-300 pt-2">Post on 2nd March 2025</div>
            <div className="text-sm">{blog.content}</div>
          </div>
          <div className=" col-span-4">
            <div className=" text-slate-500 text-lg pb-3">Author</div>
            <div className="flex items-baseline">
                <Avatar name={blog.author.name || "Anonymous"}/>
              <div className="text-lg font-bold pl-1">
                {blog.author.name || "Anonymous"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Avatar({ name }: { name: string }) {
    return (
      <div className="relative flex  items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="text-sm text-center font-medium text-gray-600 dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    );
  }