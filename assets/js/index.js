const converter = new showdown.Converter()
let md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
'because:\n\n' +
' - it\'s easy to use\n' +
' - it\'s extensible\n' +
' - works in the server and in the browser'

let reny = '[**renny**](http://www.google.com) is a *great* website\n'+
'because we can sreach up a lot of items\n'+
' - football\n '+
' - soccer\n' +
' - basketball'

const html = converter.makeHtml(md)
const renny = converter.makeHtml(reny)

const target = document.getElementById("content")
const renytarget = document.getElementById("content1")

target.insertAdjacentHTML('afterbegin', html)
renytarget.insertAdjacentHTML('beforebegin',renny)

