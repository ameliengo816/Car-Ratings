const express = require('express');
const router  = express.Router();

const Item = require('../../models/Item');

//router.get('/',(req, res) => {res.send('testing get / item route')});
router.get('/', (req, res) => {
    Item.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ noitemfound: 'No Items found'}));
});
//router.get('/:id',(req, res) => {res.send('testing get / :id route')});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({noitemfound : 'No Item found'}));
});

router.post('/',(req, res) => {
    Item.create(req.body)
        .then((item) => res.json({msg: 'Item added successfuly'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this item' }));
});
//router.put('/',(req, res) => {res.send('testing put /:id route')});
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({ msg: 'Updated successfully'}))
        .catch((err) => 
            res.status(400).json({error: 'Unable to update database'})
        );
});
//router.delete('/',(req, res) => {res.send('testing delete /:id route')});
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'Item entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'No such item'}));
});


module.exports = router; 