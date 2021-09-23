/** @format */

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Roles } from '../Config/Roles';

export const AuthContext = createContext();

const AuthContextProvider = props => {
	const history = useHistory();

	const [isLogged, setIsLogged] = useState(
		localStorage.getItem('token') ? true : false,
	);

	const [state, setState] = useState({
		token: localStorage.getItem('token'),
		userId: localStorage.getItem('userId'),
		roleId: localStorage.getItem('roleId'),
	});
	useEffect(() => {
		axios.defaults.headers.common['auth-token'] = state.token;
	}, [isLogged]);

	const login = (token, userId, roleId, user) => {
		localStorage.setItem('token', token);
		localStorage.setItem('userId', userId);
		localStorage.setItem('roleId', roleId);
		localStorage.setItem('userObj', JSON.stringify(user));
		setState({ ...state, token, userId, roleId, user });
		setIsLogged(true);
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.setItem('userId', null);
		localStorage.setItem('roleId', null);
		setState({ ...state, token: null, userId: null, roleId: null });
		history.push('/');
		setIsLogged(false);
	};
	if (state.roleId == Roles.Admin) {
		history.push('/adminpage');
	}
	return (
		<AuthContext.Provider value={{ ...state, logout, login, isLogged }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
