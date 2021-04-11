// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端博文',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '基础知识',
        items: [
          { text: 'JavaScript', link: '/note/javaScript/' },
          { text: 'ES6', link: '/note/es6/' },
          { text: 'TypeScript', link: '/note/typeScript/' },
          { text: 'JS设计模式', link: '/pages/design/' },
        ],
      },
      {
        text: '插件 | 框架 | 服务',
        items: [
          { text: 'Vue', link: '/note/vue/' },
          { text: 'React', link: '/note/react/' },
          { text: 'Angular', link: '/note/angular/' },
          { text: 'Webpack', link: '/note/webpack/' },
          { text: 'Nodejs', link: '/note/nodejs/' },
        ],
      },
    ],
  },
  {
    text: 'HTML与CSS',
    link: '/ui/',
  },
  {
    text: '算法题解',
    link: '/algorithm/'
  },
  {
    text: '工具使用',
    link: '/tools/',
    items: [
      { text: '技术文档', link: '/pages/docs/' },
      { text: 'Git技巧', link: '/pages/git/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/learning/' },
      { text: '面试', link: '/pages/interview/' },
      { text: '心情杂货', link: '/pages/mood/' },
      { text: '实用技巧', link: '/pages/skill/' },
    ],
  },
];
