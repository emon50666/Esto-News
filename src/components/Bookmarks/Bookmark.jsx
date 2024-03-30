import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils/LocalStroge";
import SingleBlog from "../BlogPage/SingleBlog";
import { Helmet } from "react-helmet-async";





const Bookmark = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        const storeBlogs = getBlogs()
        setBlogs(storeBlogs)

        
    },[])


    const handelDelete = id => {
       deleteBlog(id)
       const storeBlogs = getBlogs()
       setBlogs(storeBlogs)
    }
if(blogs.length <1) return <h1 className="min-h-screen items-center text-center text-4xl mt-10">No Added BookMark</h1> 
    return (

        
        <div className="grid px-8 mb-10 mt-10 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
         <Helmet>
            <title>
                EstoNews | BookMark
            </title>
         </Helmet>
        {
         blogs.map(blog => <SingleBlog handelDelete={handelDelete} deleteAble={true} key={blog.id} blog={blog} ></SingleBlog> )
        }


     </div>
    );
};

export default Bookmark;