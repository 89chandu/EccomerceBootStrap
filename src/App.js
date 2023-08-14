import "./App.css";

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";

const router = createBrowserRouter([
	{ path: "/", element: <Store /> },
	{ path: "/Home", element: <Home /> },
	{ path: "/About", element: <About /> },
]);

function App() {
	return<RouterProvider router={router} />;
}

export default App;