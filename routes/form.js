const router = require("express").Router();
const {GetAllForm,GetAllFormById,createForm}=require("../controllers/form.controller")

router.get("/v1/check", (req, res) => {
    res.send("hey DRL");
 });


router.post('/create_form',createForm)
router.get('/get_form',GetAllForm);
router.get('/get_particular/:id',GetAllFormById)

module.exports=router;                               