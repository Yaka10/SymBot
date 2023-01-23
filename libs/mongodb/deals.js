const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DealSchema = new Schema({
	dealId: String,
	exchange: String,
	pair: String,
	market: String,
	date: Date,
	status: Number,
	config: Object,
	orders: Object,
	isStart: Number
}, {
	collection: 'deals',
	timestamps: true
});

module.exports = mongoose.model('Deals', DealSchema);
