import { useState, useEffect } from "react";

const InfiniteScrollLogRocket = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	const fetchData = async () => {
		console.log("fetch");
		setIsLoading(true);

		try {
			const response = await fetch(
				`https://openlibrary.org/search.json?q=abc&page=${page}`
			);
			const data = await response.json();

			setItems((prevItems) => [...prevItems, ...data.docs]);
			setPage((prevPage) => prevPage + 1);
		} catch (error) {
			console.log("errrrr", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleScroll = () => {
		if (isLoading) return;
		if (
			window.innerHeight + document.documentElement.scrollTop >=
			document.documentElement.offsetHeight - 100
		) {
			fetchData();
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isLoading]);

	return (
		<div>
			<h2>Infinite Scrolling</h2>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
			{isLoading && <p>Loading...</p>}
		</div>
	);
};

export default InfiniteScrollLogRocket;
