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


