export const ItemChofer = ({nombre, apellidomat, apellidopat}) => {
	return (
		<>
			<tr className='hover:bg-[#00999C] hover:border-b-[#00999C]]-200 hover:shadow-xl cursor-pointer'>
				<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
					<img src={require('../../assets/images/user.webp')} className="h-12 w-12 bg-white rounded-full border" alt="..."></img>{" "}
					<span className={"ml-3 font-bold text-white"}>{nombre}</span>
				</td>
				<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{apellidopat}</td>
				<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{apellidomat}</td>
			</tr>
		</>
	)
}
