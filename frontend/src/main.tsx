import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LoginPage />
            },
            {
                path: '/signup',
                element: <SignupPage />
            },
        ],
        errorElement: "404 not found"
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
