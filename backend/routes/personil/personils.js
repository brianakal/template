var express = require('express');
var router = express.Router();


const Personils = require('../../models').master_personil
const sequelize = require('../../models').sequelize
const Op = require('sequelize').Op

/* GET personil page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getPersonilList', async (req, res, next) => {
  const result = await Personils.findAll({
    // attributes: {exclude: ['id']}
  })
    .catch(error => {
      res.status(400).send(error)
    })
  res.json(result)
  // console.log(result)
});

module.exports = router;
