import { useState } from 'react';
import { CombustibleContext } from './';

export const CombustibleProvider = ({ children }) => {

	const [ dataCombustible, setCapturaCombustible ] = useState({
		choferData: {},
		claveRuta: '',
		combustibleData: {}
	});	

	return (
		<CombustibleContext.Provider value={{ dataCombustible, setCapturaCombustible }}>
			{children}
		</CombustibleContext.Provider>
	)
}
