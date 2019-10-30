import React from 'react';
import './styles/App.css';
import Login from './components/menu/Login';
import Register from './components/menu/Register';
import ChangePass from './components/menu/ChangePass';
import { Route, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
	state = {
		username: null
	};

	render() {
		return !this.state.username ? (
			<Layout className="layout">
				<Header>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} style={{ lineHeight: '64px' }}>
						<Menu.Item key="1">
							<NavLink to="/">Acas&#259;</NavLink>
						</Menu.Item>
						<Menu.Item key="2">
							<NavLink to="/login">Logare</NavLink>
						</Menu.Item>
						<Menu.Item key="3">
							<NavLink to="/register">&#206;nregistrare</NavLink>
						</Menu.Item>
					</Menu>
				</Header>
				<nav>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</nav>
				<Content />
				<Footer style={{ textAlign: 'center' }}>Saw & Pipes @2019</Footer>
			</Layout>
		) : (
			<Layout className="layout">
				<Header>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} style={{ lineHeight: '64px' }}>
						<Menu.Item key="1">
							<NavLink to="/">Acas&#259;</NavLink>
						</Menu.Item>
						<Menu.Item key="2">
							<NavLink to="/pass">Modic&#259; parola</NavLink>
						</Menu.Item>
					</Menu>
				</Header>
				<nav>
					<Route exact path="/pass" component={ChangePass} />
				</nav>
				<nav>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</nav>
				<Content />
				<Footer style={{ textAlign: 'center' }}>{this.state.username}</Footer>
			</Layout>
		);
	}
}

export default App;
