const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    identifier:{
        type:String,
        required:true

    },
    instruction: {
        type: String,
        required: true 
    },
    min_occurences: {
        type: Number,
        required: true 
    },
    max_occurences: {
        type: Number,
        required: true 
    },
    performed_occurences:{
       type:Number,
       requied:true
    },
    start_time: {
        type: String,
        required: true 
    },
    end_time: {
        type: String,
        required: true 
    },
    signature: {
        type: String,
        required: true 
    },
    frame_shell_no: {
        type: String,
        required: true 
    },
    remark: {
        type: String,
        default: '' 
    },
    intervention_type: {
        type: String,
        required: true 
    },
    glove_id:{
        type:String,
        required:true
    },
    performed_by:{
        type:String,
        required:true
    }
    
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
