import React from 'react'

export const Navbar = () => {
	return (
		<>
			<header>
				{/* <nav className="bg-lightBlue-600 border-gray-200 px-4 lg:px-12 py-2.5"> */}
				<nav className="bg-transparent px-4 py-4 lg:px-12">
					<div className="flex md:flex md:flex-grow flex-row justify-end items-center">
						<div className="flex items-center lg:order-2">
							<button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 mr-1 text-white rounded-lg hover:text-lightBlue-500 hover:bg-white focus:ring-4 focus:ring-gray-300">
								<span className="sr-only">View notifications</span>
								<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
							</button>
							<div className="flex items-center">
								<a href="./pages/authentication/signin/illustration.html" className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
									<i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
									<span className="hidden sm:inline">Sign In</span>
								</a>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}
