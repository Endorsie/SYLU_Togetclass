// ==UserScript==
// @name         SYLU_Togetclass
// @license      Mozilla Public License 1.1 (MPL)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hope we can get the classes we desire all.
// @author       Endorsie
// @grant        none
// @match        https://jxw.sylu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default&su=(学号，填写后删除括号)
// ==/UserScript==

(function() {
    'use strict';
    /*弹窗自动确认*/
    window.confirm = function() { return true; };  
    window.alert   = function() { return true; };   

    const registrationInterval = 500; // 500毫秒抢一次课；
    const pageRefreshTimeout = 30000; // 30秒刷新一次页面；

   let registrationAttempt = setInterval(function() {
        generateMixed('课程代码1', '课程代码2');        // 替换为实际的课程代码
    }, registrationInterval);

    setTimeout(function() {
        clearInterval(registrationAttempt); // 30秒后停止尝试
        window.location.reload(); // 刷新页面
    }, pageRefreshTimeout);
})();
