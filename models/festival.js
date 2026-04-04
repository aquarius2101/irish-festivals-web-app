/*
*    Title: Challenge Solution
*    Author: Rosales, Charlyn
*    Date: 2025
*    Availability: https://moodle2025.ncirl.ie/mod/resource/view.php?id=33950
*
*/

const { toInteger } = require("lodash");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const festivalSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
        /*
        *    Title: Mongoose Validation
        *    Author: Mongoose
        *    Date: 2025
        *    Code version: 9.0.1
        *    Availability: https://mongoosejs.com/docs/validation.html
        *
        */
        validate: {
            validator: function(endDate) {
                return this.startDate <= endDate;
            },
            message: "End date must be on or after start date."
        }
    },
    county: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Festival = mongoose.model("festival", festivalSchema);

module.exports = Festival;