import React, { useState, useEffect } from "react";
import axios from "axios";

const Get = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((response) => setData(response.data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold mb-1 text-center text-red-700 bg-yellow-100 p-2 rounded-lg">
				Fetched Data
			</h1>
			<div className="flex flex-col h-[500px] w-[400px] p-4 bg-white overflow-auto rounded-lg shadow-lg">
				{data ? (
					data.map((item) => (
						<div key={item.id} className="border-b py-2">
							<span className="font-bold">{item.id}</span>
							{". "}
							<span className="font-bold">"{item.title}"</span>{" "}
							{item.completed ? (
								<p className="text-green-500">"Completed"</p>
							) : (
								<p className="text-red-500">"Not Completed"</p>
							)}
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default Get;
