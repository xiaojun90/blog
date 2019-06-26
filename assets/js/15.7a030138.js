(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{229:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_07-复杂度来源-低成本、安全、规模"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_07-复杂度来源-低成本、安全、规模","aria-hidden":"true"}},[t._v("#")]),t._v(" 07-复杂度来源:低成本、安全、规模")]),t._v(" "),r("h2",{attrs:{id:"低成本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低成本","aria-hidden":"true"}},[t._v("#")]),t._v(" 低成本")]),t._v(" "),r("h3",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("通常情况下，我们会通过增加机器来实现高性能和高可用，而低成本是需要我们减少机器来达到低成本的要求。这与高性能和高可用产生了天然的矛盾。所以一般情况下，低成本是架构设计中的附加约束条件，而不是主要目标。比如说老板说这个项目最多只能提供十台服务器，那么设计架构时就要按照这个约束去做设计，如果最后无论如何也设计不出满足这个约束的方案，那么只能找老板调整这个成本约束了。")]),t._v(" "),r("h3",{attrs:{id:"如何实现低成本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何实现低成本","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何实现低成本")]),t._v(" "),r("p",[t._v("低成本带来的复杂度主要体现在:一般只有通过创新才能实现低成本，创新包括引进新技术，或者创造新技术。\n实现低成本的几个经典例子：")]),t._v(" "),r("ul",[r("li",[t._v("NoSQL(如MS、redis)是为了解决关系型数据库无法应用高并发下的访问压力。")]),t._v(" "),r("li",[t._v("全文搜索引擎(ES)是为了解决关系型数据库like搜索低效的问题。")]),t._v(" "),r("li",[t._v("Hadoop是为了解决传统文件系统无法应对海量数据的计算和存储问题。")])]),t._v(" "),r("p",[t._v("无论是引进新技术还是创造新技术，都需是一件复杂的事情。引进新技术，需要花费时间去学习新技术，并与现有的技术相结合。创造新技术则需要去创建新的理念和技术，并且与现有的技术有很大的飞跃。")]),t._v(" "),r("p",[t._v("创建新技术比引进新技术有更高的复杂度，所以中小型公司一般都是通过引进新技术来实现低成本，而大公司更有可能通过创造新技术来达到实现低成本的目的。")]),t._v(" "),r("h2",{attrs:{id:"安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),r("h3",{attrs:{id:"简介-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("安全是一个庞大而复杂的领域，一旦出现安全问题，对于企业影响非常重大。我们时常可以听到一些关系安全方面的事故，比如用户信息泄露等。正因为安全对于企业影响重大，所以在做架构时要多考虑安全方面的问题。")]),t._v(" "),r("h3",{attrs:{id:"分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),r("p",[t._v("从技术角度来看，可以分成二类，一是功能上的安全，二是架构上的安全。")]),t._v(" "),r("h4",{attrs:{id:"功能上的安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能上的安全","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能上的安全")]),t._v(" "),r("p",[t._v("如常见的XSS攻击、SQL注入、密码破解等。本质上因为系统存在漏洞，才让黑客有了可乘之机。黑客会利用系统的各种漏洞而侵入系统，从而进行破坏和盗取。")]),t._v(" "),r("p",[t._v("功能安全一般与架构无关，而与具体实现有关。很多构架已经内嵌了常见的安全功能，可以解决常见的安全问题。但是框架只能解决已知的安全问题，不能解决未知的安全问题，而且框架本身以可能存在漏洞。因此功能安全问题是一个不断完善的过程。")]),t._v(" "),r("h4",{attrs:{id:"架构上的安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构上的安全","aria-hidden":"true"}},[t._v("#")]),t._v(" 架构上的安全")]),t._v(" "),r("p",[t._v("如果说功能上的安全是防小偷，那么架构上的安全是防大盗。架构上出现安全问题比功能上出现安全问题会严重很多。在互联网时代，对于部署在互联网上的系统，理论上来说，在全球任何地方都可以发起攻击。")]),t._v(" "),r("p",[t._v("传统的架构主要是通过防火墙来实现架构的安全，防火墙的主要功能就是隔离网络，通过把网络分隔成不同区域，制定出不同的区域访问策略来控制不同信任程度区域间传送的数据流。常见的银行网络架构图：\n"),r("img",{attrs:{src:"https://img-blog.csdn.net/20181023111449344?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW94aXpoZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"在这里插入图片描述"}})]),t._v(" "),r("p",[t._v("防火墙虽然功能强大，但是性能一般，并且价格昂贵，一般只有银行和企业应用使用，互联网企业很少使用。因为互联网应用一般具有高并发和海量访问的特点，防火墙无法支撑。")]),t._v(" "),r("p",[t._v("互联网应用的架构安全没有什么好的方案，更多地是依靠运营商或者云服务商强大的带宽和流量清洗的能力，较少自己去实现。")]),t._v(" "),r("h2",{attrs:{id:"规模"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规模","aria-hidden":"true"}},[t._v("#")]),t._v(" 规模")]),t._v(" "),r("p",[t._v("很多企业级应用，没有高性能的要求、也没有高可用的要求，也不需要可扩展性，但我们却经常说这些应用很复杂。关键在于这样的系统功能特别多，逻辑非常复杂。特别是对于一些历史时间长的系统，不断往里面加功能，后来的人由于不熟悉系统，不敢轻易的动系统，不理解业务，对于他们来说，完全就是一个黑盒系统，面对这样一个看不懂、改不动、不敢改的系统，当然复杂度就高了。")]),t._v(" "),r("p",[t._v('规模带来的复杂度主要体现在"量变产生质变"。当系统超过一定的阈值，复杂度会带来质的改变。')]),t._v(" "),r("p",[t._v("常见的规模带来的复杂度：")]),t._v(" "),r("ul",[r("li",[t._v("功能越来越多，导致系统复杂度呈指数级上升。\n例如一个系统从3个功能增加到8个功能，它的复杂度会增加多少?就假定功能间是二二相关连的，通过下图可以直观的感受到：\n"),r("img",{attrs:{src:"https://img-blog.csdn.net/20181023130943719?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW94aXpoZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"3个功能"}}),t._v(" "),r("img",{attrs:{src:"https://img-blog.csdn.net/20181023131019808?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hpYW94aXpoZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"8个功能"}}),t._v("\n从中可知，增加功能，其复杂度并不是一个线性增加，而是一个指数级的增加。")]),t._v(" "),r("li",[t._v("数据越来越多，其复杂度越来越高。\n系统数据越来越多，也会产生一个质变的过程。大数据就是在数据量不断增加的背景下产生的。\n再比如关系型数据库，以MySQL为例，MySQL单表的数据量推荐在5000万左右，如果表的数据量在远远低与这个数值的话，很多问题都不用去考虑。但是如果表的数据来到了10亿条的话，那么就会产生一系列的问题。例如：增加索引慢，修改表结构慢、索引性能差、数据库备份时间长...\n因此，如果数据量大的时候，我们会考虑分表，这个拆分又会带来一些复杂度问题，例如：如何进行拆分、拆分后数据如何进行查询...")])]),t._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),r("p",[t._v('主要介绍了架构复杂度来源的三个方面：低成本、安全和规模。低成本给架构带来的复杂度体现在引进新技术和创造新技术。介绍了功能性安全和架构上安全带来的复杂度。以及在规模不断变大，由"量变"产生"质变"带来的复杂度。')]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("注：文章内容总结于极客时间"),r("a",{attrs:{href:"https://time.geekbang.org/column/article/6990",target:"_blank",rel:"noopener noreferrer"}},[t._v("从0开始学架构 07 | 复杂度来源：低成本、安全、规模"),r("OutboundLink")],1)]),t._v(" "),r("Valine")],1)},[],!1,null,null,null);a.default=s.exports}}]);