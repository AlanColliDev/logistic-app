import PropTypes from "prop-types";

export default function CardChofer({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
  isSelected,

  // CUSTOM PROPERTIES
  // chofer
  handleOnClick = () => {}
}) {

  // const [color, setColor] = useState('bg-lightBlue-900');

  // const HandleChangeColor = () => {
  //   setColor('bg-black')
  // };

  // useEffect(() => {
  //   // const some = HandleListenChange();
  // }, [color]);

  return (
    <>
      <div onClick={handleOnClick} className={`relative flex flex-col min-w-0 break-words text-white rounded mb-6 xl:mb-0 shadow-lg hover:scale-105 hover:cursor-pointer ${isSelected ? 'chofer-selected' : 'chofer'}`}>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-100 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-300">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${statIconColor}`}
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardChofer.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardChofer.propTypes = {
  // statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  // statArrow: PropTypes.oneOf(["up", "down"]),
  // statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,

  // custom properties
  handleOnClick: PropTypes.func.isRequired
};
