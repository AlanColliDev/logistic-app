import PropTypes from 'prop-types'
import { ItemChofer } from '../views/logistica/ItemChofer';

const TableUI = ( { TitleTable, DataList } ) => {

	const [Header] = DataList;

	Object.values(DataList).map(({nombre, apellitopat, apellitomat}) => console.log({nombre, apellitopat, apellitomat}))

	return (
		<>
			<div className="w-full mb-12 px-4">
				<div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-white"}>
					<div className="rounded-t mb-0 px-4 py-3 border-0">
						<div className="flex flex-wrap items-center">
							<div className="relative w-full px-4 max-w-full flex-grow flex-1">
								<h3 className={"font-semibold text-lg text-white"}>
									{TitleTable}
								</h3>
							</div>
						</div>
					</div>
					<div className="block w-full overflow-x-auto">
						<table className="items-center w-full bg-transparent border-collapse">
							{/* maybe here would be a component called TableHead with props */}
							<thead>
								<tr>
									{
										Object.keys(Header).map((value, index) => 
											<th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
												{value}										
											</th>
										)
									}
								</tr>
							</thead>
							<tbody>
								{/*Data Mapping */
									Object.values(DataList).map((props) => (
										<ItemChofer {...props} />
									))
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

TableUI.propTypes = {
	TitleTable: PropTypes.string.isRequired,
	DataList: PropTypes.array.isRequired
}

export default TableUI