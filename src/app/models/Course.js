const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
   name: {type: String, required: true, maxLength: 255},
   description: {type: String, maxLength: 600},
   image: {type: String, maxLength: 255},
   videoID: {type: String, required: true},
   level: {type: String, maxLength: 255},
   slug: {type: String, slug: 'name', unique: true},
}, {
   timestamps: true,
});

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
   overrideMethods: 'all',
   deletedAt: true,
});


module.exports = mongoose.model('Course', Course);
