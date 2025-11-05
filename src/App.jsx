import React from "react";
import Choice from "./pages/Choice";
import Get from "./pages/Get";
import Post from "./pages/Post";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	return (
		<div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen w-screen flex justify-center items-center">
			<Routes>
				<Route path="/" element={<Choice />} />
				<Route path="/get" element={<Get />} />
				<Route path="/post" element={<Post />} />
			</Routes>
		</div>
	);
};

export default App;
