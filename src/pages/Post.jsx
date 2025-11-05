import React from "react";

const Post = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			{/* Heading */}
			<h1 className="text-3xl font-bold mb-8 text-center text-red-700 bg-yellow-100 p-4 rounded-xl shadow-md w-full max-w-md">
				Add Data
			</h1>

			{/* Form Container */}
			<div className="flex flex-col w-full max-w-md p-8 bg-white rounded-2xl shadow-lg overflow-auto space-y-6">
				<form className="flex flex-col space-y-6">
					{/* Title */}
					<div className="flex flex-col">
						<label className="font-semibold mb-2">Title:</label>
						<input
							type="text"
							placeholder="Enter title"
							className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* ID */}
					<div className="flex flex-col">
						<label className="font-semibold mb-2">ID:</label>
						<input
							type="number"
							placeholder="Enter ID"
							className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* User ID */}
					<div className="flex flex-col">
						<label className="font-semibold mb-2">User ID:</label>
						<input
							type="number"
							placeholder="Enter User ID"
							className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* Completed */}
					<div className="flex flex-col space-y-2">
						<span className="font-semibold mb-1">Completed:</span>
						<div className="flex space-x-6">
							<div className="flex items-center space-x-2">
								<input
									type="radio"
									name="isComplete"
									id="complete"
									value="true"
									className="accent-blue-500"
								/>
								<label htmlFor="complete">Yes</label>
							</div>
							<div className="flex items-center space-x-2">
								<input
									type="radio"
									name="isComplete"
									id="incomplete"
									value="false"
									className="accent-blue-500"
								/>
								<label htmlFor="incomplete">No</label>
							</div>
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
			</div>
		</div>
	);
};

export default Post;
