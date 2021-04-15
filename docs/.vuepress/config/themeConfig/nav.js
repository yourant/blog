// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '基础|博文',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '基础知识点',
        items: [
          { text: 'JavaScript', link: '/pages/a0057b/' },
          { text: 'ES6', link: '/pages/a0057b/' },
          { text: 'HTML与CSS', link: '/pages/a0057b/' },
          { text: 'JS设计模式', link: '/pages/a0057b/' },
        ],
      },
      {
        text: '博文',
        items: [
          { text: 'Vue', link: '/pages/a0057b/' },
          { text: 'React', link: '/pages/a0057b/' },
          { text: 'Webpack', link: '/pages/a0057b/' },
          { text: 'Nodejs', link: '/pages/a0057b/' },
        ],
      },
    ],
  },
  {
    text: '算法题解',
    link: '/algorithm/',
    items: [
        { text: '排序算法', link: '/pages/a0057b/' },
        { text: 'LeetCode', link: '/pages/a0057b/' },
        { text: '算法面试题解', link: '/pages/a0057b/' },
    ],
  },
  {
    text: '第三方服务',
    link: '/services/',
    items: [
        { text: 'Vue', link: '/pages/a0057b/' },
        { text: 'React', link: '/pages/a0057b/' },
        { text: 'Webpack', link: '/pages/a0057b/' },
        { text: 'Eslint与Babel', link: '/pages/a0057b/' },
        { text: 'Nodejs', link: '/pages/a0057b/' },
    ],
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
