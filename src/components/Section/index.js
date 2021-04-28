import express from 'express';
// import getStarted from './controller.js';
import * as controller from './controller.js';
import validator from '../../middleware/requestValidator.js';
import schema from './validator.js';
import * as responseHandler from '../../utils/responseHandler.js';

const router = express.Router();

// template route

router.post('/', validator(schema.create), (req, res) => {
	controller
		.create(req.body)
		.then((uid) => responseHandler.create(res, uid, 'section'))
		.catch((err) => responseHandler.err400(res, err));
});

router.get('/', (req, res) => {
	controller
		.getAll()
		.then((data) => responseHandler.get(res, data, 'sections'))
		.catch((err) => responseHandler.err400(res, err));
});

router.get('/:uid', validator(schema.uid), (req, res) => {
	const {uid} = req.params;
	controller
		.get(uid)
		.then((data) => responseHandler.get(res, data, 'sections'))
		.catch((err) => responseHandler.err400(res, err));
});

router.patch('/:uid', validator(schema.patch), (req, res) => {
	const {uid} = req.params;
	const { name, description } = req.body;
	controller
		.update({ uid, name, description })
		.then(() => responseHandler.update(res, 'sections'))
		.catch((err) => responseHandler.err400(res, err));
});

router.patch('/:uid/publish', validator(schema.uid), (req, res) => {
	const {uid} = req.params;

	controller
		.publish(uid)
		.then(() => responseHandler.publish(res, 'section'))
		.catch((err) => responseHandler.err400(res, err));
});

router.patch('/:uid/unpublish', validator(schema.uid), (req, res) => {
	const {uid} = req.params;

	controller
		.unpublish(uid)
		.then(() => responseHandler.unpublish(res, 'section'))
		.catch((err) => responseHandler.err400(res, err));
});

export default router;
