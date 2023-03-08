import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


export const useUserLogged = () => {
	const navigate = useNavigate();

	const { user, setUser } = useContext( UserContext );

	const HandleSetUser = ({  userCredentials = {} }) => {
		setUser( userCredentials );
	};

	// const RedirectLogin = () => {
		
	// }

	useEffect(() => {
		if(user?.logged)
			navigate('/logistica');
		else		
			console.log('NO LOGGED');
	}, [navigate, user])
	

	return {
		user,
		HandleSetUser, 
	}
}
