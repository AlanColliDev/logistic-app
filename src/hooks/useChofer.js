import { useState, useEffect, useReducer, useContext } from 'react';
import { CombustibleContext } from '../context/Logistica';
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
	const [ isLoading, setIsLoading ] = useState( true );

	const { dataCombustible, setCapturaCombustible } = useContext(CombustibleContext)

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
		setCapturaCombustible(currentData => {
			const { choferData } = currentData;
			return {
				...currentData,
				choferData: choferData.clave === pchofer.clave ? initUser : pchofer
			}
		});
	};

	useEffect(() => {
		getListChoferes();
	}, []);

	return {
		choferes,
		isLoading,
		choferSelected: dataCombustible.choferData,
		isValidChofer: choferes.filter(chofer =>  chofer.clave === dataCombustible.choferData.clave).length > 0,
		onSearchChofer,
		onSelectChofer
	};

}
