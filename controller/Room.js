const rooms = require ("../models/room.js")
const hotals = require ("../models/hotal.js")

 const createroom = async (req,res,next) => {

    const hotalId = req.params.hotalid
    const  postroom = new rooms (req.body)

try{
    const savehotal = await postroom.save()

    try{
        await hotals.findByIdAndUpdate(hotalId,{
            $push: {room: savehotal._id},
        })
    }
    catch(err){
        next(err)
    }
    res.json(savehotal)
}
catch(err){
    next(err)
}
}


const getrooms = async (req,res) => {

    try{
        const roomsget = await rooms.find()
        res.json(roomsget)
        }
        catch(err){
            res.json (err)
        }
}

const getroom = async (req,res) => {

    try{
        const getroom = await hotals.findById(req.params.id)
        res.json(getroom)
        }
        catch(err){
            res.json (err)
        }
    }

    const updateroom = async (req,res) => {

        try{
            const uproom= await hotals.findByIdAndUpdate(req.params.id,{ $set:req.body },{new:true})
            res.json(uproom)
            }
            catch(err){
                res.json (err)
            }
        }

module.exports = {createroom,getrooms,getroom,updateroom}