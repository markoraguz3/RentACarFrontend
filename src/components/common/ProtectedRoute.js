/** @format */

import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { Roles } from '../../Config/Roles';
import { AuthContext } from '../../Contexts/AuthContext';

function ProtectedRoute({ component: Component, ...restOfProps }) {
	const { isLogged, roleId } = useContext(AuthContext);
	const history = useHistory();

	if (roleId == Roles.Admin) {
		history.push('/adminpage');
	}
	return (
		<Route
			{...restOfProps}
			render={props =>
				isLogged ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
}

export default ProtectedRoute;
