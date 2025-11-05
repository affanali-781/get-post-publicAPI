import React from "react";
import { useNavigate } from "react-router-dom";

const Choice = () => {
	const radioClass = "w-5 h-5 accent-blue-500 cursor-pointer align-middle ";
	const labelClass =
		"text-lg cursor-pointer text-gray-700 hover:text-blue-600 mx-2 align-middle";

	const navigate = useNavigate();

	const handleRadioChange = (e) => {
		const { value } = e.target;
		navigate(`/${value}`);
	};

	return (
		<>
			{/*page div*/}
			<div className="flex flex-col bg-blue-100 h-100 w-100 mx-140 px-10 py-10">
				{/*inner div*/}
				<div className="w-80 p-5 mb-2 text-center">
					{/*inner-heading div*/}
					<h1 className="font-bold text-xl">
						What do you want to do with the API?
					</h1>
				</div>
				<div className="flex flex-col items-center p-10 space-y-5">
					{/*inner-input div*/}
					<div>
						{/*radio button1 div*/}
						<input
							type="radio"
							name="api"
							id="get"
							value="get"
							className={radioClass}
							onChange={handleRadioChange}
						/>
						<label htmlFor="get" className={labelClass}>
							GET
						</label>
					</div>
					<div>
						{/*radio button2 div*/}
						<input
							type="radio"
							name="api"
							id="post"
							value="post"
							className={radioClass}
							onChange={handleRadioChange}
						/>
						<label htmlFor="post" className={labelClass}>
							POST
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Choice;
