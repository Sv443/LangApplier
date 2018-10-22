"use-strict";

const lap = new function() {
	this.name = "LangApplier";
	this.version = "1.0.0";
	this.author = "Sv443";
	this.desc = "Don't waste any time coding complex code in JS, just add a few attributes to your HTML elements instead!";
}

var blang, dbg;

document.addEventListener("DOMContentLoaded", function(){
	blang = document.body.dataset.default_lang;
	if(isempty(gebid("langapplier_disable_watermark"))) console.log("%c" + lap.name + " v" + lap.version + " - (c) Sv443 / Sven Fehler 2018 ( https://github.com/Sv443 ) - licensed under the MIT license", "background-color:#cccccc;color:black;padding:0.2em;font-size:1.1em;");
	langapp.change(blang);
	
	if(!isempty(gebid("langapplier_enable_debug"))) dbg = true;
	else dbg = false;
});

const langapp = new function() {
	this.change = function(l) {
		blang = document.body.dataset.lang;
		document.body.dataset.lang = l;
		if(dbg) clog('changing to "' + l + '"');
		
		langapp.ctitle();
		langapp.ccontent();
		langapp.csrc();
		langapp.conclick();
		langapp.chref();
		langapp.cplaceholder();
		
		document.dispatchEvent(new Event("lang_change"));
	}
	this.ctitle = function() {
		blang = document.body.dataset.lang;
		var swel = gebcn("langapp");
		for(var i = 0; i < swel.length; i++) {
			if(isempty(swel[i].dataset.lang_title)){}
			else {
				var spl = swel[i].dataset.lang_title.split("|");
				for(var j = 0; j < spl.length; j++) {
					if(spl[j].includes(blang)) {
						var spl2 = spl[j].split("°")[1];
						swel[i].title=spl2;
					}
				}
			}
		}
	}
	this.ccontent = function() {
		blang = document.body.dataset.lang;
		var swel = gebcn("langapp");
		for(var i = 0; i < swel.length; i++) {
			if(isempty(swel[i].dataset.lang_content)){}
			else {
				var spl = swel[i].dataset.lang_content.split("|");
				for(var j = 0; j < spl.length; j++) {
					if(spl[j].includes(blang)) {
						var spl2 = spl[j].split("°")[1];
						swel[i].innerHTML=spl2;
					}
				}
			}
		}
	}
	this.csrc = function() {
		blang = document.body.dataset.lang;
		var swel = gebcn("langapp");
		for(var i = 0; i < swel.length; i++) {
			if(isempty(swel[i].dataset.lang_src)){}
			else {
				var spl = swel[i].dataset.lang_src.split("|");
				for(var j = 0; j < spl.length; j++) {
					if(spl[j].includes(blang)) {
						var spl2 = spl[j].split("°")[1];
						swel[i].src=spl2;
					}
				}
			}
		}
	}
	this.conclick = function() {
		blang = document.body.dataset.lang;
		var swel = gebcn("langapp");
		for(var i = 0; i < swel.length; i++) {
			if(isempty(swel[i].dataset.lang_onclick)){}
			else {
				var spl = swel[i].dataset.lang_onclick.split("|");
				for(var j = 0; j < spl.length; j++) {
					if(spl[j].includes(blang)) {
						var spl2 = spl[j].split("°")[1];
						swel[i].onclick=spl2;
					}
				}
			}
		}
	}
	this.chref = function() {
		blang = document.body.dataset.lang;
		var swel = gebcn("langapp");
		for(var i = 0; i < swel.length; i++) {
			if(isempty(swel[i].dataset.lang_href)){}
			else {
				var spl = swel[i].dataset.lang_href.split("|");
				for(var j = 0; j < spl.length; j++) {
					if(spl[j].includes(blang)) {
						var spl2 = spl[j].split("°")[1];
						swel[i].href=spl2;
					}
				}
			}
		}
	}
	this.cplaceholder = function() {
		blang = document.body.dataset.lang;
		var swel = gebcn("langapp");
		for(var i = 0; i < swel.length; i++) {
			if(isempty(swel[i].dataset.lang_placeholder)){}
			else {
				var spl = swel[i].dataset.lang_placeholder.split("|");
				for(var j = 0; j < spl.length; j++) {
					if(spl[j].includes(blang)) {
						var spl2 = spl[j].split("°")[1];
						swel[i].placeholder=spl2;
					}
				}
			}
		}
	}
}

function gebid(id) {return document.getElementById(id);}
function gebcn(classn) {return document.getElementsByClassName(classn);}
function isempty(str) {if(str === null || str === undefined || str == "") return true; else return false;}
