export function Skeletons() {
    return (
      <div role="status" className="max-w-3xl animate-pulse">
        <div className="border-b-1  border-slate-200 pb-4 w-screen max-w-screen-md">
          <div className="flex">
           
            <div className="flex justify-center items-center">
              <div className="w-6 h-6 bg-gray-200 rounded-full mb-4"></div>
            </div>
          
            <div className="font-extralight pl-2 pr-2 flex justify-center items-center">
              <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
            </div>
           
            <div className="pr-2 text-xs flex items-center text-slate-500 justify-center">
              <Circle />
            </div>
          
            <div className="font-light flex justify-center items-center text-slate-500">
              <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
            </div>
          </div>
        
          <div className="text-xl pt-2 font-semibold cursor-pointer">
            <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-4"></div>
          </div>
         
          <div className="text-md font-thin">
            <div className="h-4 bg-gray-200 rounded-full w-full mb-4"></div>
          </div>
          
          <div className="text-slate-500 text-sm pt-4 font-thin">
            <div className="h-3 bg-gray-200 rounded-full w-12 mb-4"></div>
          </div>
        </div>
      </div>
    );
  }
  
  function Circle() {
    return (
      <div>
        <div className="h-1 w-1 rounded-full bg-slate-200"></div>
      </div>
    );
  }