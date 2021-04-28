const err400 = (res, err) => {
	if (err.code === 11000) {
		return res.status(409).json({
			status: false,
			message: 'No duplicate values',
			err: err.message,
		});
	}
	return res.status(400).json({
		status: false,
		message: 'Something went wrong',
		err: err.message,
	});
};

const create = (res, id, msg) => {
	return res.status(201).json({
		status: true,
		message: `Successfully created ${msg}`,
		data: {
			uid: id,
		},
	});
};

const update = (res, msg) => {
	return res.status(200).json({
		status: true,
		message: `Successfully updated ${msg}`,
	});
};

const publish = (res, msg) => {
	return res.status(200).json({
		status: true,
		message: `Successfully publishd ${msg}`,
	});
};

const unpublish = (res, msg) => {
	return res.status(200).json({
		status: true,
		message: `Successfully unpublishd ${msg}`,
	});
};

const get = (res, data, msg) => {
	return res.status(200).json({
		status: true,
		message: `Successfully fetched ${msg}`,
		data,
	});
};

const nodata = (res, msg) => {
	return res.status(204).json({
		status: true,
		message: `No ${msg} Found`,
	});
};

const normal = (res, msg, data) => {
	return res.status(200).json({
		status: true,
		message: msg,
		data,
	});
};

const patch = (res, data, msg) => {
	return res.status(200).json({
		status: true,
		message: `Successfully updated ${msg}`,
		data,
	});
};

export {
	err400,
	update,
	create,
	publish,
	unpublish,
	get,
	nodata,
	normal,
	patch,
};
