export default function Sidebar(props) {
	return (
		<div className="sidebar">
			<div className="title">{ props.title }</div>
			{ props.children }
		</div>
	);
}