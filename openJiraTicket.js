// Change the domain and defaultPrefix to suit your needs. Then, run this code in a browser
// console to get your bookmarklet code.
var sourceCode = `
(function () {
    var domain = 'http://bugs.cbeagan.org/browse/'
    var defaultPrefix = 'CB-'
    var tkt = window.prompt('Enter JIRA ticket number')
    if (tkt.length === 4) { 
        tkt = defaultPrefix + tkt
    }
    window.open(domain + tkt, 'jira') 
})()
`
sourceCode = encodeURIComponent('javascript:' + sourceCode)
console.log(sourceCode)
