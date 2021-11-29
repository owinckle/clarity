import React, { useState } from 'react';

export default function IconButtonToggler(props) {
	const [toggle, setToggle] = useState(false);

	console.log(toggle);

	return (
		<div className="icon-button-drop">
			<span className="material-icons icon-button" onClick={ () => setToggle(!toggle) }>{ props.icon }</span>
			{ toggle ? props.children : null }
		</div>
	);
}