const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    instruction: {
        type: String,
        required: true 
    },
    min_occurence: {
        type: Number,
        required: true 
    },
    max_occurence: {
        type: Number,
        required: true 
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
    }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
