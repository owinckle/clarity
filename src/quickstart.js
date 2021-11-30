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

// Images
import avatar from "./assets/img/avatar.jpg";

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
import Grid from "./layouts/Grid";
import Wrapper from "./layouts/Wrapper";

export default class Clarity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            darkMode: false
        }

        this.lightSwitch = this.lightSwitch.bind(this);
    }

    // This function can modified changed to suit your needs.
    lightSwitch() {
        this.setState({
            darkMode: this.state.darkMode ? false : true
        });
    }

    render() {

        return (
            <Wrapper classes={this.state.darkMode ? "wrapper dark" : "wrapper"}>
                <Router>
                    <Sidebar title="Clarity">
                        <SidebarTab icon="dashboard" label="Dashboard" url="/" active={true} />
                        <SidebarTab icon="mail" label="Messages" url="/messages" active={false} />
                        <SidebarTab icon="people" label="Contacts" url="/contacts" active={false} />
                        <SidebarTab icon="settings" label="Settings" url="/settings" active={false} />
                    </Sidebar>
                    <Wrapper classes="main-container">
                        <Navbar>
                            <NavbarSearch placeholder="Search for anything" />
                            <Grid size="2">
                                <IconButton icon={this.state.darkMode ? "light_mode" : "dark_mode"} action={this.lightSwitch} />
                                <IconButtonToggler icon="notifications">
                                    <SimpleDropdown>
                                        <NotificationDropdownItem
                                            avatar={avatar}
                                            label="New message from John"
                                            timestamp="14 minutes ago"
                                        />
                                    </SimpleDropdown>
                                </IconButtonToggler>
                            </Grid>
                        </Navbar>
                    </Wrapper>
                </Router>
            </Wrapper>
        )
    }
}

render(<Clarity />, document.getElementById("root"));
