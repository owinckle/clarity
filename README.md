# Clarity Dashboard Documentation

## Getting Started

### Installation
Install Clarity Dashboard by running either of the following:

- Install NodeJS LTS from NodeJs Official Page (NOTE: Product only works with LTS version)

Clone the repository with the following command:

``git clone https://github.com/creativetimofficial/purity-ui-dashboard.git``

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
### Cards
#### Card Default
A default empty card, with just a title
```js
import Card from "./components/Cards/Card";

<Card title="Products">
<Card>
```

#### Card Info
```js
A predefined card to display information
import CardInfo from "./components/Cards/CardInfo";

<CardInfo
    title="Sales"
    icon="info" // Material Icons
    data="142"
    iconColor="#fff" // A CSS color (rgb, rgba, hex, varialbes)
    iconBackground="var(--success)"
/>
```