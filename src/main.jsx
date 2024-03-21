
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from './components/HomePage/Home.jsx'
import Blogs from './components/BlogPage/Blogs.jsx'
import Bookmark from './components/Bookmarks/Bookmark.jsx'
import Contact from './components/Contact/Contact.jsx'

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
    path: '/Bookmarks',
    element: <Bookmark></Bookmark>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(


<>
<RouterProvider router={router} ></RouterProvider>
    {/* <App /> */}
</>
)
