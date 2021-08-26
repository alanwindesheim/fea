const express = require('express');
const router = express.Router();
const LiftenHistory = require('../models/LiftHistory');

// get all lifts
router.get('/', async function (req, res) {
    try{
        const liften = await LiftenHistory.find();
        res.json(liften)
    } catch(err){
        res.status(500).json({ message: err}); 
    }
   });

router.get('/:liftid', async(req, res) =>{
    try{
        const result = await LiftenHistory.find({'liftid': req.params.liftid}).sort({date: 1});
        res.json(result);
    }catch(err){
        res.status(500).json({ message: err}); 
    }
})

router.get('/pastweek/:id', async(req, res) =>{
    try{
        const result = await LiftenHistory.find({'liftid': req.params.id, "date": {$gte: new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 2000)))}}).sort({ "date": -1 });
        res.json(result);
    }catch(err){
        res.status(500).json({ message: err}); 
    }
})

module.exports = router;
   