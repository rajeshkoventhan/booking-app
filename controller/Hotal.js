const hotal = require("../models/hotal")
const hotals = require ("../models/hotal")

 const createhotal = async (req,res) => {
    const  posthotal = new hotals (req.body)

try{
    const savehotal = await posthotal.save()
    res.json(savehotal)
}
catch(err){
    res.json(err)
}
}

const gethotals = async (req,res) => {

    try{
        const movieget = await hotals.find()
        res.json(movieget)
        }
        catch(err){
            res.json (err)
        }
}

const gethotal = async (req,res) => {

    try{
        const movieget = await hotals.findById(req.params.id)
        res.json(movieget)
        }
        catch(err){
            res.json (err)
        }
    }

    const updatehotal = async (req,res) => {

        try{
            const uphotal= await hotals.findByIdAndUpdate(req.params.id,{ $set:req.body },{new:true})
            res.json(uphotal)
            }
            catch(err){
                res.json (err)
            }
        }

    const deletehotal = async(req,res)=>{
            try{
            const hotaldelte = await hotals.findByIdAndDelete(req.params.id)
            res.json(hotaldelte)
            }
            catch(err){
                res.json (err)
            }
        }

        
const countbycity = async (req,res) => {

    const cities = req.query.cities.split(",")

    try{
        const movieget = await Promise.all(cities.map(city=>{
            return hotal.countDocuments({city:city})
        }))
        res.json(movieget)
        }
        catch(err){
            res.json (err)
        }
    }

module.exports = {createhotal,gethotal,gethotals,updatehotal,deletehotal,countbycity}