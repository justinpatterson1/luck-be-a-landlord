const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
 
    name:
    {
        type:String,
        required:true
    },
    rarity:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
    },
    goldPerTurn:
    {
        type:Number
    },
    dateCreate:
    {
        type:Date,
        default:Date.now()
    }


});
const gameModel = mongoose.model('gameInfo',itemSchema)
module.exports = gameModel;