// ==UserScript==
// @name         防颓插件
// @namespace    https://www.cnblogs.com/nlKOG
// @version      0.1
// @description  克制一时的颓废欲望
// @author       The_KOG
// @match        https://www.bilibili.com/*
// @match        https://*.zhihu.com/*
// @match        https://user.qzone.qq.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	if(prompt('颓尼玛呢',"")!="dqyakioi"){
        window.location.href='http://www.lydsy.com/';
        alert("别颓了, 刷题.");
    }else{
        alert("Yes he does!");
    }
})();
