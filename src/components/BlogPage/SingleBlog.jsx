import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import notFound from '../../assets/404.png'
import { MdAutoDelete } from "react-icons/md";


const SingleBlog = ({blog,deleteAble,handelDelete}) => { 
    const {title,cover_image,description,created_at,id} = blog;
    
    return (
        
       <div className="flex relative">
         {
            deleteAble && <div onClick={()=> handelDelete(id)} className="cursor-pointer"> <MdAutoDelete className="text-2xl text-red-600"></MdAutoDelete> </div>
           }
       <Link to={`/blogs/${id}`}  className="max-w-sm shadow-xl rounded-lg bg-gray-700  mx-auto group hover:no-underline focus:no-underline ">
        <img role="presentation" className="object-cover  w-full rounded h-44 bg-gray-500" src= {cover_image || notFound} />
        <div className="p-6 space-y-2">
            <h3 className="text-xl  font-semibold group-hover:underline group-focus:underline"> {title} </h3>
            <span className="text-xs text-gray-400"> {new Date(created_at).toLocaleDateString()} </span>
            <p> {description} </p>
           
        </div>
       
    </Link>
  
       </div>
    
   
            
    
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object
};

export default SingleBlog;