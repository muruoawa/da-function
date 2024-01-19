// ==UserScript==
// @name         达睿思替换测试
// @namespace    这是个测试
// @version      2024.1.1
// @description  达睿思
// @author       玩去吧
// @run-at       document-start
// @match        http*://*.k12media.cn*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.innerHTML = document.body.innerHTML.replace(/73067/g, '67815').replace(/2023-07-10 16:55:10/g, '已修改');
    document.body.innerHTML = document.body.innerHTML.replace(/2022-2023学年第二学期高一期末考试\(全区\)/g, '已修改');
})();
