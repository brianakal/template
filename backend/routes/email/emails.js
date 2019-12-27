var express = require('express');
var router = express.Router();


const EmailInboxs = require('../../models').email_inbox
const EmailSents = require('../../models').email_sent
const sequelize = require('../../models').sequelize
const Op = require('sequelize').Op

/* GET personil page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getInboxList', async (req, res, next) => {
  const result = await EmailInboxs.findAll({
    // attributes: {exclude: ['id']}
  })
    .catch(error => {
      res.status(400).send(error)
    })
  res.json(result)
  // console.log(result)
});

router.get('/getSentList', async (req, res, next) => {
  const result = await EmailSents.findAll({
    // attributes: {exclude: ['id']}
  })
    .catch(error => {
      res.status(400).send(error)
    })
  res.json(result)
  // console.log(result)
});

router.get('/getSearchSentList/', async (req, res, next) => {
  const sql = `SELECT "to", "from", subject, message FROM email_sent WHERE "to"=:search OR "from"=:search  OR subject=:search OR message=:search` 
  const [result] = await sequelize.query(sql, { replacements: { search: req.body.isEmailSidebarActive }, type: sequelize.QueryTypes.SELECT, raw: false })
  res.json(result)
});
/* 
router.get('/getSearchSentList', async (req, res, next) => {
  const result = await EmailSents.findAll({
    // attributes: {exclude: ['id']}
  })
    .catch(error => {
      res.status(400).send(error)
    })
  res.json(result)
  // console.log(result)
});
 */
/* 
router.post('/saveDataDuaTableQuery', async (req, res, next) => {
  const sql = `INSERT INTO users 
                (name, email, password, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?) RETURNING id`

  const [[result]] = await sequelize.query(sql, {
    replacements: [
      req.body.name,
      req.body.email,
      bcrypt.hashSync(req.body.password),
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  })

  console.log(result)
  res.json(result)

  const sql2 = `INSERT INTO profiles
                (id_users, full_name, address, company, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?)`

  const [[result2]] = await sequelize.query(sql2, {
    replacements: [
      result.id,
      req.body.name,
      'alamat',
      'perusahaan',
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  })

  res.json(result2)
})
 */
router.post('/add_email', async (req, res, next) => {

  
  const sql = `INSERT INTO email_sent 
                ("to", "from", subject, message, attachment, isstarred, labels, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id_sent`


  const [[result]] = await sequelize.query(sql, {
    replacements: [
      // req.body.mailTo,
      // req.body.mailFrom,
      // req.body.mailSubject,
      // req.body.mailMessage,
      req.body.to,
      req.body.from,
      req.body.subject,
      req.body.message,
      req.body.attachment,
      false,
      'private',
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  })

  const sql2 = `INSERT INTO email_inbox
                (id_sent, "from", "to", subject, message, attachment, isread, isstarred, labels, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

  const [[result2]] = await sequelize.query(sql2, {
    replacements: [
      result.id_sent,
      req.body.from,
      req.body.to,
      req.body.subject,
      req.body.message,
      req.body.attachment,
      0,
      false,
      'private',
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  })

  // const ws = new WebSocket('ws://localhost:8008');
  // ws.on('open', async () => {
    
  //   const inboxNotRead = await EmailInboxs.findAndCountAll({
  //     where: {
  //       isread: 0
  //     }
  //   })

  //   //untuk dikirim ke websocket
  //   const data = JSON.stringify({
  //     from: req.body.mailFrom,
  //     to: req.body.mailTo,
  //     subject: req.body.mailSubject,
  //     // message: req.body.mailMessage,
  //     private: false,
  //     message: req.body.mailMessage + (new Date()).toISOString(),
  //     count: inboxNotRead.count
  //   })

  //   ws.send(data)
  // })

  res.json(result)

});

module.exports = router;
