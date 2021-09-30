---
title: css盒模型
date: 2021-09-29 11:09:46
permalink: /pages/eeb020/
categories:
  - 前端
  - CSS
tags:
  - 
---
## 盒子模型
> 盒子模型封装周围的元素，本质上是一个盒子，定义了盒子的margin、border、padding、content。有两种盒模> >型：标准盒模型和IE盒模型，通过box-sizing属性进行切换。
#### 标准盒模型
标准盒模型设置的宽高对应的是content box，而盒模型宽高分别等于自身加上对应两边的padding与border的和，即宽= `width` + `margin-left` + `margin-right` +  `border-left` +  `border-right`。通过border-sizing：content-box设置标准盒模型
