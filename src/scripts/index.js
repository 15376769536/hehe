var str = require("./templates/guide.string");
var str2 = require("./templates/index.string");

require("./libs/zepto.min.js");
require("./libs/swiper-3.4.0.min.js");

console.log($);

//var body = document.body;
//body.innerHTML = str + body.innerHTML;

//var myswiper = new Swiper('.swiper-container');

$(function(){
	$('body').prepend(str);
	
	var myswiper = new Swiper('.swiper-container');
	
	document.querySelector('#slide4').onclick = function(){
		$('body').html(str2);
	}
	
})
