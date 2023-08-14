import "./App.css";

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Store from "./components/Pages/Store";

const router = createBrowserRouter([
	{ path: "/", element: <Store /> },
	{ path: "/ContactUs", element: <ContactUs /> },
	{ path: "/About", element: <About /> },
]);

function App() {
	return<RouterProvider router={router} />;
}

export default App;