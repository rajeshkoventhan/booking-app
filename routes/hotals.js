const express = require ("express")
const router = express.Router("");
const {createhotal,gethotal,gethotals,updatehotal,deletehotal,countbycity} = require ("../controller/Hotal")


router.post("/", createhotal )


router.get("/find/:id", gethotal)


router.get("/", gethotals)

router.put("/:id", updatehotal)

router.delete("/:id", deletehotal)

router.get("/countbycity",countbycity)

module.exports = router