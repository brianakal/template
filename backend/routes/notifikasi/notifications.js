var express = require('express');
var router = express.Router();


const Notifications = require('../../models').email_inbox
const sequelize = require('../../models').sequelize
const Op = require('sequelize').Op

/* GET personil page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hitungNotifikasi', async (req, res, next) => {
  const result = await Notifications.findAndCountAll({
    where: {
      isread: 0
    }
    // attributes: {exclude: ['id']}
  })
    .catch(error => {
      res.status(400).send(error)
    })
  res.json(result)
  console.log(result)
});


module.exports = router;
