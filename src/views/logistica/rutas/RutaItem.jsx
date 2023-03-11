
export const RutaItem = ({ ruta }) => {

	
	return (
		<>
			<tr>
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
