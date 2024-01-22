// ==UserScript==
// @name         change
// @namespace    6
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建原始文本输入框
var 原始文本输入框 = document.createElement('input');
原始文本输入框.type = 'text';
原始文本输入框.placeholder = '输入原始文本';
document.body.appendChild(原始文本输入框);

// 创建替换文本输入框
var 替换文本输入框 = document.createElement('input');
替换文本输入框.type = 'text';
替换文本输入框.placeholder = '输入替换后的文本';
document.body.appendChild(替换文本输入框);

// 创建替换按钮
var 替换按钮 = document.createElement('button');
替换按钮.textContent = '替换文本';
替换按钮.onclick = function() {
    // 获取输入框中的值
    var 原始文本 = 原始文本输入框.value;
    var 替换后文本 = 替换文本输入框.value;

    // 获取整个文档的内容
    var 整个文档内容 = document.body.innerHTML;

    // 进行替换操作
    var 替换后文档内容 = 整个文档内容.replace(原始文本, 替换后文本);

    // 将替换后的文档内容设置回文档
    document.body.innerHTML = 替换后文档内容;
};
document.body.appendChild(替换按钮);

})();