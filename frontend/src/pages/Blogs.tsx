
import { AppBar } from "../components/AppBar"
import { BlogsCard } from "../components/BlogCard"
import { Skeletons } from "../components/Skeletones";
import { useBlogs } from "../hooks/Custom"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    
    if (loading) {
        return (
          <div className="">
            <AppBar />
            <div className="flex justify-center">
              <div className="max-w-3xl">
                <Skeletons />
                <Skeletons />
                <Skeletons />
                <Skeletons />
                <Skeletons />
              </div>
            </div>
          </div>
        );
      }
      
      return (
        <div>
          <AppBar />
          <div className="flex justify-center">
            <div className="max-w-3xl">
              {blogs.map((blog) => (
                <BlogsCard
                  id={blog.id}
                  authorName={blog.author.name || "Anonymous"}
                  title={blog.title}
                  content={blog.content}
                  publishedDate={"2nd Feb 2025"}
                />
              ))}
            </div>
          </div>
        </div>
      )}