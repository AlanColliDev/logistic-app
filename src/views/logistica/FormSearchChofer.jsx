import { useForm } from "../../hooks/";

export const FormSearchChofer = ({ onSaveForm }) => {

	const { HandleInputChange, formState } = useForm({ stringChofer: '' });

	return (
		<>
			<div className="inputData flex justify-center">
				<form onSubmit={(event) => onSaveForm(event, formState)}>
					{/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
						Información del Chofer
					</h6> */}
					<div className='flex flex-wrap mt-5 mb-6 w-full'>
						<div className="w-96 lg:w-fill px-4">
							<div className="relative w-full mb-3">
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Escriba el nombre o la clave del Chofer
								</label>
								<label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
									</div>
									<div className="border-b border-t-0 border-l-0 border-r-0 border-blueGray-400">
										<input type="search" id="search" className="block w-full p-4 pl-10 border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150 " onChange={HandleInputChange} placeholder="Buscar" name="stringChofer" required />
									</div>
									<button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
