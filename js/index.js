// 图片预加载
(function(){
	var limg = ["image/bg1.png","image/bg2.png","image/bg3_zjxc.png","image/bg3.png","image/bg4.png","image/bg5.png"];
	var ind = 0;
	for(var j = 0 ; j<limg.length; j++){
		var img = new Image();
		img.src = limg[j];
		img.onload = function(){
			ind++;
			if(ind==limg.length){
				$("#loading").hide();
				$(".cover").show();
			}
		}
	}
})()

// 轮播
var mySwiper1 = new Swiper('#swiper-container1', {
	pagination : '.swiper-pagination',
	paginationClickable :true,
})

// 显示隐藏二维码
// append插入的节点无不继承事件，通过事件委托处理。
$(document).on("mouseover",".QR_C",function(){
	$(".QR_Code").show();
})
$(document).on("mouseleave",".QR_C",function(){
	$(".QR_Code").hide();
})
// 侧边导航栏，js//519行,点击以及滚轮滚动监听 active。 鼠标移入的active，新增一个样式跟active的类activeHover。
$(document).on("mouseover",".nav-bar",function(){
	$(this).addClass('activeHover');
})
$(document).on("mouseleave",".nav-bar",function(){
	$(this).removeClass('activeHover');	
})

// 第三屏鼠标经过缓慢改变背景,年份颜色跟线条背景利用transition实现color,background对应过渡效果
$(".review_img1").hover(function () {
    $(".bg_2017").stop().animate({"opacity":1},500);
    $(".year1").css({"color":"#1084e6","transition": "color .5s"});
    $(".line1").css({"background":"#1084e6","transition": "background .5s"});
},function () {		
    $(".bg_2017").animate({"opacity":0},500);
    $(".year1").css({"color":"#fff","transition": "color .5s"});
    $(".line1").css({"background":"#fff","transition": "background .5s"});    
})

$(".review_img2").hover(function () {
    $(".bg_2016").stop().animate({"opacity":1},500);
    $(".year2").css({"color":"#1084e6","transition": "color .5s"});
    $(".line2").css({"background":"#1084e6","transition": "background .5s"});
},function () {		
    $(".bg_2016").animate({"opacity":0},500);
    $(".year2").css({"color":"#fff","transition": "color .5s"});
    $(".line2").css({"background":"#fff","transition": "background .5s"});     
})

// 第四屏滑出部分
// 2017
$('.review_img1').on('click',function(){
	$("#fp-nav").hide();
	$('.sildeDiv').css('transform','translate3d(0,0,0)');
})

$('.close').on('click',function(){
	$("#fp-nav").show();
	$('.sildeDiv').css('transform','translate3d(100%,0,0)');
})

// 2016
$('.review_img2').on('click',function(){
	$("#fp-nav").hide();
	$('.sildeDiv2').css('transform','translate3d(0,0,0)');
})

$('.close2').on('click',function(){
	$("#fp-nav").show();
	$('.sildeDiv2').css('transform','translate3d(100%,0,0)');
})

// 往期回顾悬浮换图片。函数写在html
function changePic(o,pic){
	$(o).attr("src",pic);
}
// 每期会议板块内部图片交互动效;
$('.sildeDiv1').on('mouseover',function(){	
	$(this).find('.sildeDiv_img2').show();
	$(this).find('.sildeDiv_img1').hide();
})

$('.sildeDiv1').on('mouseleave',function(){	
	$(this).find('.sildeDiv_img1').show();
	$(this).find('.sildeDiv_img2').hide();
})

// 上传文件
$(".file").on('click',function(){
	$("._hidden").click();
})

// 滑入滑出窗口
$('.support').on('click',function(){
	// 蒙版显示
	$('.bg4_mask').show();
	$("#fp-nav").hide();
	$('.bg4_sildeDiv1').css('transform','translate3d(50%,0,0)');
})

$('.media_apply').on('click',function(){
	$('.bg4_mask').show();
	$("#fp-nav").hide();
	$('.bg4_sildeDiv2').css('transform','translate3d(50%,0,0)');
})

$('.speech_apply').on('click',function(){
	$('.bg4_mask').show();
	$("#fp-nav").hide();
	$('.bg4_sildeDiv3').css('transform','translate3d(50%,0,0)');
})

$('.volunteer_apply').on('click',function(){
	$('.bg4_mask').show();
	$("#fp-nav").hide();
	$('.bg4_sildeDiv4').css('transform','translate3d(50%,0,0)');
})

$('.media_close1').on('click',function(){
	$('.bg4_mask').hide();
	$("#fp-nav").show();
	$('.bg4_sildeDiv1').css('transform','translate3d(100%,0,0)');
})

$(".media_close2").on('click',function(){
	$('.bg4_mask').hide();
	$("#fp-nav").show();
	$('.bg4_sildeDiv2').css('transform','translate3d(100%,0,0)');
})

$(".media_close3").on('click',function(){
	$('.bg4_mask').hide();
	$("#fp-nav").show();
	$('.bg4_sildeDiv3').css('transform','translate3d(100%,0,0)');
})

$(".media_close4").on('click',function(){
	$('.bg4_mask').hide();
	$("#fp-nav").show();
	$('.bg4_sildeDiv4').css('transform','translate3d(100%,0,0)');
})

// 6.13蒙版关闭
$('.bg4_mask').on('click',function(){
	$("#fp-nav").show();
	$('.bg4_mask').hide();
	$('.bg4_sildeDiv1,.bg4_sildeDiv2,.bg4_sildeDiv3,.bg4_sildeDiv4').css('transform','translate3d(100%,0,0)');
})

// 直击现场
$(".div_hover").hover(function() {
	$(this).find(".img_hover").css("-webkit-transform","scale(1.1)");
	$(this).find('div').css("color","#5aebfc");
}, function() {
	$(this).find(".img_hover").css("-webkit-transform","scale(1)");
	$(this).find('div').css("color","#fff");
});

