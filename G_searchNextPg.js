//script checks page URL and adds next page to URL. This is  only for Google searches. 
var first = '&start=10';
var addon = '&start=';
var regPrime = /&start=(\d+)/g;
var url = window.location.href;
var str;
while ((str = regPrime.exec(url)) !== null) {
	var numInt = parseInt(str[1]);
	var next = numInt+10;
}
	if (next == null) {
	var	newURL = window.location.href + first;
	} else {
	var newURL = url.replace(/&start=\d+/g, addon + next);
	}
window.location.href = newURL;
