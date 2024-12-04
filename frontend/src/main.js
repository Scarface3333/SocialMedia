import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Auth } from "./pages/auth";
import { Layout } from "./components/layout";
import { Posts } from "./pages/posts";
import { UserProfile } from "./pages/user-profile";
import { CurrentPost } from "./pages/current-post";
import { Followers } from "./pages/followers";
import { Following } from "./pages/following";
import { AuthGuard } from "./features/user/authGuard";
const container = document.getElementById("root");
const router = createBrowserRouter([
    {
        path: '/auth',
        element: _jsx(Auth, {})
    },
    {
        path: '/',
        element: _jsx(Layout, {}),
        children: [
            {
                path: "",
                element: _jsx(Posts, {})
            },
            {
                path: "posts/:id",
                element: _jsx(CurrentPost, {})
            },
            {
                path: "users/:id",
                element: _jsx(UserProfile, {})
            },
            {
                path: "Followers",
                element: _jsx(Followers, {})
            },
            {
                path: "Following",
                element: _jsx(Following, {})
            },
        ]
    }
]);
if (container) {
    const root = createRoot(container);
    root.render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(NextUIProvider, { children: _jsx(ThemeProvider, { children: _jsx(AuthGuard, { children: _jsx(RouterProvider, { router: router }) }) }) }) }) }));
}
else {
    throw new Error("Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.");
}
