// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'HTML',
        link: '/html/',
        items: [
          { text: 'HTML基础结构', link: '/pages/4f192e/' },
          { text: 'HTML标签', link: '/pages/8a1caa/' },
          { text: '行内元素与块级元素', link: '/pages/6c335a/' },
        ],
      },
      {
        text: 'CSS',
        link: '/css/',
        items: [
          { text: 'CSS基础', link: '/pages/26e3de/' },
          { text: 'CSS选择器', link: '/pages/56848d/' },
          { text: 'CSS_flex布局', link: '/pages/abfbf4/' },
          { text: 'CSS盒模型', link: '/pages/9f7d32/' },
          { text: 'CSS的BFC', link: '/pages/272b44/' },
          { text: 'CSS居中对齐', link: '/pages/7f49ca/' },
          { text: 'CSS布局', link: '/pages/a15616/' },
          { text: 'CSS浮动与清除浮动', link: '/pages/80c055/' },
          { text: 'css新特性', link: '/pages/558f48/' },
        ],
      },
      {
        text: 'JavaScript基础',
        items: [{
          text: 'JS基础',
          link: '/pages/0ccc72/',
          items: [
            { text: 'JS基本概念', link: '/pages/0ccc72/' },
            { text: 'JS变量与声明', link: '/pages/28aebc/' },
            { text: 'JS数据类型', link: '/pages/1be7d0/' },
            { text: 'JS数据类型检测', link: '/pages/77b805/' },
          ],
        },
        { text: 'v8执行代码', link: '/pages/3b99aa/' },
        {
          text: '调用堆栈',
          link: '/pages/469343/',
          items: [
            { text: '执行上下文', link: '/pages/469343/' },
            { text: '变量对象', link: '/pages/577d23/' },
            { text: '作用域链', link: '/pages/68428e/' },
            { text: 'this', link: '/pages/aa5a6c/' },
            { text: '内存空间', link: '/pages/808c3d/' },
          ],
        },
        {
          text: '作用域和闭包',
          link: '/pages/620c4d/',
          items: [
            { text: '作用域', link: '/pages/620c4d/' },
            { text: '闭包', link: '/pages/623094/' },
          ],
        },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: 'linux',
    link: '/linux/',
    items: [
      { text: '虚拟机', link: '/pages/0194e8/' },
      { text: 'linux目录', link: '/pages/23f178/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: '博客搭建', link: '/pages/a5062b/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
    ],
  },
  { text: '关于', link: '' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
