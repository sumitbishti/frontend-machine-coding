import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const App = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress(progress + 10);
		}, 1000);

		if (progress === 100) clearInterval(interval);
		return () => {
			clearInterval(interval);
		};
	}, [progress]);

	return <ProgressBar progress={progress} />;
};
export default App;
