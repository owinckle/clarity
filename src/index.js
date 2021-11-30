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

// Images
import avatar from "./assets/img/avatar.jpg";
import email from "./assets/img/email.jpg";

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
import CardEvent from "./components/Cards/CardEvent";
import TableHeadLabel from "./components/Items/TableHeadLabel";
import TableItem from "./components/Items/TableItem";

// Layouts
import Grid from "./layouts/Grid";
import Wrapper from "./layouts/Wrapper";

export default class Clarity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			darkMode: false
		}

		this.lightSwitch	= this.lightSwitch.bind(this);
	}

	// Switch between light and dark mode
	lightSwitch() {
		this.setState({
			darkMode: this.state.darkMode ? false : true
		});
	}

	render() {
		const salesSeries = [{
			name: "Sales",
			data: [234, 123, 232, 263, 121, 123, 300]
		}];
		const salesOptions = {
			chart: {
				type: "bar",
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "30%",
					borderRadius: 7
				},
			},
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			},
			colors: ["#573bff"]
		};

		const revenueSeries = [
			{
				name: "Total",
				data: [31, 40, 28, 51, 42, 109]
			},
			{
				name: "Pipeline",
				data: [11, 32, 45, 32, 34, 52]
			},
		];
		const revenueOptions = {
			chart: {
				type: "bar",
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "30%",
					borderRadius: 7
				},
			},
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
			},
			colors: ["#573bff", "#05c4f9"]
		};

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
								<IconButtonToggler icon="notifications">
									<SimpleDropdown>
										<NotificationDropdownItem
											avatar={ avatar }
											label="New message from Yukinox"
											timestamp="14 minutes ago"
										/>
										<NotificationDropdownItem
											avatar={ avatar }
											label="New message from Yukinox"
											timestamp="14 minutes ago"
										/>
										<NotificationDropdownItem
											avatar={ avatar }
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
						<Grid size="1-2">
							<Card title="Sales">
								<Chart
									series={ salesSeries }
									options={ salesOptions }
									type="bar"
									height={ 200 }
								/>
							</Card>
							<Card title="Products">
								<Grid size="4">
									<TableHeadLabel label="ID" />
									<TableHeadLabel label="Name" />
									<TableHeadLabel label="Price" />
									<TableHeadLabel label="Status" />
								</Grid>
								<Grid size="4">
									<TableItem text="1" />
									<TableItem text="T-Shirt" />
									<TableItem text="$39.99" />
									<TableItem text="In Stock" />
								</Grid>
								<Grid size="4">
									<TableItem text="2" />
									<TableItem text="Shoes" />
									<TableItem text="$59.99" />
									<TableItem text="In Stock" />
								</Grid>
								<Grid size="4">
									<TableItem text="3" />
									<TableItem text="Gloves" />
									<TableItem text="$29.99" />
									<TableItem text="In Stock" />
								</Grid>
								<Grid size="4">
									<TableItem text="4" />
									<TableItem text="Socks" />
									<TableItem text="$9.99" />
									<TableItem text="Out of Stock" />
								</Grid>
							</Card>
						</Grid>
						<Grid size="2-1">
							<Card title="Overall Revenue">
								<Chart
									series={ revenueSeries }
									options={ revenueOptions }
									type="area"
									height={ 350 }
								/>
							</Card>
							<CardEvent
								image={ email }
							/>
						</Grid>
					</Wrapper>
				</Router>
			</Wrapper>
		)
	}
}

render(<Clarity />, document.getElementById("root"));
