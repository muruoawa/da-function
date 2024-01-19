// ==UserScript==
// @name         New Userscript
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 选择所有带有特定类名的元素
var elements = document.getElementsByClassName('text_lb');

// 遍历所有元素并将包含 viewTest 的源码显示在页面上
for (var i = 0; i < elements.length; i++) {
    // 获取元素的 onclick 属性值
    var onclickValue = elements[i].getAttribute('onclick');

    // 检查 onclick 属性中是否包含 viewTest
    if (onclickValue && onclickValue.indexOf('viewTest') !== -1) {
        // 获取元素的源码
        var sourceCode = elements[i].outerHTML;

        // 提取源码中的数字部分，并忽略指定的年份范围
        var numericPart = sourceCode.replace(/\D/g, '');
        var ignoredYears = ['20222023', '20232024', '20242025'];
        numericPart = numericPart.replace(new RegExp(ignoredYears.join('|'), 'g'), '');

        // 创建新的容器 div 元素
        var containerElement = document.createElement('div');

        // 将原始链接添加到容器中
        containerElement.innerHTML = sourceCode;

        // 获取容器中的所有链接元素
        var links = containerElement.querySelectorAll('a');

        // 修改链接的样式，使它们在同一行显示
        links.forEach(function(link) {
            link.style.display = 'inline-block';
        });

        // 创建包含提取的数字的 pre 元素
        var numericElement = document.createElement('pre');
        numericElement.textContent = numericPart;

        // 将提取的数字添加到容器中
        containerElement.appendChild(numericElement);

        // 设置容器的样式，使链接和数字在同一行显示
        containerElement.style.whiteSpace = 'nowrap';

        // 替换原来的元素
        elements[i].parentNode.replaceChild(containerElement, elements[i]);
    }
}

})();
