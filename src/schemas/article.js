import mongoose from 'mongoose';

const { Schema } = mongoose;

const Article = new Schema(
	{
		name: { type: String, required: true, unique: true },
		content: { type: String, required: false },
		uid: { type: String, required: true },
		published: { type: Boolean, required: true, default: false },
		// lastEdited: { type: Object, required: true },
	},
	{ timestamp: true },
);

export default mongoose.model('Article', Article);
