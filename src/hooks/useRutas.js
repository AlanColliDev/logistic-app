import { useContext, useState } from 'react';
import { CombustibleContext } from '../context/Logistica';
import { GetRutasByChofer } from '../services/GetRutasByChofer';

export const useRutas = () => {
	
	const [rutas, setRutas] = useState( [] );
	const [ isLoading, setIsLoading ] = useState( true );
	const { dataCombustible } = useContext( CombustibleContext );
	const { choferData } = dataCombustible; 

	const HandleSetRutas = () => {
		const rutasList = GetRutasByChofer(choferData.clave);
		setRutas();
	}
	
	
	return {
		rutas,
		TitleTable: `RUTAS DE: ${choferData.nombre} ${choferData.apellidopaterno} ${choferData.apellidomaterno} - ${choferData.clave}`;
		HandleSetRutas,
	}
}
