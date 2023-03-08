import React from 'react'
import { NavLink } from 'react-router-dom';

export const ItemMenu = ({ parentPath = '/', icon = 'fa-tv', textInfo = 'Default Item' }) => {
  return (
	<>
		{/* "/admin/dashboard" */}
		<li className="items-center">
			<NavLink
				className={(({ isActive }) =>(isActive) ? 'text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600' : 'text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500')}
				to={ parentPath }
			>
				<i className={`fas ${icon} mr-2 text-sm ${(window.location.href.indexOf(parentPath) !== -1) ? 'opacity-75' : 'text-whiteGray-300'}`}></i>{' '}
				{textInfo}
			</NavLink>
		</li>
	</>
  )
}