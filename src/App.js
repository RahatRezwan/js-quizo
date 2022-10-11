import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import { Blogs, Home, Questions, Statistics } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = (message) => toast(message);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async () => await fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/:quizName/:quizId",
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
