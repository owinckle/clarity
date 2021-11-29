/*
=========================================================
Clarity Dashboard React - v1.0
=========================================================

Product Page:
Copyright 2021 Arkalys (https://www.arkalysapps.com)
Licensed under MIT ()

Coded by Arkalys

=========================================================

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Modules
import React, { Component } from "react";
import { render } from "react-dom";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

// CSS
import "./assets/css/main.css";
import "./assets/css/sidebar.css";
import "./assets/css/navbar.css";
import "./assets/css/buttons.css";
import "./assets/css/dropdown.css";

import "./assets/css/dark.css";
import "./assets/css/responsive.css";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarTab from "./components/Sidebar/SidebarTab";
import Navbar from "./components/Navbar/Navbar";
import NavbarSearch from "./components/Navbar/NavbarSearch";
import IconButton from "./components/Buttons/IconButton";
import IconButtonToggler from "./components/Buttons/IconButtonToggler";
import SimpleDropdown from "./components/Dropdown/SimpleDropdown";
import NotificationDropdownItem from "./components/Items/NotificationDropdownItem";

// Layouts
import GridLayout from "./layouts/GridLayout";

export default class Clarity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mode: "light"
		}

		this.updateState	= this.updateState.bind(this);
		this.lightSwitch	= this.lightSwitch.bind(this);
	}

	updateState(target, value) {
		this.setState({
			[target]: value
		});
	}

	// Switch between light and dark mode
	lightSwitch() {
		this.setState({
			mode: this.state.mode == "light" ? "dark" : "light"
		});
	}

	render() {
		return(
			<div className={ this.state.mode == "light" ? "wrapper" : "wrapper dark" }>
				<Router>
					<Sidebar title="Clarity">
						<SidebarTab icon="dashboard" label="Dashboard" url="/" active={ true } />
						<SidebarTab icon="mail" label="Messages" url="/messages" active={ false } />
						<SidebarTab icon="people" label="Contacts" url="/contacts" active={ false } />
						<SidebarTab icon="settings" label="Settings" url="/settings" active={ false } />
					</Sidebar>
					<div className="main-container">
						<Navbar>
							<NavbarSearch placeholder="Search for anything" />
							<GridLayout size="3">
								<IconButton icon="dark_mode" action={ this.lightSwitch } />
								<IconButtonToggler icon="notifications" action={ null }>
									<SimpleDropdown>
										<NotificationDropdownItem
											avatar="https://i.gyazo.com/a444eff2eec3ac169baf41b7d56d9169.jpg"
											label="New message from Yukinox"
											timestamp="14 minutes ago"
										/>
										<NotificationDropdownItem
											avatar="https://i.gyazo.com/a444eff2eec3ac169baf41b7d56d9169.jpg"
											label="New message from Yukinox"
											timestamp="14 minutes ago"
										/>
										<NotificationDropdownItem
											avatar="https://i.gyazo.com/a444eff2eec3ac169baf41b7d56d9169.jpg"
											label="Payment successfully completed"
											timestamp="2 days ago"
										/>
									</SimpleDropdown>
								</IconButtonToggler>
							</GridLayout>
						</Navbar>
					</div>
				</Router>
			</div>
		)
	}
}

render(<Clarity />, document.getElementById("root"));
