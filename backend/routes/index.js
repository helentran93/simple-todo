var express = require('express');
var router = express.Router();
const actions = require('./actions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all the items. */
router.get('/items', (req, res) => {
  const response = actions.getItems();
  res.status(200).json(response);
})

/* GET item by id. */
router.get('/items/:id', (req, res) => {
  const response = actions.getItemById(req.params.id);
  res.status(200).json(response);
})

/* POST new item to list. */
router.post('/items', (req, res) => {
  const response = actions.createNewItem(req.body);
  res.status(201).json(response);
})

/* DELETE item from list by id. */
router.delete('/items/:id', (req, res) => {
  const response = actions.deleteItem(req.params.id);
  res.status(200).json(response);
})

/* PUT update an item in the list. */
router.put('/items/:id', (req, res) => {
  const response = actions.updateItem(req.params.id, req.body);
  res.status(200).json(response);
})

module.exports = router;
