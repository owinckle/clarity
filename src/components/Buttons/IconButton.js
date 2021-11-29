export default function IconButton(props) {
	return (
		<span className="material-icons icon-button" onClick={ props.action }>{ props.icon }</span>
	);
}