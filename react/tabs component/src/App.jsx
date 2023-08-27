import { Children, cloneElement, useState } from "react";

const Tab = ({ isActive, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			style={{ fontWeight: isActive ? "bold" : "normal" }}
		>
			{children}
		</button>
	);
};

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<div>
				{Children.map(children, (child, index) => {
					return cloneElement(child, {
						isActive: activeTab === index,
						onClick: () => setActiveTab(index),
					});
				})}
			</div>
			<div>{Children.toArray(children)[activeTab].props.children}</div>
		</div>
	);
};

const App = () => {
	return (
		<Tabs>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
			<Tab>Tab 3</Tab>
		</Tabs>
	);
};
export default App;
