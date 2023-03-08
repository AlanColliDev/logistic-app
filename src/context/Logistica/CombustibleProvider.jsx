import { useState } from 'react';
import { CombustibleContext } from './';

export const CombustibleProvider = ({ children }) => {

	const [capturaCombustible, setCapturaCombustible] = useState({})

	return (
		<CombustibleContext.Provider value={{ capturaCombustible, setCapturaCombustible }}>
			{ children }
		</CombustibleContext.Provider>
	)
}
