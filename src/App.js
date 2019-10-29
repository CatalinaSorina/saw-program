import React from 'react';
import './App.css';
import Login from './App/components/start/Login';
import Register from './App/components/start/Register';
import { Route, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout className="layout">
			<Header>
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} style={{ lineHeight: '64px' }}>
					<Menu.Item key="1">
						<NavLink to="/">Acasa</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink to="/login">Log in</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<NavLink to="/register">Inregistrare</NavLink>
					</Menu.Item>
				</Menu>
			</Header>
			<nav>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</nav>
			<Content style={{ padding: '3rem' }}>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Program SAW & PIPES</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Saw & Pipes @2019</Footer>
		</Layout>
	);
}

export default App;
