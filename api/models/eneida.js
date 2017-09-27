var Eneida = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    price: { type: Number},
    modified: { type: Date, default: Date.now }
});