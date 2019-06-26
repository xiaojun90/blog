(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{230:function(_,v,t){"use strict";t.r(v);var r=t(0),e=Object(r.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_11-架构设计流程：评估和选择备选方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-架构设计流程：评估和选择备选方案","aria-hidden":"true"}},[_._v("#")]),_._v(" 11-架构设计流程：评估和选择备选方案")]),_._v(" "),t("h2",{attrs:{id:"引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引言","aria-hidden":"true"}},[_._v("#")]),_._v(" 引言")]),_._v(" "),t("p",[_._v("在完成备选方案的设计后，如何挑选一个最终方案也是一个很大的挑战，主要是由于：")]),_._v(" "),t("ul",[t("li",[_._v("每个方案都是可行的，如果不可行的话就不可能成为备选方案。")]),_._v(" "),t("li",[_._v("没有哪个方案是完美的。每个方案都可能有缺陷。")]),_._v(" "),t("li",[_._v("评价标准比较主观，因此很容易的评审会议上出现架构师争吵的情况。")])]),_._v(" "),t("p",[_._v("因为挑选备选方案出现了困难，所以出现了以下几种指导思想：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("最简派")]),_._v(" "),t("p",[_._v("架构师挑选一个看起来最简单的方案。")])]),_._v(" "),t("li",[t("p",[_._v("最牛派")]),_._v(" "),t("p",[_._v("这个与最简派恰好相反，设计师会倾向于挑选一个技术上看起来最牛的方案。")])]),_._v(" "),t("li",[t("p",[_._v("最熟派")]),_._v(" "),t("p",[_._v("设计师基于自己以往的经验，挑选自己最熟悉的方案。")])]),_._v(" "),t("li",[t("p",[_._v("领导派")]),_._v(" "),t("p",[_._v("列出备选方案，设计师自己拿捏不定时，就给领导定夺。")])])]),_._v(" "),t("p",[_._v("这些做法并不存在绝对的正确和绝对的错误，关键是不同的场景下应该采取不同的方式。那应该如何判断该采用哪种方式呢？")]),_._v(" "),t("h2",{attrs:{id:"评估和选择备选方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评估和选择备选方案","aria-hidden":"true"}},[_._v("#")]),_._v(" 评估和选择备选方案")]),_._v(" "),t("p",[_._v("推荐的方式是采用“360度环评”，具体的方法就是:"),t("strong",[_._v("列出我们需要关注的质量属性点，然后分别从这些质量属性点去评估每个方案，再综合挑选出最合适的方案。")]),_._v("\n常见的质量属性点有：性能，可用性，硬件成本，项目投入，复杂性，安全性，可扩展性等。在评估这些质量属性点时，需要遵循架构设计的“简单”和“合适”原则，避免贪大求全，基本上某个质量属性能够满足一定时期的业务即可。")]),_._v(" "),t("p",[_._v("通常情况下，如果某个质量属性跟业务有关系时，需要评估未来业务发展规模时，一种简单的方式就是将当前的规模乘以2-4即可，如果现在的规模较小时，可以乘以4，如果现在的规模将大时，可以乘以2。")]),_._v(" "),t("p",[_._v("当然最理想的情况是，设计的方案在业务发展时，只要通过简单的扩容即可以满足需要。例如：我们设计的方案，在TPS是1000时，只要1台机器，TPS是2000时，只要2台机器，TPS是10000时，只要10台机器即可。但现实是不可能这么理想，因为量变会引起质变，具体哪里导致了质量，是很难在很长一段时间之前就预测到的。")]),_._v(" "),t("p",[_._v("完成360度环评后，通过环评表可以一目了然的就看出这个方案的优缺点。但是360度环评也只能帮助我们分析各个备选方案，还是没有办法确定哪个方案是最佳方案，原因在于没有哪个方案是最完美的，在各个质量属性都全面占优。")]),_._v(" "),t("p",[_._v("面临这种选择，有几种看似正确但却是错误的做法：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("数据对比法。简单的看哪个方案的优点更多就选择哪个方案。")]),_._v(" "),t("p",[_._v("这种做法的错误性在于把每个质量属性的重要性都等同，而没有考虑质量属性的优先级。")]),_._v(" "),t("p",[_._v("并且有时候会出现几个方案的优点数据一致的情况。")])]),_._v(" "),t("li",[t("p",[_._v("加权法：每个质量属性给一个权重，然后将每个方案的权重加起来，看哪个方案的得分高就选择哪个方案。")]),_._v(" "),t("p",[_._v("这种方案的难点在于无法客观的对每个质量属性进行权重得分。这个权重的确定没有客观的标准，极端情况下，设计师为了选择某个方案，故意调高某个质量属性的权重，降低另外一个质量属性的权重。")])])]),_._v(" "),t("p",[_._v("那正确的做法是什么呢？")]),_._v(" "),t("p",[_._v("正确的做法是按照优先级进行选择，即架构师"),t("strong",[_._v("根据当前业务的发展情况，团队人员规模和技能、业务发展预测等因素，将质量属性按照优先级进行排序，首选挑选满足第一优先级的，如果方案都满足，就挑选满足第二优先级的...以此类推。")]),_._v(" 由于备注方案的差异足够明显，所以不可能会出现多个方案的所有质量属性的优缺点都一致的情况。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("注：文章内容总结于极客时间"),t("a",{attrs:{href:"https://time.geekbang.org/column/article/7832",target:"_blank",rel:"noopener noreferrer"}},[_._v("12 | 架构设计流程：评估和选择备选方案"),t("OutboundLink")],1)]),_._v(" "),t("Valine")],1)},[],!1,null,null,null);v.default=e.exports}}]);