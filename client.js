/**
 * Created by tal on 6/27/15.
 */

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getParameterByName(url, name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(url);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



//var parser = document.createElement('a');
//parser.href = "http://example.com:3000/pathname/?search=test#hash";
//
//parser.protocol; // => "http:"
//parser.hostname; // => "example.com"
//parser.port;     // => "3000"
//parser.pathname; // => "/pathname/"
//parser.search;   // => "?search=test"
//parser.hash;     // => "#hash"
//parser.host;     // => "example.com:3000"
//

function setInvalid(name, url) {
  setCookie("clubixValid-"+name,url,365);

}
var cookies = document.cookie;
//var x=document.getElementsByTagName("div");

var parseUrl = function(url) {
  var parser = document.createElement('a');
  parser.href = url;
  return parser;
}

var init = function(page) {
  if (getParameterByName(location.search,"page")=='elements') {
    return;
  }
  var pref="clubix-";
  var parser = parseUrl(window.location);
  var refParser = parseUrl(document.referrer);
  var pageId = getParameterByName(location.search,"id");
  if (parser.hostname === refParser.hostname) {
    var refPageId = getParameterByName(document.referrer,"id")
    if (page==99 && pageId !== refPageId) {
      setCookie(pref+refPageId,window.location);
      setCookie(pref+refPageId+"-num",page);

      return;
    }
  }

  var loc = getCookie(pref+pageId);
  var pageNum = getCookie(pref+pageId+"-num");

  if (!loc) {
    loc = window.location;
    pageNum = page;
  }

  if (page < pageNum) {
    return window.location.assign(loc);
  }

  setCookie(pref+pageId,window.location);
  setCookie(pref+pageId+"-num",page);


}

var shareWithWhatsapp2 = function(link,text) {
  if (getParameterByName(location.search,"page")=='elements') {
    return;
  }

  //document.write(
//
  var node = document.getElementById('shareWhatsapp');
  //node.insertAdjacentHTML('afterend',
  //'<iframe><html><head><style type="text/css">body,html {    padding: 0;    margin: 0;    height: 100%;    width: 100%;    text-align:center;}.wa_btn {    background-image: url("http://lp.infopage.me/templates/user/whatsapp.button.1.2.3.svg");    background-position:2px 2px;    background-size:19px;    border: 1px solid rgba(0, 0, 0, 0.1);    display: inline-block !important;    position: relative;    font-family: Arial,sans-serif;    letter-spacing: .4px;    cursor: pointer;    font-weight: 400;    text-transform: none;    color: #fff;    border-radius: 2px;    background-color: #5cbe4a;    background-repeat: no-repeat;    line-height: 1.9;	text-decoration: none;	text-align: left;}.wa_btn_s {    font-size: 17px;    background-size: 21px;    background-position: 5px 5px;    padding: 3px 6px 3px 25px;    text-align:center;}.wa_btn_m {    font-size: 17px;    background-size: 21px;    background-position: 4px 2px;    padding: 4px 6px 4px 30px;}.wa_btn_l {    font-size: 17px;    background-size: 21px;    background-position: 5px 5px;    padding: 8px 6px 8px 30px;}.wa_btn_s {  background-position: 5px 8px; }</style><meta charset="utf-8"></head><body><a class="wa_btn wa_btn_s" id="e28761435806887" href="whatsapp://send?text=%D7%94%D7%99%D7%99%2C%20%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A9%D7%AA%D7%A3%20%D7%90%D7%95%D7%AA%D7%9A%20%D7%91%D7%A7%D7%99%D7%A9%D7%95%D7%A8%20%D7%94%D7%91%D7%90%3A%20%20'+link+'?utm_source=whatsapp" style="display:none;" data-text="היי, רציתי לשתף אותך בקישור הבא: " data-href="htt'+link+'?utm_source=whatsapp" target="_top"> שתף בוואטסאפ</a></body></html></iframe>');
}


//
//var valid = getCookie("clubixValid");
////alert("in test.js "+valid);
//
//if (!valid) {
//  setCookie("clubixValid", "true", 365);
//} else if (valid == "false" ) {
////    var x=document.getElementsByTagName("div");
////    for (var i=0;i< x.length; i++) {
////        x[i].parentNode.removeChild(x[i]);
////    }
//  if (window.location != "http://lp.infopage.me/index.php?page=landing&id=21937&token=12f7312b4d9643975b72b9c5c032e2be") {
//    window.location.assign("http://lp.infopage.me/index.php?page=landing&id=21937&token=12f7312b4d9643975b72b9c5c032e2be")
//  }
//}

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload()
  }
}, false);


