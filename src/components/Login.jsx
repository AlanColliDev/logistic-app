
// import {useEffect} from 'react';
import banner from '../assets/images/banner.webp'
import { useForm } from '../hooks/useForm';
import { useUserLogged } from '../hooks/UserHooks/useUserLogged';
import { auth } from '../services/auth';


export const Login = () => {

	const { HandleInputChange, formState } = useForm({
		username: '',
		password: '',
	});
	const { HandleSetUser } = useUserLogged();

	const HandleSendForm = (event) => {
		event.preventDefault();
		const authUser = auth(formState);
		HandleSetUser({ userCredentials: authUser });
	};

	return (
		<>
			<section className="bg-[#1A293B] min-h-screen flex items-center justify-center">
				<div className="bg-[#D1F5FF] flex rounded-2xl shadow-2xl max-w-3xl p-5">
					{/* form */}
					<div className="md:w-1/2 px-16">
						<h2 className='font-bold text-2xl text-[#1A293B] text-center'>Inicio de Sesión</h2>
						<div className="mt-2 text-blueGray-400 text-center mb-3 font-bold">
							<small>Sistema de Captura rápida de DYPAQ</small>
						</div>
						<div className='flex flex-col gap-4'>
							<form onSubmit={ (event) => HandleSendForm(event) }>
								<div className="relative w-full mb-3">
									<label className="mt-4 block uppercase text-blueGray-600 text-xs font-bold" htmlFor="grid-password">
										Nombre de Usuario
									</label>
									<input onChange={ HandleInputChange } className='mt-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="text" name="username" placeholder='Username' />
								</div>

								<div className="relative w-full mb-3">
									<label className="block uppercase text-blueGray-600 text-xs font-bold" htmlFor="grid-password">
										Contraseña
									</label>
									<input onChange={ HandleInputChange } className='mt-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' type="password" name="password" placeholder='Password' />
								</div>
								<button type='submit' className='bg-[#1A293B] w-full rounded-xl text-white py-2 hover:scale-105 duration-300'>Acceder</button>
							</form>
						</div>
					</div>
					{/* Image */}
					<div className="md:block hidden w-1/2 h-auto">
						<img className="rounded-2xl" src={banner} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
