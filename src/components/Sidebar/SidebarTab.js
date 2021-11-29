import { Link } from "react-router-dom";

export default function SidebarTab(props) {
	return (
		<Link to={ props.url } className={ props.active ? "tab active" : "tab" }>
			<span className="material-icons">{ props.icon }</span>
			<div className="label">{ props.label }</div>
		</Link>
	);
}