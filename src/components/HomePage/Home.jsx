import { Link } from "react-router-dom";


import web from '../../assets/web.svg'

const Home = () => {
    return (
        <div>
            
            <div className="hero min-h-screen  bg-gray-200">
  <div className="hero-content text-center">
    <div className="w-[400px] lg:w-[800px] ">
      <h1 className="lg:text-5xl font-bold bg-300% bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text animate-gradient">Esto News Unveiled Delving Deep into Stories That Matte</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="lg:flex gap-5 justify-center">
        

        <Link to={'/blogs'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-secondary rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-secondary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Read More</span>
</Link>
       
<Link to={'/bookmarks'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondary rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">See More</span>
</Link>

      </div>
    </div>
  </div>
  
<div>
  <img  src={web} alt=""  className="w-full"/>
</div>
</div>



        </div>
    );
};

export default Home;