(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{224:function(_,v,t){"use strict";t.r(v);var a=t(0),i=Object(a.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_14-高性能数据库集群：分库分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-高性能数据库集群：分库分表","aria-hidden":"true"}},[_._v("#")]),_._v(" 14-高性能数据库集群：分库分表")]),_._v(" "),t("p",[_._v("读写分离分散了数据库的读写压力，但并没有降低数据库的存储压力。当数据量达到上亿的时候，单台数据库就会成为瓶颈。")]),_._v(" "),t("ul",[t("li",[_._v("单表数据量太大的话，读写性能会很差。增加索引，索引也会很大。")]),_._v(" "),t("li",[_._v("数据库文件太大的话，备份和恢复都要花费很多时间。")]),_._v(" "),t("li",[_._v("数据库文件太大，极端情况下，丢失数据的风险变高。")])]),_._v(" "),t("p",[_._v("所以单个数据库服务器存储的数据量不能太大，所以需要将存储分配到多台数据库服务器上。常见的方式有二种："),t("strong",[_._v("分库")]),_._v("，"),t("strong",[_._v("分表")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"分库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分库","aria-hidden":"true"}},[_._v("#")]),_._v(" 分库")]),_._v(" "),t("p",[_._v("分库是批将数据按模块将数据分配到不同的数据库服务器上。如对于电商网站来说，可以把用户、订单、商品模块数据分别放到不同的数据库服务器上，而不是放在单一的服务器上。")]),_._v(" "),t("p",[_._v("分库降低了存储和访问压力，但是也引进了一些新的复杂度。")]),_._v(" "),t("ul",[t("li",[_._v("join操作。分库后对于不同的库之间的数据无法进行Join操作。本来在同一个数据库的数据，二张表的数据只需要进行Join即可，但分库后这二个表在不同的库，需要进行多次查询。")]),_._v(" "),t("li",[_._v("事务问题。原先在同一个库里，可以在同一个事务里进行修改，分库后，表在不同的库里，无法在同一个库里进行修改。")]),_._v(" "),t("li",[_._v("成本问题。原先在一个库里，只需要一台服务器即可，分库后，需要3台服务器。")])]),_._v(" "),t("p",[_._v("对于初创的小公司，初期"),t("strong",[_._v("不建议采用分库")]),_._v("的做法。有如下原因：")]),_._v(" "),t("ul",[t("li",[_._v("初创公司业务不确认能否发展起来，处在不断试错的阶段，并没有那么大的存储和访问压力。")]),_._v(" "),t("li",[_._v("分库后，表之间的join和事务就无法简单实现了。")]),_._v(" "),t("li",[_._v("分库后，由于不同的操作需要读取不同的数据库，增加复杂度，增加工作量。")])]),_._v(" "),t("p",[_._v("当然如果业务的体量一开始就非常大的话，当然可以一开始都用分库的作法。比如BAT这类公司，上线一个新的业务，体量就会非常的大，一开始就会采用分库的作法，并且有成熟的方案。")]),_._v(" "),t("h2",{attrs:{id:"分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分表","aria-hidden":"true"}},[_._v("#")]),_._v(" 分表")]),_._v(" "),t("p",[_._v("分库后，将不同的数据存储在不同的数据服务器上，但是随着业务的发展，单表的规模也会达到单台服务器的处理瓶颈。此时就需要对表进行拆分了。")]),_._v(" "),t("p",[_._v("单表拆分有二种方式："),t("strong",[_._v("垂直拆分和水平拆分")]),_._v("。")]),_._v(" "),t("ul",[t("li",[_._v("从上往下切就是垂直拆分。比如把一个用户表的id,name,age拆分一张表，而id,desc,nickname拆成另外一张表。")]),_._v(" "),t("li",[_._v("从左往右切就是水平拆分。比如对于用户表，把用户ID从1-999999拆成一张表，把用户ID从1000000-1999999拆成另一张表。")])]),_._v(" "),t("p",[_._v("根据业务的需求，我们可以对表进行多次拆分，如多次垂直拆分和水平拆分。并不是只固定只能拆分一次。")]),_._v(" "),t("p",[_._v("单表进行切分后，是否需要放在不同的数据库服务器上，可以根据实际的拆分效果来确定。如果带来了很大的性能提升，则没必要放在不同的数据库服务器上。但是如果单表拆分后依然无法满足性能的要求，那就不得不考虑分库的作法。")]),_._v(" "),t("p",[_._v("虽然分表减轻了存储压力和带来了性能的提升，但和分库一样，仍然会带来一些复杂库问题。")]),_._v(" "),t("ol",[t("li",[_._v("垂直分表")])]),_._v(" "),t("p",[_._v("垂直分表适合把一些不常用且占了大量空间的列拆分出去。垂直分表带来的复杂度主要查询的操作数增加。比如刚才的用户表，原来只要查一次就可以查询出所有的字段值，现在则需要查询二次。")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("水平分表")])]),_._v(" "),t("p",[_._v("水平分表适合表数据量特别大的情况。当表的数据量达到千万级别时，就需要警惕起来，很有可能会成为性能的瓶颈。")]),_._v(" "),t("p",[_._v("水平分表带来的复杂度主要有以下几个方面：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("路由")]),_._v(" "),t("p",[_._v("水平分表后，某条数据具体在哪个表，需要增加一个路由算法来计算，这会带来一定的复杂度。")]),_._v(" "),t("p",[_._v("常见的路由算法：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("范围路由")]),_._v(" "),t("p",[_._v("选取有序的数据列(如整型、时间戳)做为路由的条件，不同分段分布在数据库的不同表中。比较用户ID，可以以100000作为一个分段，把1-100000放一个表，把100001-200000放一个表，以此类推。")]),_._v(" "),t("p",[_._v("范围路由在关键点在于"),t("strong",[_._v("如何进行分段")]),_._v("。分段太小，会拆分成很多的子表，维护困难。分段太大，单表的数据量仍然很大，仍会有性能瓶颈。一般建议分段的大小在100万到2000万之间。")]),_._v(" "),t("p",[_._v("范围路由的缺点分布不均匀。如我们安月份进行拆分，可以有的表的数据量非常小，而有的表数据量会非常大。")])]),_._v(" "),t("li",[t("p",[_._v("Hash路由")]),_._v(" "),t("p",[_._v("选取某个列(或某几个列)的值进行Hash运算，然后根据Hash结果分散到不同的表中。")]),_._v(" "),t("p",[_._v("Hash路由的复杂度主要体现在初表数量的选取上，多了会增加维度难度，少了仍然会有性能瓶颈。并且在增加表数量的情况下会非常麻烦，所有表数据需要进行重新Hash，分配到新表上。")]),_._v(" "),t("p",[_._v("Hash路由的优点是分配比较均匀。")])]),_._v(" "),t("li",[t("p",[_._v("配置路由")]),_._v(" "),t("p",[_._v("配置路由是用一张新表记录每一条记录存在在哪一张表上。配置路由设计简单，特别是在增加表时，只需要把迁移的数据的配置信息修改即可。")]),_._v(" "),t("p",[_._v("缺点是需要在查询一次，并且当配置路由表的数据量非常大的情况下，配置路由表也会成为性能的瓶颈。")])])])]),_._v(" "),t("li",[t("p",[_._v("Join操作")]),_._v(" "),t("p",[_._v("水平分表后，如果需要对表进行Join操作，需要进行多次的Join操作，然后进行合并。")])]),_._v(" "),t("li",[t("p",[_._v("Count操作")]),_._v(" "),t("p",[_._v("需要对每个表的数据进行Count(),然后再进行相加。这种方式实现简单，但是性能比较低。")]),_._v(" "),t("p",[_._v("替代方法：增加一个表，如叫“记录数表”，它保存表名和数据量。每次对表进行增删操作时，同步修改记录数表。这种作法是优点是性能比count()相加的性能高很多。但是缺点在于需要在每次操作表时更新记录数表，复杂度提升。并且还不能跟子表进行事物。如果子表更新成功，但记录数表更新失败的话，会出现记录数不一致的情况。")]),_._v(" "),t("p",[_._v("如果对于实时性要求不高的业务场景，可以采用定时任务的方式去更新记录数表。")])]),_._v(" "),t("li",[t("p",[_._v("Order By 操作")]),_._v(" "),t("p",[_._v("水平分表后无法进行Order By操作，只能通过业务代码或中间件去实现，查询出所有的数据，然后进行排序.")])])]),_._v(" "),t("h2",{attrs:{id:"实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现方式","aria-hidden":"true"}},[_._v("#")]),_._v(" 实现方式")]),_._v(" "),t("p",[_._v("分库和分表的实现方式和数据库读写分离一样可以采用程序封装和中间件二种方式.")]),_._v(" "),t("h2",{attrs:{id:"建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建议","aria-hidden":"true"}},[_._v("#")]),_._v(" 建议")]),_._v(" "),t("p",[_._v("不建议在一遇到性能瓶颈时就采用分库分表方式，可以选做以下的尝试：")]),_._v(" "),t("ul",[t("li",[_._v("做硬件优化。如增加内存(如果可行的)，机械硬盘更换成固态硬盘。")]),_._v(" "),t("li",[_._v("先做数据库服务器的调优，比如增加索引。")]),_._v(" "),t("li",[_._v("引入缓存。如redis。")]),_._v(" "),t("li",[_._v("程序与数据库的表的优化,重构。如减少不必要的查询，额外的数据冗余。")]),_._v(" "),t("li",[_._v("如上方式都不能提升性能，在考虑分库分表，并且要有预估性。")])]),_._v(" "),t("Valine")],1)},[],!1,null,null,null);v.default=i.exports}}]);