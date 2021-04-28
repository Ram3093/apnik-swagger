const removeCORS = (req, res, next) => {
	const allowedOrigins =
		process.env.APP_ENV === 'production'
			? ['http://localhost:3000']
			: ['http://localhost:3000'];
	// console.log('i am in prod cors');

	const { origin } = req.headers;
	// console.log('origin', origin);
	if (allowedOrigins.indexOf(origin) > -1) {
		res.header('Access-Control-Allow-Origin', origin);
		req.header('Access-Control-Allow-Credentials', true);
	}
	res.header('Connection', 'keep-alive');
	res.header('Keep-Alive', 'timeout=200');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	);
	res.header('Access-Control-Allow-Credentials', true);
	// res.writeHead(200, {
	// 	'Access-Control-Allow-Credentials': true,
	// });
	// res.header('content-type', 'application/json');
	if (req.method === 'OPTIONS') {
		const headers = {
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH, PUT',
			'Access-Control-Allow-Credentials': true,
		};
		res.writeHead(200, headers);
		res.end();
	} else {
		next();
	}
};

/* eslint-disable-next-line */
export { removeCORS };
