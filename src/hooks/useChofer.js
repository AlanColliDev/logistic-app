import { useState, useEffect, useReducer } from 'react';
import { getChoferes, getChoferesByFilter } from '../services/Choferes';

const initUser = {
	clave: null
	,nombre: ''
	,apellidopaterno: ''
	,apellidomaterno: ''
	,sueldo: 0
};

export const useChofer = ({ stringSearch = '' }) => {
	const [ choferes, setChoferes ] = useState([{}]);
	const [ choferSelected, setChoferSelected ] = useState(initUser);
	const [ isLoading, setIsLoading ] = useState( true );
	

	const getListChoferes = async () => {
		const choferList =  await getChoferes();
		setChoferes( choferList );
		setIsLoading( false );
	};

	const onSearchChofer = (event, formState) => {
		event.preventDefault();
		setIsLoading( true );
		const { stringChofer } = formState;
		const filtered = choferes.filter(chofer => chofer.clave.toString() === stringChofer);	
		setChoferes(filtered)
		setIsLoading( false );

	};

	const onSelectChofer = (pchofer) => {
		setChoferSelected((chofer) => chofer?.clave?.toString() === pchofer.clave.toString() ? initUser : pchofer)
	};

	useEffect(() => {
		getListChoferes();
	}, []);

	useEffect(() => {
		// tal vez aqui podria establecer algo referente al contexto
	}, [choferSelected])
	
	console.log(choferSelected)


	return {
		choferes,
		isLoading,
		choferSelected,
		isValidChofer: choferes.filter(chofer =>  chofer.clave === choferSelected?.clave).length > 0,
		onSearchChofer,
		onSelectChofer
	};

}
