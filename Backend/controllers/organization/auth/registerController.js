const bcrypt = require('bcrypt');
const saltRounds = 10; // For hashing passwords

const Organization=require('../models/organization.model')

// Register new organization
const createOrganizationUser = async (req, res) => {
    const formData = req.body; // get data from the request body
    console.log(formData);

    Organization.findOne({ name: formData.name })
        .then(organization => {
            if (organization) {
                res.status(400).json({
                    message: "Organization already exists"
                })
            } else {
                const hashedPassword = bcrypt.hashSync(formData.password, saltRounds); // hash the password
                formData.password = hashedPassword; // set the hashed password to the formData object

                const newOrganization = new Organization(formData); // create a new organization
                newOrganization.save() // save the new organization to the database
                    .then(organization => {
                        res.status(201).json({
                            message: "organization created successfully",
                            organization:organization
                        })
                    }).catch(err => {
                        res.status(500).json({
                            message: "Error creating organization",
                            error: err
                        })
                    })
            }
        }).catch(err => {
            res.status(500).json({
                message: "Error creating organization ",
                error: err
            })
        })
    }

    module.exports={
        createOrganizationUser
}