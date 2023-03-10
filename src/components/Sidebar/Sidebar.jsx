import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemMenu } from './ItemMenu';
import MenuHead  from './MenuHead';

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = useState('hidden');

	return (
		<>
		{/* bg-[#1A293B] */}
			<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6  rounded-2xl ml-6 mt-4 mr-6">
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					{/* Toggler */}
					<button
						className="cursor-pointer text-white opacity-500 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
					>
						<i className="fas fa-bars"></i>
					</button>
					{/* Brand */}
					<Link
						className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
						to="/"
					>
						AQUI DYPAQ LOGO
					</Link>
					{/* User */}
					<ul className="md:hidden items-center flex flex-wrap list-none">
						<li className="inline-block relative">
							{/* <NotificationDropdown /> */}
						</li>
						<li className="inline-block relative">
							{/* <UserDropdown /> */}
						</li>
					</ul>
					{/* Collapse */}
					<div className={`px-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}>
						{/* Collapse header */}
						<div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
							<div className="flex flex-wrap">
								<div className="w-6/12">
									<Link
										className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
										to="/"
									>
										DYPAQ
									</Link>
								</div>
								<div className="w-6/12 flex justify-end">
									<button
										type="button"
										className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
										onClick={() => setCollapseShow("hidden")}
									>
										<i className="fas fa-times"></i>
									</button>
								</div>
							</div>
						</div>
						{/* Form */}
						<form className="mt-6 mb-4 md:hidden">
							<div className="mb-3 pt-0">
								<input
									type="text"
									placeholder="Search"
									className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
								/>
							</div>
						</form>

						<MenuHead ItemText='Operaci??n Log??stica' />
						{/* Navigation */}
						<ul className="md:flex-col md:min-w-full flex flex-col list-none">
							<ItemMenu 
								parentPath= 'combustible'
								icon= 'fa-truck-fast'
								textInfo= 'Captura Combustible'
							/>

							<ItemMenu 
								parentPath='settings'
								icon='fa-tools'
								textInfo='Second Component'
							/>

							<ItemMenu 
								parentPath='/admin/tables'
								icon='fa-table'
								textInfo='Third Component'
							/>

							<ItemMenu 
								parentPath='/admin/maps'
								icon='fa-map-marked'
								textInfo='Four Component'
							/>
						</ul>

						<MenuHead ItemText='Auth Layout Pages' />
						{/* Navigation */}
						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<ItemMenu parentPath='/auth/login' icon='fa-fingerprint' textInfo='Login' />
							<ItemMenu parentPath='/auth/register' icon='fa-clipboard-list' textInfo='Cerrar Sesi??n' />
						</ul>
					</div>
				</div>
			</nav>
		</>
	);

};