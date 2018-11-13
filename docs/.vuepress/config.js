module.exports = {
  base: '/blog/',
  title: '肖君的博客',
  description: '喷泉之所以漂亮是因为有压力,瀑布之所以壮观是因为没有退路',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '架构设计', link: '/architecture/1002' },
	  { text: '前端', link: '/frontend/4001' },
	  { text: '后端', link: '/backend' },
	  { text: '大数据', link: '/bigdata' },
	  { text: '杂记', link: '/other/5001' },
      { text: 'External', link: 'https://google.com' } //,
	  /**
	   {
        text: 'Languages',
        items: [
          { text: '中文', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      }
	  **/
	 
    ],
	sidebar: {
      '/architecture/': [
        {
          title: '架构设计',
          collapsable: false,
          children:[
            '1002',
            '1001',
            '1003',
            '1004',
            '1005'
          ]
        }
      ],
      '/frontend/': [
        {
          title: '前端',
          collapsable: false,
          children:[
            '4001'
          ]
        }
      ],
      '/other/': [
        {
          title: '杂记',
          collapsable: false,
          children:[
            '5001',
            '5002'
          ]
        }
      ],     
	  // fallback
      '/': [
        ''
      ]
	},
	lastUpdated: '上次更新'
  },
  plugins: {
    '@vuepress/last-updated':{
      transformer: 'yyyy-MM-dd HH:mm:ss'
    }
  }
}