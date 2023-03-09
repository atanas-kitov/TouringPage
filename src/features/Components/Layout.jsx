import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home/Home';
import ServicePage from './ServicePage/ServicePage';

const Layout = () => {
	return (
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<ServicePage />} path='/:id' />
		</Routes>
	);
};

export default Layout;
