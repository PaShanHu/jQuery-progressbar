require.config({
	baseUrl:'js/lib',
	paths:{
		'jquery':'jquery.min',
		'easing':'jquery.easing.min',
		'progressbar':'jquery.mProgressbar'
	},
	shim:{
		'easing':['jquery'],
		'progressbar':['jquery']
	}
}); 
require(['jquery','easing','progressbar'],function($){
	$(function(){
		var App={};
		App.$backToTop=$('.back-to-top');
		App.$toBottom=$('.to-bottom');
		$window=$(window);
		function toggleSideMenu(){
			if($window.scrollTop()>200){
				App.$backToTop.css('opacity',1);
			}else{
				App.$backToTop.css('opacity',0);
			}

			if($window.scrollTop()>$(document).height()-$window.height()-200){
				App.$toBottom.css('opacity',0);
			}else{
				App.$toBottom.css('opacity',1);
			}
		};
		toggleSideMenu();
		$window.scroll(function(){
			toggleSideMenu();
		});
		$('body').on('click','.back-to-top',function(){
			$('html,body').animate({
				scrollTop:0
			},600,'easeInOutSine');
		});
		$('body').on('click','.to-bottom',function(){
			$('html,body').animate({
				scrollTop:$(document).height()-$window.height()
			},1000,'linear');
		});

		/*-----date picker------*/
		$('#demo1').mProgressbar();
		$('#demo2').mProgressbar({
			step:4,
			activateStep:2,
			stepType:'center',
			textPosition:'center-bottom',
			text:['第一步','<span style="color:#cc4b4b;font-weight:bold;">第二步</span>','第三步','<b>第四步</b>'],
			textType:'html'
		});
		$('.icon-home').click(function(){
			window.location='http://pashanhu.github.io/';
		})
	});
});