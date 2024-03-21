import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import notFound from '../../assets/404.png'


const SingleBlog = ({blog}) => {
    const {title,cover_image,description,created_at} = blog;
    return (
        <Link to={'/'} className="max-w-sm shadow-xl rounded-lg bg-gray-700  mx-auto group hover:no-underline focus:no-underline bg-gray-900">
        <img role="presentation" className="object-cover  w-full rounded h-44 bg-gray-500" src= {cover_image || notFound} />
        <div className="p-6 space-y-2">
            <h3 className="text-xl  font-semibold group-hover:underline group-focus:underline"> {title} </h3>
            <span className="text-xs text-gray-400"> {new Date(created_at).toLocaleDateString()} </span>
            <p> {description} </p>
           
        </div>
    </Link>
    
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object
};

export default SingleBlog;