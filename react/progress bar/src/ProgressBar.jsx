import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
	return (
		<div className="container">
			<div
				className="progress-bar"
				style={{ transform: `translateX(calc(${progress - 100}%))` }}
			></div>
		</div>
	);
};
export default ProgressBar;
  