import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from './store/store.js';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout ,Login  } from "./Components/Index.js";
import Singup from './Pages/Singup.jsx'
import AddPosts from './Pages/AddPosts.jsx'
import EditPosts from './Pages/EditPost.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import Home from './Pages/Home.jsx'
import Post from './Pages/Post.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
              <Login />
          </AuthLayout>
        ),
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Singup />
            </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication>
            {''}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path:"/add-posts",
        element:(
          <AuthLayout authentication>
            {''}
            <AddPosts/>
          </AuthLayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication>
            <EditPosts/>
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element:<Post/>
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
