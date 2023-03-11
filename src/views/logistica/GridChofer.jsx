import { useContext, useEffect, useState } from 'react';
import CardChofer from "../../components/CardChofer";
import { CombustibleContext } from '../../context/Logistica';
import { useStepper } from '../../hooks';
// import TableUI from "../../components/TableUI";
import { useChofer } from "../../hooks/useChofer";
import { FormSearchChofer } from "./";

export const GridChofer = () => {


	const { isLoading, choferes, choferSelected, onSearchChofer, onSelectChofer } = useChofer({ stringSearch: '' });

	// const { isValid, HandleSetValidStep } = useStepper(isValidChofer); //tengo la idea de mandar el isvalid a un hook

	return (
		<>
			<FormSearchChofer onSaveForm={onSearchChofer} />
			<div className="gridResult w-full rounded-lg px-3 py-2">
				{
					isLoading && <h6>Loading.......</h6>
				}
				<div className="w-full px-4 grid grid-cols-3 gap-5 justify-center">
					{
						choferes?.length > 0 ? choferes.map(chofer => (
							<CardChofer
								key={`${chofer.clave}`}
								statSubtitle={chofer.clave}
								statTitle={`${chofer.nombre} ${chofer.apellidopaterno} ${chofer.apellidomaterno}`}
								statArrow="up"
								statPercent={chofer.sueldo}
								statPercentColor="text-emerald-500"
								statDescripiron="Since last month"
								statIconName="fa fa-user"
								statIconColor="bg-red-500"
								handleOnClick={() => onSelectChofer({ ...chofer })}
								isSelected={chofer.clave === choferSelected?.clave}
							/>
						)) : <h1>Sin datos para mostrar</h1>
					}
				</div>
			</div>
		</>
	)
}
