const rutas = [
	{
		"folio": "0000657376",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	},
	{
		"folio": "0000657404",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 393,
		"costochofer": 0
	},
	{
		"folio": "0000657432",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 393,
		"costochofer": 0
	},
	{
		"folio": "0000656731",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	},
	{
		"folio": "0000656776",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 506,
		"costochofer": 0
	},
	{
		"folio": "0000656804",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 449,
		"costochofer": 0
	},
	{
		"folio": "0000656884",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 393,
		"costochofer": 0
	},
	{
		"folio": "0000656957",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	},
	{
		"folio": "0000656973",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 417,
		"costochofer": 0
	},
	{
		"folio": "0000657002",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	},
	{
		"folio": "0000657040",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 393,
		"costochofer": 0
	},
	{
		"folio": "0000657107",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	},
	{
		"folio": "0000657117",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 393,
		"costochofer": 0
	},
	{
		"folio": "0000657154",
		"ruta": "TRTCAM01",
		"chofer": 10407,
		"unidad": 453,
		"costochofer": 0
	},
	{
		"folio": "0000657177",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	},
	{
		"folio": "0000657302",
		"ruta": "R14COATZA-LOCAL2",
		"chofer": 10025,
		"unidad": 451,
		"costochofer": 0
	}
];


export const GetRutasByChofer = (claveChofer) => {
	return rutas.filter(ruta => ruta.chofer === claveChofer)
};