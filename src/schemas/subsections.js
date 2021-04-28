import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubSection = new Schema(
	{
		name: { type: String, required: true, unique: true },
		description: { type: String, required: false },
		uid: { type: String, required: true },
		published: { type: Boolean, required: true, default: false },
		// lastEdited: { type: Object, required: true },
		articles: [{ type: String, ref: 'articles' }],
	},
	{ timestamp: true },
);

export default mongoose.model('SubSection', SubSection);
