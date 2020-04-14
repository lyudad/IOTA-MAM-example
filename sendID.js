
const SendMamRestricted = require("./SendMamRestricted.js")
const SendPublicTransaction= require("./SendPublicTransaction.js")
const PublishAll = require('./PublishAll.js')
const seed = 'IOWPPONJTYHHVRFRGFRWRVQU9VDMQYLEVVEABJPW9PT9F9SYMGIOFDXPYSLGESFTMBSJECQEPLHGWWYRZ'
const address = 'YEHIA9TA9COPCTMOIFUEJVGUNDLSSJQCORYMEAZHRAUJXH9HGNI99BMLQDQOZNCLNVOLFMSFUIVPMYXDWEZFSZQROC'

// iota.getNewAddress(seed, { index: 0, securityLevel: 2, total: 1 })
//   .then(address => {
//     console.log('Your address is: ' + address);
//   })
//   .catch(err => {
//     console.log(err)
//   });

SendMamRestricted.execute("initialize root").then(function(result) {
    SendPublicTransaction.execute(seed,address,result)
    PublishAll.execute(10)
 })
