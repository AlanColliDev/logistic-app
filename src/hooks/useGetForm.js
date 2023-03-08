import { useState } from 'react'

export const useGetForm = (currentForm = 1) => {

	const [showForm, setShowForm] = useState(currentForm);

	const FormComponents = {
		1: <><div><h6>Aqui iria un formulario para la seleccion del chofer</h6></div></>,
		2: <><div><h6>Aqui iria un formulario para la seleccion de la ruta</h6></div></>,
		3: <><div><h6>Aqui iria un formulario para la captura del combustible</h6></div></>,
	};

	const HandleSetCurrentForm = (form) => {
		if(showForm > Object.entries(FormComponents).length) return;
		console.log('form param...', form)
		setShowForm(prev => prev++);
	};

	const GetForm = () => FormComponents[showForm];

	return {
		HandleSetCurrentForm,
		GetForm
	}
};