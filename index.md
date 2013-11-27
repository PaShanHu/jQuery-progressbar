---
layout: default
title: jQuery插件-progressbar
tags: [progressbar, jquery, plugin]
postDate: 2013-11-27
extraCss: [css/progressbar.css]
extraJs: [js/lib/jquery.mProgressbar.js]
---

####jQuery插件-progressbar

学习[jQuery插件编程]()的第一个作品，主要是用于表现事件步骤之类的，与传统的进度条稍有不同。   
因为刚刚学，可能有点粗陋。 ;-)

####Plugin Info（插件信息）

	name:jQuery.mProgressbar.js,
	author:Jerry Y,
	version:0.0.1,
	date:2013-11-26,
	description:progressbar,step,jquery

####Example（实例）

默认：`$('#demo1').mProgressbar();`

<div id='demo1'>
</div>

参数设置：

	$('#demo2').mProgressbar({
		step:4,
		activateStep:2,
		stepType:'center',//  ====0===center   0====only-right  ====0only-left
		textPosition:'center-bottom',//center-bottom
		text:['第一步','<span style="color:#cc4b4b;font-weight:bold;">第二步</span>','第三步','<b>第四步</b>'],
		textType:'html',
		setNum:true
	});

<div id='demo2'>
</div>

####Get Started（初步使用）

1.  引入css：

	`<head></head>`标签中加入：`<link rel="stylesheet" type="text/css" href="/css/progressbar.css">`

2.  引入jquery和插件：

		<script type="text/javascript" src='/js/jquery.min.js'></script>
		<script type="text/javascript" src='/js/jquery.mProgressbar.js'></script>

3.  使用插件：`$el.mProgressbar();`

#####设置参数

因为插件很简单，所以直接在代码中说明：

	Progressbar.defaults={
		theme:'green',//主题，目前尚未实现；
		animation:true,//是否动画
		duration:1200,//动画时长
		step:4,//共几步
		activateStep:1,//当前步
		stepType:'only-right',//  ====0===center   0====only-right  ====0only-left
		textPosition:'center-top',//center-bottom  在进度条上面或下面
		text:['First','Second','Third','Fourth'], //每步的文字说明
		textType:'text',//html
		setNum:false,//是否在node中显示数字，未实现
		nodeType:'circle'//rect,round-corner
	};

#####下一版本

将未实现的选项实现，其次改进动画效果，另外，添加点击每一项的事件等。

如果有问题或建议，请发邮件我。谢谢。
<pashanhu6@hotmail.com>