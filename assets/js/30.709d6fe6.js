(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{216:function(_,v,l){"use strict";l.r(v);var i=l(0),a=Object(i.a)({},function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"_23-fmea方法，排除架构可用性隐患的利器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_23-fmea方法，排除架构可用性隐患的利器","aria-hidden":"true"}},[_._v("#")]),_._v(" 23-FMEA方法，排除架构可用性隐患的利器")]),_._v(" "),l("h2",{attrs:{id:"fmea介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#fmea介绍","aria-hidden":"true"}},[_._v("#")]),_._v(" FMEA介绍")]),_._v(" "),l("p",[_._v("FMEA(Failure mode and effects analysis,故障模式与影响分析)，又称为失效模式与后果分析、失效模式与效应分析、故障模式与后果分析或故障模式与效应分析等。FMEA是一种在各行各业都有广泛使用的可用性分析方法，通过对系统范围内潜在的故障模式加以分析，并且按照严重程度进行分类，以确定失效对于系统的最终影响。")]),_._v(" "),l("h2",{attrs:{id:"fmea方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#fmea方法","aria-hidden":"true"}},[_._v("#")]),_._v(" FMEA方法")]),_._v(" "),l("p",[_._v("在架构领域中，FMEA的具体分析方法是：")]),_._v(" "),l("ul",[l("li",[_._v("给出初始的架构设计图。")]),_._v(" "),l("li",[_._v("假设架构中某个部件出现了故障。")]),_._v(" "),l("li",[_._v("分析些故障对系统功能造成的影响。")]),_._v(" "),l("li",[_._v("根据分析结果，判断架构是否要做出优化。")])]),_._v(" "),l("p",[_._v("FMEA分析的方法其实很简单，就是一个FMEA分析表，常见的FMEA分析表包含以下以个方面：")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("功能点")]),_._v(" "),l("p",[_._v("当前的FMEA分析涉及到哪些功能点，这里的功能点是"),l("strong",[_._v("从用户的角度")]),_._v("来看的，而不是从系统各个模块功能点划分的。")])]),_._v(" "),l("li",[l("p",[_._v("故障模式")]),_._v(" "),l("p",[_._v("故障模式是指系统会出现什么样的故障，包括故障点和故障形式。这里的故障模式并不需要给出真正的故障原因，我们只需要假设出现某种故障现象即可。")]),_._v(" "),l("p",[_._v("此外故障模式的描述要尽量准确，多使用量化描述，避免使用泛化的描述。")])]),_._v(" "),l("li",[l("p",[_._v("故障影响")]),_._v(" "),l("p",[_._v("当发生故障模式中描述的故障时，功能点具体会受到什么影响。例如：功能偶尔不可用，功能点完全不可用，部分用户功能点不可用，功能点缓慢，功能点出错。")]),_._v(" "),l("p",[_._v("故障影响也需要尽量准备描述。")])]),_._v(" "),l("li",[l("p",[_._v("严重程度")]),_._v(" "),l("p",[_._v("严重程度是指站在业务的角度来评估故障的影响程度，一般分为“致命/高/中/低/无”五个档次。严重程度可以按照这个公式进行评估：严重程度=功能点重要程度"),l("em",[_._v("故障影响范围")]),_._v("功能点受损程度。")]),_._v(" "),l("p",[_._v("对于某个故障的影响程度到底属于哪个档次，有时会出现一些争议，从是并不建议在这里花费太多的时间。")])]),_._v(" "),l("li",[l("p",[_._v("故障原因")]),_._v(" "),l("p",[_._v("故障模式只描述了故障的现象，并没有单独列出故障原因。主要原因在于无论什么故障原因，只要故障模式一样，对于功能点的影响就是一样。把故障原因单独列出的原因如下：")]),_._v(" "),l("ul",[l("li",[_._v("不同的故障原因发生的概率不一样")]),_._v(" "),l("li",[_._v("不同的故障原因检测手段不一样")]),_._v(" "),l("li",[_._v("不同的故障原因的处理措施不一样")])])]),_._v(" "),l("li",[l("p",[_._v("故障概率")]),_._v(" "),l("p",[_._v("这里的概率是指某个具体故障原因发生的概率。具体评估时需要关注重点关注下面几个方面：")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("硬件")]),_._v(" "),l("p",[_._v("硬件随着使用时间推移，发生故障的概率会越来越高。")])]),_._v(" "),l("li",[l("p",[_._v("开源系统")]),_._v(" "),l("p",[_._v("成熟的开源系统的Bug率会低，刚发布的开源系统的Bug率会高。有使用经验的开源系统的Bug率会低，刚开始使用的开源系统的Bug率会高。")])]),_._v(" "),l("li",[l("p",[_._v("自研系统")]),_._v(" "),l("p",[_._v("和开源系统类似，成熟的自研系统故障率低，刚开发的自研系统故障率高。")])])])]),_._v(" "),l("li",[l("p",[_._v("风险程度")]),_._v(" "),l("p",[_._v("风险程度是综合严重程度和故障概率来一起判断某个故障的最终等级。风险程度=严重程度*故障概率。因为可能出现某个故障影响非常严重，但是其发生的概率很低，最终来看其风险程度也很低。同样的故障影响，不同的故障原因有不同的故障概率，最终得到的风险程度也不一样。")])]),_._v(" "),l("li",[l("p",[_._v("已有措施")]),_._v(" "),l("p",[_._v("针对已有的故障原因，系统现在是否提供了某些措施来应对。")]),_._v(" "),l("ul",[l("li",[_._v("检测告检")]),_._v(" "),l("li",[_._v("容错")]),_._v(" "),l("li",[_._v("自恢复")])])]),_._v(" "),l("li",[l("p",[_._v("规避措施")]),_._v(" "),l("p",[_._v("规避措施是为了降低故障发生概率而做的一些事情，可以是技术手段，也可以管理手段。")])]),_._v(" "),l("li",[l("p",[_._v("解决措施")]),_._v(" "),l("p",[_._v("解决措施是指为了能够解决问题而做的一些事情，一般是技术手段。如：")]),_._v(" "),l("ul",[l("li",[_._v("为了解决密码暴力破解，增加密码重试次数限制。")]),_._v(" "),l("li",[_._v("为了解决拖库导致数据泄露，将数据库中的敏感数据加密保存。")]),_._v(" "),l("li",[_._v("为了解决非法访问，增加白名单控制。")])])]),_._v(" "),l("li",[l("p",[_._v("后续规划")]),_._v(" "),l("p",[_._v("综合前面的分析，就可以看出哪些故障我们还缺乏应对措施，哪些已有措施还不够，针对这些不足的地方，结合风险程度，给出后续的改进规划。这些规划可以是技术手段，也可以是管理手段。可以是规避措施，也可以是解决措施。同时需要考虑资源的投入情况，优先将风险程度最高的系统隐患解决。")])])]),_._v(" "),l("Valine")],1)},[],!1,null,null,null);v.default=a.exports}}]);