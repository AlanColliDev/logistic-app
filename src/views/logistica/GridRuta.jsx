import { RutaItem } from './rutas/RutaItem';
import { GetRutasByChofer } from '../../services/GetRutasByChofer';
import { useRutas } from '../../hooks/useRutas';

const BodyPage = ({ isLoading, rutas, HandleSetRuta, claveRuta }) => {
	if (isLoading) return <div>Sin datos para mostrar</div>;

	return <>
		<table className="items-center w-full bg-transparent border-collapse">
			<thead>
				<tr>
					<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
						Folio Ruta
					</th>
					<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
						Ruta
					</th>
					<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
						Unidad
					</th>
					<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
						Acción
					</th>
				</tr>
			</thead>
			<tbody>
				{
					rutas.map(ruta => (
						<RutaItem key={ruta.folio}
							ruta={ruta}
							HandleSetRuta= {HandleSetRuta}
							rutaSelected= {claveRuta}
						/>
					))
				}
			</tbody>
		</table>
	</>
}

export const GridRuta = () => {

	const { TitleTable, rutas, isLoading, claveRuta, HandleSetRuta } = useRutas();

	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-2 max-w-full flex-grow flex-1">
							<h3 className="font-semibold text-base text-blueGray-700">
								{TitleTable}
							</h3>
						</div>
						<div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
							<button
								className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
							>
								Ver todos
							</button>
						</div>
					</div>
				</div>
				<div className="block w-full overflow-x-auto">
					<BodyPage
						isLoading={isLoading}
						rutas = {rutas}
						HandleSetRuta = {HandleSetRuta}
						claveRuta= {claveRuta}
					/>
				</div>
			</div>

		</>
	)
}
