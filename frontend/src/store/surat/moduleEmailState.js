/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


// import emails from '@/views/apps/email/mails'

export default {
    // mails: emails,
    mails: [],
    mail_filter: 'inbox',
    mailTags: [
      { text: 'Not Respon', value: 'Not Respon', color:"danger"},
      { text: 'Read', value: 'Not Respon', color:"dark"},
      { text: 'In Progress', value: 'In Progress', color:"warning"},
      { text: 'Done', value: 'Done', color:"success"},
    ],
    mailSearchQuery: '',
}