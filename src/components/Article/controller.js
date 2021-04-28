import { nanoid } from 'nanoid';
import _ from 'lodash';
import Article from '../../schemas/article.js';
import * as controller from '../SubSection/controller.js';
// import * as responseHandler from '../../utils/responseHandler.js';

const create = async ({ name, content }, suid) => {
	const uid = nanoid();

	const data = new Article({ name, content, uid });
	await data.save();
	return controller.addArticle(suid, uid);
};

// populate required fields of subsection
const get = (uid) => {
	return Article.findOne({ uid });
};
const getAll = () => {
	return Article.find();
};

const update = ({ uid, name, content }) => {
	const filtered = _.omitBy({ name, content }, _.isNil);
	return Article.findOneAndUpdate({ uid }, { filtered });
};

const publish = (uid) => {
	return Article.findOneAndUpdate(uid, { published: true });
};

const unpublish = (uid) => {
	return Article.findOneAndUpdate(uid, { published: false });
};

export { create, update, publish, getAll, get, unpublish };
