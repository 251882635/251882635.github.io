
$('._img').on('click',function(){
	var a = $(this).index();
	console.log(a);

	$('.wrap').show();
	var mySwiper = new Swiper('.swiper-container',{
		effect : 'fade',
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		// 初始化到a
		initialSlide :a,
		 autoHeight: true, //高度随内容变化
	})

})
$('.close').on('click',function(){
	$('.wrap').hide();
})
// 获取图片src
// $('.close').on('click',function(){
// 	var img_src = $('#_img')[0].src;
// 	var img_src2 = $('#_img').attr('src');
// 	console.log(img_src);
// 	console.log(img_src2);
// })