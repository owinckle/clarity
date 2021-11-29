export default function GridLayout(props) {
	return (
		<div className={ "grid _" + props.size + "-grid" }>
			{ props.children }
		</div>
	);
}