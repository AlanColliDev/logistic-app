export const auth = ({username = '', password = ''}) => {
	const hardCode = {
		pusername: 'alan.colli',
		ppassword: 'demotest'
	};
	if(username.toLowerCase() === hardCode.pusername && password === hardCode.ppassword)
		return{
			logged: true,
			username
		};
	return {
		logged: false,
		username
	};
}
