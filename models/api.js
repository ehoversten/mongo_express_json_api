let mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 64 }
}, {timestamps: true})

mongoose.model('Person', PersonSchema);
