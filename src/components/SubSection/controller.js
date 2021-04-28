import { nanoid } from 'nanoid';
import _ from 'lodash';
import SubSection from '../../schemas/subsections.js';
import * as controller from '../Section/controller.js';
// import * as responseHandler from '../../utils/responseHandler.js';

const create = async ({ name, description }, suid) => {
	const uid = nanoid();
	controller.addSubSection(suid, uid);
	const data = new SubSection({ name, description, uid });
	await data.save();
	return uid;
};

// populate required fields of subsection
const get = (uid) => {
	return SubSection.findOne({ uid }).populate('articles', 'name description');
};
const getAll = () => {
	return SubSection.find();
};

const update = ({ uid, name, description }) => {
	const filtered = _.omitBy({ name, description }, _.isNil);
	return SubSection.findOneAndUpdate({ uid }, { filtered });
};

const publish = (uid) => {
	return SubSection.findOneAndUpdate(uid, { published: true });
};

const unpublish = (uid) => {
	return SubSection.findOneAndUpdate(uid, { published: false });
};

const addArticle = (uid, auid) => {
	return SubSection.findOneAndUpdate({ uid }, { $push: { articles: auid } });
};

export { create, update, publish, getAll, get, unpublish, addArticle };
