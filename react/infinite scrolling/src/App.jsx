import InfiniteScrollList from "./InfiniteScrollList";
import { useState } from "react";

const App = () => {
	const url = "https://openlibrary.org/search.json";
	const [baseUrl, setbaseUrl] = useState(url);
	const [query, setquery] = useState("abc");

	return (
		<div>
			<InfiniteScrollList baseUrl={baseUrl} query={query} />
		</div>
	);
};

export default App;
