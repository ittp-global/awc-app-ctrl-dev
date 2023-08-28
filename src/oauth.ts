

const fs = require('fs')
const axios = require('axios')


async function getScript(src) {
const script = 'https://oauth.mail.ru/sdk/v0.16.2/oauth.js'

let s = document.createElement('script') 
}

//
// MR.init({
//        clientId: "1b2735ac065641b3945802ddf031faa1",
//        scopes: [MR.SCOPE_USER_INFO, MR.SCOPE_MAIL_IMAP],
//
//        onlogin: function (state) {
//          if (state.user) {
//            console.info("MR.login:", state);
//          }
//        },
//        onlogout: function () {
//          console.info("MR.logout");
//        }
//      });