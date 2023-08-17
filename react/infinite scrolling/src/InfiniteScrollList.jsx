import { useState, useEffect } from "react";

const InfiniteScrollList = () => {
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const fetchItems = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://openlibrary.org/search.json?q=abc&page=${page}`
			);
			const data = await response.json();
            const newItems = [...items, ...data.docs]
            setItems(newItems)
			// setItems((prevItems) => [...prevItems, ...data.docs]);
			setPage((prevPage) => prevPage + 1);
		} catch (error) {
			console.error("Error fetching items:", error);
		}
		setLoading(false);
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop >=
			document.documentElement.offsetHeight - 100
		) {
			fetchItems();
		}
	};

	useEffect(() => {
		fetchItems();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<h1>Infinite Scroll Example</h1>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
			{loading && <p>Loading...</p>}
		</div>
	);
};

export default InfiniteScrollList;
