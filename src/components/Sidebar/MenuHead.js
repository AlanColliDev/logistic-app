
export default function MenuHead({ ItemText = '' }) {
	return (
	<>
		{/* Divider */}
		<hr className="my-2 md:min-w-full" />
		{/* Heading */}
		<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
			{ItemText}
		</h6>
	</>
	)
};
