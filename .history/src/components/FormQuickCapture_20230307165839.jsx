import { CombustibleProvider } from '../context/Logistica';
import { GridChofer, FormCombustible, GridRuta, ResumeCombustible } from '../views/logistica'

export const FormQuickCapture = ({ currentForm = 0 }) => {

	//TODO: Would be put this content to dictionary or routes?
	//Tal vez esto lo pueda meter en un hook y a su vez controlar si es valido o no con el contexto
	const FormComponents = {
		1: <GridChofer key={1}/>,
		2: <GridRuta key={2}/>,
		3: <FormCombustible key={3}/>,
		4: <ResumeCombustible key={4}/>,
	};

	return (
		<>
			<div className="flex flex-wrap flex-row justify-center items-center">
				<div className="w-full">
					<hr className="border-b-1 border-blueGray-300 W-96" />
				</div>
				<div className="w-full pt-2.5">
					<CombustibleProvider>
						{FormComponents[currentForm]}
					</CombustibleProvider>
				</div>
			</div>
		</>
	)
}
