const FormData =require("../models/Form_Schema")


module.exports.createForm = async (req, res) => {
    try {
       console.log(req.body)
        const {
            identifier,
            instruction,
            min_occurences,
            max_occurences,
            performed_occurences,
            start_time,
            end_time,
            signature,
            frame_shell_no,
            remark,
            intervention_type,
            glove_id,
            performed_by
        } = req.body;
        if (!instruction || !min_occurences || !max_occurences|| !start_time || !end_time || !signature || !frame_shell_no  || !intervention_type || ! performed_occurences|| ! glove_id || !performed_by || !identifier) {
            return res.status(400).json({ error: 'All required fields must be provided' }); 
        }

        const newForm = new FormData({
            identifier,
            instruction,
            min_occurences,
            max_occurences,
            performed_occurences,
            start_time,
            end_time,
            signature,
            frame_shell_no,
            remark,
            intervention_type,
            glove_id,
            performed_by
        });

        const savedForm = await newForm.save();

        res.status(201).json({
            statusCode: 201,
            message: 'Form created successfully',
            data: savedForm
        });
    } catch (error) {
        console.error('Error creating form:', error);
       return res.status(500).json({
            statusCode: 500,
            message: 'Internal server error'
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
