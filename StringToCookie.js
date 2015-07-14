// This Script is a basic variable to Cookie Converter for Tracking-Apps
// Integrate in your HTML-HEAD using Javascript-Script tag src="StringToCookie.js"
// Add Parameters one or many parameters to your File and Convert them to Cookies e.g.: index.html?a=1 
// or StringToCookie_Example.html?a=1&b=3&c=m2-m3-m4-m5 


// Query-String to Array
var QueryString = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
	console.debug(query_string);
    return query_string;
}();

// console.debug(Object.keys(QueryString));
// console.debug(Object.getOwnPropertyNames(QueryString));
// Convert URL-Strings to Cookie
var p = QueryString;
for (var key in p) {
  if (p.hasOwnProperty(key)) {
    console.debug(key + " -> " + p[key]);
    document.cookie= key + "=" + p[key] + "; expires=Thu, 18 Dec 2030 12:00:00 UTC";
  }
}
