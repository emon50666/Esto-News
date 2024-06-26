// Get the scroll-to-top button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add event listener to the window for scroll events
window.addEventListener("scroll", () => {
  // Check if the user has scrolled down at least 20 pixels from the top
  if (window.pageYOffset > 20) {
    // If scrolled down, show the scroll-to-top button
    scrollToTopBtn.style.display = "block";
  } else {
    // If at the top, hide the scroll-to-top button
    scrollToTopBtn.style.display = "none";
  }
});

// Add event listener to the button
scrollToTopBtn.addEventListener("click", () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});







import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from './components/HomePage/Home.jsx'
import Blogs from './components/BlogPage/Blogs.jsx'
import Bookmark from './components/Bookmarks/Bookmark.jsx'
import Contact from './components/Contact/Contact.jsx'

import BlogDetails from './components/BlogPage/BlogDetails.jsx';
import Content from './components/AllContentDetails/Content.jsx';
import Author from './components/AllContentDetails/Author.jsx';

import  { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Login from './components/Login/Login.jsx';
// ..
AOS.init();

const router = createBrowserRouter([
 
  

  {
    
    path: '/',
    element: <App></App>,
    
children: [
  {
path: '/',
element: <Home></Home>
  },
  {
    path: '/blogs',
    loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
    element: <Blogs></Blogs>
  },
  {
    path: '/blogs/:id',
    element:<BlogDetails></BlogDetails>,
    loader: ({ params}) => fetch(`https://dev.to/api/articles/${params.id} `),
    children:[
      {
        index: true,
        element: <Content></Content>,
        loader: ({ params}) => fetch(`https://dev.to/api/articles/${params.id} `),
      },
      {
       path: 'author',
        element: <Author></Author>,
        loader: ({ params}) => fetch(`https://dev.to/api/articles/${params.id} `),
      },
     
    ]
   

  },
  {
    path: '/Bookmarks',
    element: <Bookmark></Bookmark>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
  
]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(


<>
<HelmetProvider>
<RouterProvider router={router} ></RouterProvider>
</HelmetProvider>
    {/* <App /> */}
    <Toaster></Toaster>
</>
)
