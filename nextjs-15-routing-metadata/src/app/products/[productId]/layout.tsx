export default function ProductDetailsLayout({children}: {
	children: React.reactNode;
}) {
	return(
		<>
			{children}
			<h2>Featured products</h2>
		</>
	);
}