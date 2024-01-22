// ==UserScript==
// @name         check2
// @namespace    1
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        http*://test.k12media.cn:8000/tqweb/demo/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const container = document.createElement('div');
container.style.display = 'flex';
container.style.alignItems = 'flex-start'; 
container.style.justifyContent = 'center';
container.style.position = 'fixed';
container.style.top = '0';
container.style.width = '100%'; 

const input = document.createElement('input');
input.type = 'text';
input.placeholder = '输入考试id'; 

// Button 1
const button1 = document.createElement('button');
button1.textContent = '1';
button1.onclick = function() {
    viewTest('/tqweb/report/StudentReport.a?showStudentReport', input.value);
};

// Button 2
const button2 = document.createElement('button');
button2.textContent = '2';
button2.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?doShowStudentPaperPublicReport', input.value);
};

// Button 3
const button3 = document.createElement('button');
button3.textContent = '3';
button3.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?doShowStudentReport', input.value);
};

// Button 4
const button4 = document.createElement('button');
button4.textContent = '4';
button4.onclick = function() {
    viewTest('/tqweb/report/NewStudentReport.a?showStudentScoreReport', input.value);
};

// Append elements to the container
container.appendChild(input);
container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(button4);

// Append the container to the document body or another desired element
document.body.appendChild(container);
})();