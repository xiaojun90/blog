(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{209:function(_,v,a){"use strict";a.r(v);var t=a(0),r=Object(t.a)({},function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"_30-如何应对接口级的故障？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_30-如何应对接口级的故障？","aria-hidden":"true"}},[_._v("#")]),_._v(" 30-如何应对接口级的故障？")]),_._v(" "),a("p",[_._v("异地多活主要是解决系统级别的故障，例如：机器宕机、机房故障、网络故障等。虽然这些故障的影响很大，但是发生概率低。还有一类故障是业务运行中经常遇到的：接口级故障。")]),_._v(" "),a("p",[_._v("接口级故障的表现是系统没有宕机、网络也没有中断，但业务却出问题了。例如：业务访问慢、大量访问超时、大量访问出现异常。这类问题的原因主要在于系统压力过大、负载过高，导致无法快速处理业务请求，由此引发更多的后续问题。")]),_._v(" "),a("p",[_._v("导致接口级故障的原因：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("内部原因")]),_._v(" "),a("p",[_._v("程序bug死循环，某个接口导致数据库慢查询，程序逻辑不完善导致耗尽内存。")])]),_._v(" "),a("li",[a("p",[_._v("外部原因")]),_._v(" "),a("p",[_._v("黑客攻击、促销或抢购引入超出平常几倍或十几倍的用户，第三方系统大量请求，第三方系统响应缓慢。")])])]),_._v(" "),a("p",[_._v("解决接口级故障的核心思想："),a("strong",[_._v("优先保证核心业务")]),_._v("和"),a("strong",[_._v("优先保证绝大部分用户")]),_._v("。")]),_._v(" "),a("h2",{attrs:{id:"降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降级","aria-hidden":"true"}},[_._v("#")]),_._v(" 降级")]),_._v(" "),a("p",[_._v("降级是指系统将某些业务或接口的功能降低，可以只提供部分功能，也可以停掉所有功能。")]),_._v(" "),a("p",[_._v("降级的核心思想是优先保证核心业务。")]),_._v(" "),a("p",[_._v("常见的实现降级的方法：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("系统后门降级")]),_._v(" "),a("p",[_._v("系统后门降级就是系统预留后门用于降级。例如：提供一个降级URL，当访问这个URL时，就相当于执行降级指令,具体的降级指令通过URL的参数传入即可。这种方案有一定的风险，一般会在URL中加入密码这类措施。")]),_._v(" "),a("p",[_._v("系统后门降级的实现简单，缺点是在服务器很多的情况下，需要一台一台服务器去操作，比较浪费时间，效率比较低。")])]),_._v(" "),a("li",[a("p",[_._v("独立的降级系统")]),_._v(" "),a("p",[_._v("为了解决系统后门降级的缺点，将降级操作独立到一个单独的系统，可以实现复杂的权限管理、批量操作等功能。")])])]),_._v(" "),a("h2",{attrs:{id:"熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断","aria-hidden":"true"}},[_._v("#")]),_._v(" 熔断")]),_._v(" "),a("p",[_._v("降级主要用于解决系统自身的故障，而熔断主要用于应对依赖的外部系统故障的情况。")]),_._v(" "),a("p",[_._v("熔断机制实现的关键是需要一个统一的API调用层，由API调用层来进行采样或者统计，如果接口调用散落在代码各处就没办法进行统一处理了。")]),_._v(" "),a("p",[_._v('熔断机制实现的另一个关键是阈值的设计。例如：1分钟30%用户的访问时长超过1s。这个策略中的"1分钟"、"30%"、"1s"都会对最终熔断产生影响。实践中一般是先根据分析确定阈值，然后上线观察结果，然后不断调优。')]),_._v(" "),a("h2",{attrs:{id:"限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限流","aria-hidden":"true"}},[_._v("#")]),_._v(" 限流")]),_._v(" "),a("p",[_._v("降级是从系统功能优先级的角度考虑如何应对故障，而限流是从用户访问压力的角度来考虑如何应对故障。限流只允许系统能够承受的访问量进来，超出的访问量将会被丢弃。")]),_._v(" "),a("p",[_._v("限流一般是系统内部实现，常见的限流可以分为二类：基于请求限流和基于资源限流。")]),_._v(" "),a("h3",{attrs:{id:"基于请求限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于请求限流","aria-hidden":"true"}},[_._v("#")]),_._v(" 基于请求限流")]),_._v(" "),a("p",[_._v("基于请求限流是指从外部访问的请求角度考虑：常见的方式有：限制总量、限制时间量。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("限制总量")]),_._v(" "),a("p",[_._v("限制总量的方式是限制某个指标的累积上限，常见的是限制当前用户的总量，例如限制用户总数是100万，超过100万后用户无法进入。")])]),_._v(" "),a("li",[a("p",[_._v("限制时间量")]),_._v(" "),a("p",[_._v("限制时间量是批限制一段时间内某个指标的上限。例如：1分钟只允许10000个用户访问。")])])]),_._v(" "),a("p",[_._v("无论是限制总量还是限制时间量的特点是实现简单，但是其复杂点是如何找到合适的阈值。")]),_._v(" "),a("p",[_._v("即使找到合适的阈值，基于请求限流还面临硬件相关的问题。例如1台32核的机器和1台64核的机器的处理性能是不一样的，并且并不能简单的用数学公式乘以2就可行的。")]),_._v(" "),a("p",[_._v("为了找到合适的阈值，一般采用性能压测来找到阈值，但是性能压测也存在覆盖场景不足的情况。还有一种方法就是不断优化，先确定一个阈值，然后上线后观察运行，不断调整。")]),_._v(" "),a("p",[_._v("根据阈值来限制访问量的方式一般用于比较简单的系统，例如：负载均衡系统、网关系统、抢购系统。")]),_._v(" "),a("h3",{attrs:{id:"基于资源限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于资源限流","aria-hidden":"true"}},[_._v("#")]),_._v(" 基于资源限流")]),_._v(" "),a("p",[_._v("基于请求限流是从系统外部考虑的，基于资源限流是从系统内部考虑的。即：找到系统内部影响性能的关键资源，对其使用上限进行限制。常见的内部资源有：连接数、文件句柄、线程数、请求队列等。")]),_._v(" "),a("p",[_._v("基于资源的限流比基于请求的限流，更能反映当前系统的压力。但是基于资源的限流也存在二个设计复杂点：如何确定关键资源、如何确定关键资源阈值。通常情况下这也是一个不断调优的过程。")]),_._v(" "),a("h2",{attrs:{id:"排队"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排队","aria-hidden":"true"}},[_._v("#")]),_._v(" 排队")]),_._v(" "),a("p",[_._v("排队是限流的一个变种。限流是直接拒绝用户，而排队是让用户等待一段时间。排队虽然没有直接拒绝用户，但是让用户等待很长一段时间进入系统，体验上来看并不比限流更好。")]),_._v(" "),a("p",[_._v("由于排序需要缓存大量的业务请求，单个系统内部无法缓存这么多数据，一般情况下，排队需要使用独立的系统，例如使用kafka缓存用户请求。")]),_._v(" "),a("Valine")],1)},[],!1,null,null,null);v.default=r.exports}}]);