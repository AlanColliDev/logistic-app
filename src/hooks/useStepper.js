import { useState } from 'react';

export const useStepper = (flagValue) => {

	const [isValid, setIsValid] = useState(false)


	const HandleSetValidStep = () => {
		setIsValid(value => !value);
	};

	return {
		isValid,
		HandleSetValidStep
	}
}
