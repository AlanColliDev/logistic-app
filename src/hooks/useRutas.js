import { useContext, useEffect, useState } from 'react';
import { CombustibleContext } from '../context/Logistica';
import { GetRutasByChofer } from '../services/GetRutasByChofer';

//SE EJECUTA MUCHAS VECES PORQUE ESTOY LLAMANDO ESTE HOOK EN EL RENDERIZADO DE CADA ITEM, POR OBVIEDAD SE VUELVE A LEER EL USEFFECT POR CADA UNO
export const useRutas = () => {
	
	const [rutas, setRutas] = useState( [] );
	const [ isLoading, setIsLoading ] = useState( true );

	const { dataCombustible, setCapturaCombustible } = useContext( CombustibleContext );
	const { choferData } = dataCombustible;
	
	useEffect(() => {
		const rutasFilteres = GetRutasByChofer(choferData.clave);
		setRutas(rutasFilteres)
		setIsLoading(false);
	}, [choferData.clave]);

	const HandleSetRuta = (folioRuta) => {
		if(!folioRuta) return;
		setCapturaCombustible((props) => {
			return {
				...props,
				claveRuta: props.claveRuta === folioRuta ? '' : folioRuta
			}
		});
	};
	
	return {
		rutas,
		isLoading,
		choferData: dataCombustible.choferData,
		TitleTable: `RUTAS DE: ${choferData.nombre} ${choferData.apellidopaterno} ${choferData.apellidomaterno} - ${choferData.clave}`,
		claveRuta: dataCombustible.claveRuta,
		HandleSetRuta
	}
}
