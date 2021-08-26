const express = require('express');
const router = express.Router();
const Liften = require('../models/Lift');
const db= 'tes';

// get all lifts
router.get('/', async function (req, res) {
    try{
        const liften = await Liften.find();
        res.json(liften)
    } catch(err){
        res.status(500).json({ message: err}); 
    }
   });
    

 // get specific lift
router.get('/:id', async(req, res) =>{
    try{
        const lift = await Liften.findOne({'id': req.params.id});
        res.json(lift);
    }catch(err){
        res.status(500).json({ message: err}); 
    }
})

router.post('/post', async (req, res) => {
    const liften = new Liften({
        liftid: req.body.liftid,
        liftgebruik: req.body.liftgebruik,
        liftlocatie: req.body.liftlocatie,
        status: req.body.status
    });
    try{
        const savedPost = await liften.save();
        res.json(savedPost);
    }catch(err){
        res.status(500).json({ mesasage: err}); 
    }
 });


module.exports = router;
   