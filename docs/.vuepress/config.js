const architectureChildren = ['','1002','1001','1003','1004', '1005', 
'1006','1007','1008','1009','1010','1011','1012','1013','1014','1015',
'1016','1017','1018','1019','1020','1021','1022','1023','1024','1025',
'1026','1027','1028','1029','1030','1031','1032','1033','1034','1035',
'1036','1037','1038','1039','1040','1041'];


const backendChildren = ['2001','2002','2003','2004','2005',
'2006','2007','2008','2009','2010',
'2011','2012','19041601','19050901'];

module.exports = {
  base: '/blog/',
  title: 'Joyxj',
  description: '该博客已停止更新，请访问: https://joyxj.com',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '架构设计', link: '/architecture/' },
	  { text: '前端', link: '/frontend/4001' },
	  { text: '后端', link: '/backend/2001' },
    { text: '大数据', link: '/bigdata' },
    { text: '系列教程',
      items:[
        {text:'Netty系列',link:'/series/netty/'},
        {text:'Dubbo系列',link:'/series/dubbo/'}
      ]  
    },
	  { text: '杂记', link: '/other/5001' },
      { text: 'Github', link: 'https://github.com/xiaojun90/blog' } //,
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
          children:architectureChildren
        }
      ],
      '/frontend/': [
        {
          title: '前端',
          collapsable: false,
          children:[
            '4001',
            '4003'
          ]
        }
      ],
      '/backend/':[
        {
          title:'后端技术',
          collapsable: false,
          children:backendChildren
        }
      ],
      '/other/': [
        {
          title: '杂记',
          collapsable: false,
          children:[
            '5001',
            '5002',
            '5003',
            '5004',
            '5005',
            '5006',
            '5007',
            '5008',
            '5009',
            '5010'
          ]
        }
      ], 
      '/series/netty/':[
        {
          title:'Netty系列',
          collapsable: false,
          children:[
            '',
            '6001',
            '6002',
            '6003'
          ]
        }
      ],  
      '/series/dubbo/':[
        {
          title:'dubbo系列',
          collapsable: false,
          children:[
            '',
            '6004',
            '6005',
            '6007',
            '6006'
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
  markdown: {
    lineNumbers:true
  },
  plugins: [
    ['@vuepress/back-to-top',true],
    [ 
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).fromNow();
        }
      }
    ]
  ],
};