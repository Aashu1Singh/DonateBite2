const express = require("express");

const{handleOrganizationLogin,}=require('../controllers/organization/auth/authController');
const{createOrganizationUser,}=require('../controllers/organization/auth/registerController')
// organisation 
const router=express.Router();

router.post("/organization/login",handleOrganizationLogin)
router.post("/organization/register",createOrganizationUser)

module.exports = router;
