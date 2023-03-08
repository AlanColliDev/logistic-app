import PropTypes from 'prop-types'

const TitleComponent = ({Title}) => {
  return (
	<div className="flex flex-wrap mb-5 mt-5">
		<div className="w-full lg:w-8/12 px-4">
			<h6 className="text-white text-lg uppercase hidden lg:inline-block font-semibold">{Title}</h6>
		</div>
	</div>
  )
}

TitleComponent.propTypes = {
	Title: PropTypes.string.isRequired
}

export default TitleComponent