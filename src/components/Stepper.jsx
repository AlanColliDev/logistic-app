import React, { useState, useContext } from 'react'
import { FormQuickCapture } from './FormQuickCapture';

const Stepper = () => {

	const steps = ["Selecciona un Chofer", "Selecciona una Ruta", "Captura el Combustible", "Evidencia"];
	const [currentStep, setCurrentStep] = useState(1);
	// const {GetForm, HandleSetCurrentForm} = useGetForm(currentStep);

	const HandleNextStep = () => {
		if (currentStep > steps.length) return;
		setCurrentStep(prev => prev + 1);
	};

	const HandlePreviousStep = () => {
		if(currentStep === 1) return;
		setCurrentStep(prev => prev - 1);
	};


	return (
		<>
			<div className='flex justify-between'>
				{
					steps?.map((step, i) => (
						<div 
							key={i} 
							className={`space-y-4 step-item ${currentStep === (i + 1) && 'active'} ${(i + 1) < currentStep && 'complete'}`}
						>
							<div className='step text-lg'>{
								((i + 1) < currentStep) ? <i className='fa fa-check' aria-hidden="true"></i> : (i + 1)}
							</div>
							<p className='text-gray-500 text-md font-semibold'>{step}</p>
						</div>
					))
				}
			</div>
			<button 
				className='btn bg-gray-900 w-1/12 h-10 rounded-xl text-white px-4 py-1 hover:scale-105 duration-300'
				onClick={HandlePreviousStep}
			>
				Regresar
			</button>
			<div className='flex-auto m-2.5 px-4 lg:px-10 pt-0 rounded-2xl'>
				{
					
					<FormQuickCapture currentForm={currentStep} />
				}
			</div>
			<div className='justify-center items-center flex'>
				<button onClick={HandleNextStep} className='btn bg-gray-900 w-2/12 h-10 rounded-xl text-white px-4 py-1 hover:scale-105 duration-300'>
					{currentStep >= steps.length ? 'Guardar' : 'Siguiente'}
				</button>
			</div>
			
		</>
	)
}

export default Stepper;
