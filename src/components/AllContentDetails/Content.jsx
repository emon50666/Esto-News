import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const {title,cover_image,body_html} = blog;
    console.log(body_html)
    return (
        <div  className="  rounded-lg  mx-auto group hover:no-underline focus:no-underline ">
        <img role="presentation" className="object-cover bg-no-repeat  w-full  bg-gray-500" src= {cover_image } />
        <div className="p-6 space-y-2">
            <h3 className="text-xl  font-semibold group-hover:underline group-focus:underline"> {title} </h3>
           <Markdown rehypePlugins={[rehypeRaw]}> {body_html} </Markdown>
           
           
        </div>
    </div>
    );
};

export default Content;