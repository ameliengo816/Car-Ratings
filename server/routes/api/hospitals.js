const express = require('express');
const router  = express.Router();

//const Item = require('../../models/Item');
const Hospital = require('../../models/Hospital');

//router.get('/',(req, res) => {res.send('testing get / item route')});
router.get('/', (req, res) => {
    Hospital.find()
        .then((hospitals) => res.json(hospitals))
        .catch((err) => res.status(404).json({ noitemfound: 'No Hospitals found'}));
});
//router.get('/:id',(req, res) => {res.send('testing get / :id route')});
router.get('/:id', (req, res) => {
    Hospital.findById(req.params.id)
        .then((hospital) => res.json(hospital))
        .catch((err) => res.status(404).json({noitemfound : 'No Hospital found'}));
});

router.post('/',(req, res) => {
    Hospital.create(req.body)
        .then((hospital) => res.json({msg: 'Hospital added successfuly'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this hospital' }));
});
//router.put('/',(req, res) => {res.send('testing put /:id route')});
router.put('/:id', (req, res) => {
    Hospital.findByIdAndUpdate(req.params.id, req.body)
        .then((hospital) => res.json({ msg: 'Updated successfully'}))
        .catch((err) => 
            res.status(400).json({error: 'Unable to update database'})
        );
});
//router.delete('/',(req, res) => {res.send('testing delete /:id route')});
router.delete('/:id', (req, res) => {
    Hospital.findByIdAndDelete(req.params.id)
        .then((hospital) => res.json({ msg: 'Hospital entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'No such item'}));
});


module.exports = router; 