import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <div>
      <div className="border-b flex justify-between py-3 items-center px-5">
        <Link to={"/blogs"} className=" cursor-pointer">
          Medium
        </Link>

        <div className="flex">
          <Link to={"/publish"}>
          <button
            type="button"
            className="text-white mr-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New
          </button></Link>
        
        <div className="">
          <Avatar name={"R"} size={5} />
        </div>
        </div>
      </div>
    </div>
  );
};

function Avatar({ name, size }: { name: string; size: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="text-lg font-medium px-3.5 py-1 text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
