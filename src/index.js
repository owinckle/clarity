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
import Chart from "react-apexcharts";

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
import "./assets/css/cards.css";
import "./assets/css/table.css";

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
import Card from "./components/Cards/Card";
import CardInfo from "./components/Cards/CardInfo";
import TableHeadLabel from "./components/Items/TableHeadLabel";
import TableItem from "./components/Items/TableItem";

// Layouts
import Grid from "./layouts/Grid";
import Wrapper from "./layouts/Wrapper";

export default class Clarity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			darkMode: true,
			series: [{
				name: "User Activity",
				data: [234, 123, 232, 263, 121, 123, 300]
			}],
			options: {
				chart: {
					type: 'bar',
					height: 350,
					toolbar: {
						show: false
					}
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '30%',
						borderRadius: 7
					},
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					show: true,
					width: 1,
					colors: ['transparent']
				},
				xaxis: {
					categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				},
				colors: ["#573bff"]
			}
		};

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
			darkMode: this.state.darkMode ? false : true
		});
	}

	render() {
		return(
			<Wrapper classes={ this.state.darkMode ? "wrapper dark" : "wrapper" }>
				<Router>
					<Sidebar title="Clarity">
						<SidebarTab icon="dashboard" label="Dashboard" url="/" active={ true } />
						<SidebarTab icon="mail" label="Messages" url="/messages" active={ false } />
						<SidebarTab icon="people" label="Contacts" url="/contacts" active={ false } />
						<SidebarTab icon="settings" label="Settings" url="/settings" active={ false } />
					</Sidebar>
					<Wrapper classes="main-container">
						<Navbar>
							<NavbarSearch placeholder="Search for anything" />
							<Grid size="2">
								<IconButton icon={ this.state.darkMode ? "light_mode" : "dark_mode" } action={ this.lightSwitch } />
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
							</Grid>
						</Navbar>
						<Grid size="4">
							<CardInfo
								title="Used Space"
								icon="content_copy"
								data="33/50 GB"
								iconColor="#fff"
								iconBackground="var(--warning)"
							/>
							<CardInfo
								title="Revenue"
								icon="store"
								data="$4,250"
								iconColor="#fff"
								iconBackground="var(--brand)"
							/>
							<CardInfo
								title="Fixed Issues"
								icon="info"
								data="$4,250"
								iconColor="#fff"
								iconBackground="var(--success)"
							/>
							<CardInfo
								title="Followers"
								icon="favorite"
								data="532"
								iconColor="#fff"
								iconBackground="var(--danger)"
							/>
						</Grid>
						<Grid size="3">
							<Card title="User Activity">
								<Chart
									options={this.state.options}
									series={this.state.series}
									type="bar"
								/>
							</Card>
							<Card title="User Activity"></Card>
							<Wrapper classes="grid">
								<CardInfo
									title="Total Earnings"
									icon="receipt"
									data="$2,654"
									iconColor="#fff"
									iconBackground="var(--brand)"
								/>
								<CardInfo
									title="Total Sales"
									icon="info"
									data="452"
									iconColor="#fff"
									iconBackground="var(--success)"
								/>
							</Wrapper>
						</Grid>
						<Grid size="2">
							<Card title="Products">
								<Grid size="3">
									<TableHeadLabel label="ID" />
									<TableHeadLabel label="Name" />
									<TableHeadLabel label="Price" />
								</Grid>
								<Grid size="3">
									<TableItem text="1" />
									<TableItem text="T-Shirt" />
									<TableItem text="$39.99" />
								</Grid>
								<Grid size="3">
									<TableItem text="2" />
									<TableItem text="Shoes" />
									<TableItem text="$59.99" />
								</Grid>
								<Grid size="3">
									<TableItem text="3" />
									<TableItem text="Gloves" />
									<TableItem text="$29.99" />
								</Grid>
								<Grid size="3">
									<TableItem text="4" />
									<TableItem text="Socks" />
									<TableItem text="$9.99" />
								</Grid>
							</Card>
						</Grid>
					</Wrapper>
				</Router>
			</Wrapper>
		)
	}
}

render(<Clarity />, document.getElementById("root"));
