import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import { Blogs, Home, Questions, Statistics } from "./components";

function App() {
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
          element: <Questions />,
          loader: async ({ params }) =>
            await fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
