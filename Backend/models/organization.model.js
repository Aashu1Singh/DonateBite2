const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrganizationSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    country: {
        type: String,
        required: false
    },
    zipCode: {
        type: Number,
        required: false
    },
    contactNumber: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    registrationNumber: {
        type: String,
        required: false
    },
    registrationDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    presidentName: {
        type: String,
        required: false
    },
    presidentContactNumber: {
        type: String,
        required: false
    },
    presidentEmail: {
        type: String,
        required: false
    },
    secretaryName: {
        type: String,
        required: false
    },
    secretaryContactNumber: {
        type: String,
        required: false
    },
    secretaryEmail: {
        type: String,
        required: false
    },
    registrationCertificate: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
        default: "pending"
    },
    roles: {
        type: String,
        required: false,
        default: "5150"
    }
})

const Organization = mongoose.model("Organization", OrganizationSchema)

module.exports = Organization;