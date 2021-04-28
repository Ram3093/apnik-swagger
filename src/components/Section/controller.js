import { nanoid } from 'nanoid';
import _ from 'lodash';
import Section from '../../schemas/Section.js';

const create = async ({ name, description }) => {
	const uid = nanoid();
	const data = new Section({ name, description, uid });
	await data.save();
	return uid;
};

// populate required fields of subsection
const get = (uid) => {
	return Section.findOne({ uid }).populate('subSection', 'name description');
};
const getAll = () => {
	return Section.find();
};

const update = ({ uid, name, description }) => {
	const filtered = _.omitBy({ name, description }, _.isNil);
	return Section.findOneAndUpdate({ uid }, { filtered });
};

const publish = (uid) => {
	return Section.findOneAndUpdate(uid, { published: true });
};

const unpublish = (uid) => {
	return Section.findOneAndUpdate(uid, { published: false });
};

const addSubSection = (uid, suid) => {
	return Section.findOneAndUpdate(uid, { $push: { subSections: suid } });
};

export { create, update, publish, getAll, get, unpublish, addSubSection };
