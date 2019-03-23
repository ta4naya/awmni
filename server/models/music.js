const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 // Initialize the Schema
 const musicSchema = new Schema({
     title : {type: String, required: true, max:[128, 'Too Long Max is 128']},
     description:{type: String, required:true},
     audioUrl:{type: String,required:true},
     speaker:{type:String,required:true},


 });

 module.exports = mongoose.model('Music',musicSchema);

