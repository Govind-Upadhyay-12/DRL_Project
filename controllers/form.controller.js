const FormData =require("../models/Form_Schema")
module.exports.createForm = async (req, res) => {
    console.log(req.body)
    try {
        const {
            instruction,
            min_occurence,
            max_occurence,
            start_time,
            end_time,
            signature,
            frame_shell_no,
            remark,
            intervention_type
        } = req.body;
        if (!instruction || !min_occurence || !max_occurence  || !start_time || !end_time || !signature || !frame_shell_no  || !intervention_type) {
            return res.status(400).json({ error: 'All required fields must be provided' });
        }
        const newForm = new FormData({
            instruction,
            min_occurence,
            max_occurence,
            start_time,
            end_time,
            signature,
            frame_shell_no,
            remark,
            intervention_type
        });
        const savedForm = await newForm.save();
        console.log(savedForm);

        return res.status(200).json({
            statusCode: 200,
            message: "form submitted successfully"
          });
    } catch (error) {
        console.error('Error creating form:', error);
        res.status(500).json({ 
            statusCode:500,
            error: 'Internal server error',
            message:error
         });
    }
};


module.exports.GetAllForm = async (req, res) => {
    try {
        const forms = await FormData.find();
         return   res.status(200).json({
            statusCode: 200,
            data:forms,
            message:"OK"
         });
    } catch (error) {
        console.error('Error getting forms:', error);
        res.status(500).json({ 
            statusCode: 500,
            message:error
         });
    }
};


module.exports.GetAllFormById = async (req, res) => {
  try {
    const { id } = req.params; 

    const form = await FormData.findById(id);

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    return res.status(200).json({
        statusCode: 200,
        data:form,
        message:"OK"
    });
  } catch (error) {
    console.error('Error getting form by ID:', error);
    return res.status(500).json({
        statusCode:500,
        message:error
     });
  }
};
