import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home, { blogAction, blogLoader } from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPage, { singleBlogAction, singleBlogLoader } from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: blogLoader,
        action: blogAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "blog/:id",
        element: <BlogPage />,
        loader: singleBlogLoader,
        action: singleBlogAction,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
