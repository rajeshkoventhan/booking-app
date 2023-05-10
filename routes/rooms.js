const express = require ("express")
const router = express.Router("");
const {createroom,getroom,getrooms,updateroom} = require ("../controller/Room")


router.post("/:hotalid", createroom )

router.post("/", getroom )
router.post("/", getrooms )
router.post("/id", updateroom )

module.exports = router