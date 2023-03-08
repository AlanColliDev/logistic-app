export const choferReducer = ( initialState, action ) => {

	const {payload, type} = action;
	
	if(type === '@filter-chofer')
	{
		return initialState.filter(chofer => chofer.clave === payload.clave);
	}

}