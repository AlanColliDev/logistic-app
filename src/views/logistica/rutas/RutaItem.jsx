// import { useState } from "react"

export const RutaItem = ({ ruta, HandleSetRuta, rutaSelected}) => {
	//TAL VEZ CAMBIAR POR DIVS
	return (
		<>
		{console.count('counter')}
			<tr 
			className={`${ rutaSelected === ruta.folio && 'bg-blue-400' }`.trim()}
			// className={`${ rutaSelected === ruta.folio && 'bg-blue-400' }`.trim()}
			
			>
				<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
					{ ruta.folio }
				</th>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
					{ ruta.ruta }
				</td>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
					{ ruta.unidad }
				</td>
				<td>
					<button
						onClick={() =>  HandleSetRuta(ruta.folio)}
						// onClick={() =>  setIsSelected(pRuta => pRuta === ruta.folio ? '' : ruta.folio)}
						className="bg-green-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
					>
						Seleccionar
					</button>
				</td>
			</tr>
		</>
	)
}
