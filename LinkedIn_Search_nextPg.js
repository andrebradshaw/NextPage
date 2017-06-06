//Move to next page on LinkedIn Search Results
var first = '&page=2';
var addon = '&page=';
var regPrime = /&page=(\d+)/g;
var url = window.location.href;
var str;
while ((str = regPrime.exec(url)) !== null) {
	var numInt = parseInt(str[1]);
	var next = numInt+1;
}
	if (next === null) {
	var	newURL = window.location.href + first;
	} else {
	var newURL = url.replace(/&page=\d+/g, addon + next);
	}
window.location.href = newURL;
