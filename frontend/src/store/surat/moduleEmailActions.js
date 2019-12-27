/*=========================================================================================
  File Name: moduleEmailActions.js
  Description: Email Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from 'axios'

export default {
    setMailSearchQuery({ commit }, query){
        commit('SET_MAIL_SEARCH_QUERY', query)
    },
    updateMailFilter({ commit }, filterName){
        // alert(filterName)
        commit('UPDATE_MAIL_FILTER', filterName)
    },
    toggleIsMailStarred({ commit }, payload) {
        commit('TOGGLE_IS_MAIL_STARRED', payload);
    },
    moveMailsTo({ commit }, payload) {
        commit('MOVE_MAILS_TO', payload);
    },
    updateMailUnread({ commit }, payload) {
        commit('UPDATE_MAIL_UNREAD', payload);
    },
    addLabelToMails({ commit }, payload) {
        commit('ADD_LABEL_TO_MAILS', payload);
    },
    updateMailLabels({ commit }, payload) {
        commit('UPDATE_MAIL_LABELS', payload);
    },
    // async getInboxs({ commit }, filterName) {
    async getInboxs({ commit }) {
        /* 
        Udah jalan
        const response = await axios.get('/emails/getInboxList')
        commit('SET_MAILBOX', response.data)
        */
        
        const response = await axios.get('/emails/getInboxList')
        const maillss = response.data.map(variabelMail => {
            return {
                ...variabelMail,
                mailType : 'inbox'
            }
        })
        console.log(maillss)
        commit('SET_MAILBOX', maillss)
        /* 
        atau
        
        const hasilQuery = response.data
        for (let i = 0; i < hasilQuery.length-1; i++) {
            hasilQuery[i].mailType='inbox'
        }
        commit('SET_MAILBOX', hasilQuery)
 */

        // commit('SET_MAILBOX', response.data)
    },
    async getSents({ commit }) {
        const response = await axios.get('/emails/getSentList')
        commit('SET_MAILBOX', response.data)
    },
    /* 
    async getSearchInbox({ commit }, payload) {
        const response = await axios.get('/emails/getSearchInboxList', payload)
        commit('SET_MAILBOX', response.data)
    },
    async getSearchSent({ commit }, payload) {
        const response = await axios.get('/emails/getSearchSentList', payload)
        commit('SET_MAILBOX', response.data)
    }, 
    */
}