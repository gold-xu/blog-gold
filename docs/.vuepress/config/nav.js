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
        items: [
          { text: 'HTML基础结构', link: '/pages/4f192e/' },
          { text: 'HTML标签', link: '/pages/8a1caa/' },
        ],
      },
      {
        text: 'CSS',
        items: [
          { text: 'CSS基础', link: '/pages/26e3de/' },
          { text: 'CSS选择器', link: '/pages/56848d/' },
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
