import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'dotenv/config.js';
import connect from './src/components/db/setup.js';
import section from './src/components/Section/index.js';
import subsection from './src/components/SubSection/index.js';
import article from './src/components/Article/index.js';
import swaggerRouter from './src/docs/index.js';

// connect to db
connect();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/sections', section);
app.use('/subsections', subsection);
app.use('/articles', article);
app.use('/swagger', swaggerRouter);

// error handler
// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	if (!process.env.NODE_ENV) {
		// console.log(err);
	}
	res.status(err.status || 500).send({
		error: true,
		message: err.message,
		error_detail: {
			message: err.message,
			code: err.status,
		},
	});
	next();
});

// app.listen(port, () =>{
// 	console.log("xzy");
// })
export default app;
