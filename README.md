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

Clarity Dashboard provides an initial index.js file with the necessary code structure to get started:

```js
export default class Clarity extends Component {
	constructor(props) {
		super(props);

		this.state = {
			darkMode: false
		}

		this.updateState	= this.updateState.bind(this);
		this.lightSwitch	= this.lightSwitch.bind(this);
	}

	updateState(target, value) {
		this.setState({
			[target]: value
		});
	}

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
											avatar={ avatar }
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
```