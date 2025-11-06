import React, { useState } from "react";
import axios from "axios";

const Post = () => {
	const [title, setTitle] = useState("");
	const [id, setId] = useState("");
	const [userId, setUserId] = useState("");
	const [isComplete, setIsComplete] = useState("");
	const [response, setResponse] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const postData = {
			title,
			id,
			userId,
			completed: isComplete === "true",
		};

		try {
			const res = await axios.post(
				"https://jsonplaceholder.typicode.com/todos",
				postData
			);
			setResponse(res.data);
		} catch (error) {
			console.error("Error adding post:", error);
		}
	};

	return (
		<div className="min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center py-10">
			<h1 className="text-3xl font-bold bg-purple-200 p-5 rounded-lg text-red-600 text-center shadow-md mb-6">
				Add Data
			</h1>

			<div className="flex flex-col items-center">
				<form
					className="flex flex-col p-10 bg-purple-100 rounded-lg shadow-lg w-[450px] space-y-4"
					onSubmit={handleSubmit}
				>
					{/* Title Input */}
					<div className="flex flex-col">
						<label className="font-bold mb-2">Title:</label>
						<input
							type="text"
							placeholder="Enter title"
							onChange={(e) => setTitle(e.target.value)}
							required
							className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* ID Input */}
					<div className="flex flex-col">
						<label className="font-bold mb-2">ID:</label>
						<input
							type="number"
							placeholder="Enter ID"
							onChange={(e) => setId(e.target.value)}
							required
							className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* User ID Input */}
					<div className="flex flex-col">
						<label className="font-bold mb-2">User ID:</label>
						<input
							type="number"
							placeholder="Enter User ID"
							onChange={(e) => setUserId(e.target.value)}
							required
							className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* Completed Radio Buttons */}
					<div className="flex flex-col space-y-2">
						<span className="font-bold">Completed:</span>
						<div className="flex items-center space-x-6">
							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="isComplete"
									value="true"
									checked={isComplete === "true"}
									onChange={(e) => setIsComplete(e.target.value)}
									className="accent-blue-500"
								/>
								<span>Yes</span>
							</label>
							<label className="flex items-center space-x-2">
								<input
									type="radio"
									name="isComplete"
									value="false"
									checked={isComplete === "false"}
									onChange={(e) => setIsComplete(e.target.value)}
									className="accent-blue-500"
								/>
								<span>No</span>
							</label>
						</div>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-colors duration-300"
					>
						Add
					</button>
				</form>

				{/* Response Section */}
				{response && (
					<div className="mt-6 p-4 bg-white rounded-lg shadow-md w-[400px]">
						<h2 className="font-bold mb-2">Response:</h2>
						<pre className="text-sm bg-gray-100 p-3 rounded-lg overflow-auto">
							{JSON.stringify(response, null, 2)}
						</pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default Post;
