import { AppBar } from "./AppBar";

export function ContentSkeleton() {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-2 animate-pulse">
       
          <div className="col-span-8">
          
            <div className="text-5xl font-extrabold">
              <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            </div>
           
            <div className="text-slate-300 pt-2">
              <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
            </div>
           
            <div className="text-sm">
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        
          <div className="col-span-4">
        
            <div className="text-slate-500 text-lg pb-3">
              <div className="h-5 bg-gray-200 rounded w-20 mb-4"></div>
            </div>
           
            <div className="flex items-baseline">
             
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-1"></div>
              
              <div className="text-lg font-bold pl-1">
                <div className="h-5 bg-gray-200 rounded w-28"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}