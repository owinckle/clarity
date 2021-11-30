# Clarity Dashboard Documentation

## Getting Started

### Installation
Install Clarity Dashboard by running either of the following:

- Install NodeJS LTS from NodeJs Official Page (NOTE: Product only works with LTS version)

Clone the repository with the following command:

``git clone https://github.com/owinckle/clarity.git``

Run in terminal this command:

``npm install``

Then run this command to start your local server:

``npm start``

### Quickstart

Clarity Dashboard provides an initial index.js file with the necessary code structure to get started.

## Components
### Layouts
#### Wrapper
A ``div`` element taking multiple CSS classes
```js
import Wrapper from "./layouts/Wrapper";

<Wrapper classes="main-container">
</Wrapper>
```

#### Grid
A predefined Grid Layout. Clarity Dashboard provides already existing grids. The Grid component only takes one size prop, defining the column layout. The size defines the class used to create the grid template. (See main.css to understand more about the grids.)

For example, size of 4 sets the following class:
```css
._4-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr
}
``` 
Usage:
```js
import Grid from "./layouts/Grid";

<Grid size="4">
</Grid>
```

### Navigation
#### Sidebar
Clarity's sidebar comes with two components. The sidebar wrapper and the tabs.

```js
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarTab from "./components/Sidebar/SidebarTab";

<Sidebar title="Clarity">
    <SidebarTab icon="dashboard" label="Dashboard" url="/" active={true} />
    <SidebarTab icon="mail" label="Messages" url="/messages" active={false} />
    <SidebarTab icon="people" label="Contacts" url="/contacts" active={false} />
    <SidebarTab icon="settings" label="Settings" url="/settings" active={false} />
</Sidebar>
```

#### Navbar
Similar to the sidebar, the navbar is the menu at the top of the dashboard. The main component is a wrapper, and it can contain mostly anything.
```js
import Navbar from "./components/Navbar/Navbar";
import NavbarSearch from "./components/Navbar/NavbarSearch";

<Navbar>
    <NavbarSearch placeholder="Search for anything..." />
</Navbar>
```

### Cards
#### Card Default
A default empty card, with just a title
```js
import Card from "./components/Cards/Card";

<Card title="Products">
<Card>
```

#### Card Info
A predefined card to display information
```js
import CardInfo from "./components/Cards/CardInfo";

<CardInfo
    title="Sales"
    icon="info" // Material Icons
    data="142"
    iconColor="#fff" // A CSS color (rgb, rgba, hex, varialbes)
    iconBackground="var(--success)"
/>
```

### Buttons
#### Icon Button
An icon that works as a button. This component takes two props, "icon" and "action", being respectively a Material Icons icon and a function.
```js
import IconButton from "./components/Buttons/IconButton";

<IconButton icon={this.state.darkMode ? "light_mode" : "dark_mode"} action={this.lightSwitch} />
```

#### Icon Button Toggler
An icon that works as a button. This component works like a switch, mostly for dropdown menus.
```js
import IconButtonToggler from "./components/Buttons/IconButtonToggler";
import SimpleDropdown from "./components/Dropdown/SimpleDropdown";
import NotificationDropdownItem from "./components/Items/NotificationDropdownItem";

<IconButtonToggler icon="notifications">
    <SimpleDropdown>
        <NotificationDropdownItem
            avatar={avatar} // Image
            label="New message from John"
            timestamp="14 minutes ago"
        />
    </SimpleDropdown>
</IconButtonToggler>
```

### Tables
Instead of creating predefined tables, we made them easy to modify and create. We use the Grid component to set the number of columns, then two different components for the table headers and content. We recommend using the tables inside your cards.
```js
<Card title="My Products">
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
```

### Charts
Clarity uses Apex Charts. You can check their doc here: https://apexcharts.com/docs/react-charts/