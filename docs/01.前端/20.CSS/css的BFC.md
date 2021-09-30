---
title: css的BFC
date: 2021-09-29 15:25:28
permalink: /pages/84e477/
categories:
  - 前端
  - CSS
tags:
  - 
---
## 定义
> 块级格式化上下文(Block formatting context, BFC)是web页面的可视化css渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其它元素交互的区域--MDN这个知识点在以往的知识里是确实有的，很多网站没有，查询到是css2中的提案，在css3中普及。

## 创建BFC
* 根元素
* 浮动元素：float不为none
* 绝对定位元素：position为absolute或fixed
* 行内块元素：display为inline-block
* 表格单元格：display为table-cel
* 表格标题： display为table
* 匿名表格单元格元素：display为table、table-row、table-row-group、table-header-grounp、table-footer-group或inline-table
* overflow值不为visible