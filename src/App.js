import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import { Blogs, ErrorPage, Home, Questions, Statistics, Topics } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //tost message
  const notify = (message) => toast(message);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async () => await fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/topics",
          element: <Topics />,
          loader: async () => await fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/statistics",
          element: <Statistics />,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/blogs",
          element: <Blogs />,
          loader: () => fetch("blogs.json"),
        },
        {
          path: "/topics/:quizId",
          element: <Questions notify={notify} />,
          loader: async ({ params }) =>
            await fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
