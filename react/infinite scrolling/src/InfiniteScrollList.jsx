import { useEffect, useState } from "react";

const InfiniteScrollList = () => {
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(null);

	const fetchItems = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://openlibrary.org/search.json?q=abc&page=${page}`
			);

			const data = await response.json();
			console.log(data);
			setItems((prevItems) => [...prevItems, ...data.docs]);
			setPage((prevPage) => prevPage + 1);
		} catch (error) {
			console.log("errrrrrrr", error);
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
			<h2>Infinite Scroll</h2>
			<ul>
				{items.map((item, index) => {
					return <li key={index}>{item.title}</li>;
				})}
			</ul>

			{loading && <p>Loading...</p>}
		</div>
	);
};
export default InfiniteScrollList;
