module.exports = {
  base: '/blog/',
  title: '肖君的博客',
  description: '喷泉之所以漂亮是因为有压力,瀑布之所以壮观是因为没有退路',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '架构设计', link: '/architecture/08' },
	  { text: '前端', link: '/frontend' },
	  { text: '后端', link: '/backend' },
	  { text: '大数据', link: '/bigdata' },
	  { text: '杂记', link: '/other/501' },
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
				'08'
			]
		}
      ],
      '/other/': [
        {
          title: '杂记',
          collapsable: false,
          children:[
            '501'
          ]
        }
          ],
	  // fallback
      '/': [
        ''
      ]
	},
	lastUpdated: 'Last Updated'
  }
}