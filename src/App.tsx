import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import DynamicForm from "./components/DynamicForm";
import { dfySteps, Option } from "./helpet";

const App: React.FC = () => {
	const [stepHistory, setStepHistory] = useState<string[]>([]);
	const [formData, setFormData] = useState<Record<string, string>>({});
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalScore, setTotalScore] = useState<number>(0);

	const handleOptionSelect = (option: Option) => {
		if (option.price) {
			setTotalPrice((prevPrice) => prevPrice + option.price!);
			setTotalScore((prevScore) => prevScore + option.score!);
		}
	};
	console.log(stepHistory);

	const lastStep =
		stepHistory.length > 0 ? stepHistory[stepHistory.length - 1] : null;
	if (dfySteps[lastStep!]?.nextStep === null) {
		return (
			<div className="flex flex-col items-center justify-center h-full bg-[#c2e812] text-center border-4 border-white p-8 rounded-lg">
				<h1 className="text-5xl font-bold mb-8">🎉 Thank You! 🎉</h1>
				<p className="text-3xl">
					Your estimated price would be:{" "}
					<span className="font-bold text-4xl">
						${totalPrice * 3}
					</span>
				</p>
				<p className="text-3xl">
					Your final lead score is:{" "}
					<span className="font-bold text-4xl">{totalScore}</span>
				</p>
				<p className="mt-8 text-2xl">We appreciate your interest! 😊</p>
			</div>
		);
	}

	return (
		<div className="h-screen">
			<DynamicForm
				steps={dfySteps}
				initialStep="initialQualificationStep"
				stepHistory={stepHistory}
				setStepHistory={setStepHistory}
				formData={formData}
				setFormData={setFormData}
				onOptionSelect={handleOptionSelect}
			/>
		</div>
	);
};

export default App;
