export default function NavbarSearch(props) {
	return (
		<div className="search">
			<span className="material-icons">search</span>
			<input
				placeholder={ props.placeholder }
			/>
		</div>
	);
}