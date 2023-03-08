import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

	// Podria hacer la simulacion del Login aqui?
	const [user, setUser] = useState();

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
