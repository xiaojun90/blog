(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{187:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7-安装-rabbit-mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7-安装-rabbit-mq","aria-hidden":"true"}},[s._v("#")]),s._v(" Centos7 安装 Rabbit mq")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("本文介绍如何在centos7 安装rabbit mq。 rabbit mq的版本为最新版本(3.7.14)")]),s._v(" "),t("h2",{attrs:{id:"安装erlang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装erlang","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装Erlang")]),s._v(" "),t("p",[s._v("rabbit mq依赖于erlang，所以需要先安装erlang，并且rabbit mq不同版本对erlang的版本要求也不一样。")]),s._v(" "),t("p",[s._v("这里使用rabbit mq提供的erlang的包进行安装erlang")]),s._v(" "),t("ul",[t("li",[s._v("添加镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/yum.repos.d/rabbitmq_erlang.repo\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rabbitmq_erlang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rabbitmq_erlang\nbaseurl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://packagecloud.io/rabbitmq/erlang/el/7/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\nrepo_gpgcheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\ngpgcheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nenabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\ngpgkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://packagecloud.io/rabbitmq/erlang/gpgkey\nsslverify"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\nsslcacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/pki/tls/certs/ca-bundle.crt\nmetadata_expire"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("300\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rabbitmq_erlang-source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rabbitmq_erlang-source\nbaseurl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://packagecloud.io/rabbitmq/erlang/el/7/SRPMS\nrepo_gpgcheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\ngpgcheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nenabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\ngpgkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://packagecloud.io/rabbitmq/erlang/gpgkey\nsslverify"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\nsslcacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/pki/tls/certs/ca-bundle.crt\nmetadata_expire"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("300\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("ul",[t("li",[s._v("安装")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" erlang\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("验证是否安装成功")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xiaoj@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ erl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装rabbit-mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装rabbit-mq","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装rabbit mq")]),s._v(" "),t("ul",[t("li",[s._v("下载rpm")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.7.14/rabbitmq-server-3.7.14-1.el7.noarch.rpm\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("导入密钥")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("安装")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rabbitmq-server-3.7.14-1.el7.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("ul",[t("li",[s._v("设置守护进程，系统启动时执行")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" rabbitmq-server on\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("启动")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo /sbin/service rabbitmq-server start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("停止")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo /sbin/service rabbitmq-server stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装管理界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装管理界面","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装管理界面")]),s._v(" "),t("ul",[t("li",[s._v("启用rabbitmq_management")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用rabbitmq_management")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" rabbitmq_management\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启rabbit mq")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /sbin/service rabbitmq-server restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看http服务开启，端口15672")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rabbitmqctl status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" listeners\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"创建用户及授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户及授权","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建用户及授权")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已经存在的用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rabbitmqctl list_users\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rabbitmqctl add_user admin admin\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 授权")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rabbitmqctl set_user_tags admin administrator\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);