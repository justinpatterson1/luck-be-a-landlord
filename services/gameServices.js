const gameModel = require("../Model/gameModel.js");


exports.getAllItems = (req,res)=>
{
    gameModel.find()
    .then((items)=>{
        res.json({
            message:"All Items have been returned",
            data:items,
            length:items.length
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:`Oops something happened: ${err}`
        })
    })
}

exports.getAnItem = (req,res)=>
{
    gameModel.findById({_id:req.params.id})
    .then((item)=>{
        res.json({
            message:`Item ${req.params.id} has been successfully returned`,
            data:items
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:`Oops something happened: ${err}`
        })
    })
}

exports.AddAnItem = (req,res) =>
{
    const item = new gameModel(req.body)
    item.save()

    .then((item)=>{
        res.json({
            message:"Item has been successfully created",
            data:item
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:`Oops something happened: ${err}`
        })
    })
}

exports.deleteAnItem = (req,res) =>
{
    gameModel.findByIdAndDelete({_id:req.params.id})
    .then((item)=>{
        res.json({
            message:`Item ${req.params.id} has been deleted`
            
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:`Oops something happened: ${err}`
        })
    })
}

exports.updateAnItem = (req,res)=>
{
    gameModel.findByIdAndUpdate({_id:req.params.id},{new:true})
    .then((item)=>{
        res.json({
            message:`Item ${req.params.id} has been deleted`,
            data:item
        })
    })
    .catch(err=>{
        res.status(404).json({
            message:`Oops something happened: ${err}`
        })
    })
}