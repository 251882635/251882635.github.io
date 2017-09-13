var mySwiper1 = new Swiper('#swiper-container1', {
	pagination : '.swiper-pagination',
	paginationClickable :true,
})

var mySwiper2 = new Swiper('#swiper-container2', {
	slidesPerView : 4,
	spaceBetween : 36,
	slidesPerGroup : 1,
	autoplayDisableOnInteraction : false,	
})
$('#btn1').click(function(){
	mySwiper2.slidePrev();
});
$('#btn2').click(function(){
	mySwiper2.slideNext();
});

// 下划线
$(".brilliant_focus li").hover(function() {
	$(this).find(".brilliant_focus_name,.brilliant_focus_content").css("text-decoration","underline");
}, function() {
	$(this).find(".brilliant_focus_name,.brilliant_focus_content").css("text-decoration","none");
});


// tab
$(".tab_title div").on('click',function(){
	var index = $(this).index();
	$(this).addClass('tabBtnActive').siblings().removeClass('tabBtnActive');
	$(".tab_content1").eq(index).show().siblings(".tab_content1").hide();
})
// 回到顶部
$('.returnTop').on('click',function(){
	$('body,html').animate({scrollTop: 0},400);
})


$(window).scroll(function(){
	var docTop = $(document).scrollTop();
	if(docTop>="600"){
		$('.returnTop').show();
	}
	else{
		$('.returnTop').hide();
	}

})
