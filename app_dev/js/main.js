$(document).ready(function() {

	$(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 25000,
			values: [ 0, 25000 ],
			slide: function( event, ui ) {
				$( ".range-slider__input-start" ).val( ui.values[ 0 ] );
				$( ".range-slider__input-end" ).val( ui.values[ 1 ] );
			}
		});
		$(".range-slider__input-start").val($("#slider-range").slider("values", 0));
		$(".range-slider__input-end").val($("#slider-range").slider("values", 1));

	});
	
	$('.nav-menu__link').on('click', function(){
		$('.nav-menu__link').removeClass('active-link');
		$(this).addClass('active-link');
	});

	$('.icon-tabl').on('click', function(){
		$('.catalog-item__articul').removeClass('hidden');
		$('.catalog-item__bigpic').removeClass('hidden');
		$('.catalog-item__smlpics').removeClass('hidden');
		$('.catalog-item').addClass('catalog-item_width-auto');
		$('.catalog-item').addClass('catalog-item_no-margin');
		$('.catalog-item__pics-wrap').addClass('catalog-item__pics-wrap_width182');
		$('.catalog-item__pics-wrap').addClass('left');
		$('.catalog-item__header-and-desct-wrap').addClass('left');
		$('.catalog-item__header-and-desct-wrap').addClass('catalog-item__header-and-desct-wrap_tab-style');
		$('.catalog-item__text-descr').removeClass('hidden');
		$('.catalog-item__descr-item-wrap').addClass('hidden');
		$('.catalog-item__header').addClass('catalog-item__header_tab-style');
		$('.catalog-item__rating').addClass('catalog-item__rating_tab-style');
		$('.catalog-item__price-and-buy-wrap').addClass('catalog-item__price-and-buy-wrap-tab-style');
		$('.catalog-item__price').addClass('catalog-item__price_tab-style');
		$('.good-presents').removeClass('left');
		$('.good-presents').addClass('right');
		$('.catalog-item__buy').addClass('catalog-item__buy_tab-style');
		$('.catalog-item__description').removeClass('hidden');
		$('.catalog-item__rating').removeClass('hidden');
		$('.catalog-item__articul').removeClass('catalog-item__articul_bar-style');
		$('.catalog-item__header').removeClass('catalog-item__header_bar-style');
		$('.catalog-item__price').removeClass('catalog-item__price_bar-style');
		$('.catalog-item__header-and-desct-wrap').removeClass('catalog-item__header-and-desct-wrap_bar-style');
		$('.catalog-item__price-and-buy-wrap').removeClass('catalog-item__price-and-buy-wrap_bar-style');
		$('.catalog-item__buy').removeClass('catalog-item__buy_bar-style');
		$('.good-presents').removeClass('good-presents-bar-style');
		$('.to-bucket').removeClass('to-bucket-bar-style');
		$('.catalog-item').removeClass('catalog-item_bar-style');
		$('.catalog-item__pics-wrap').removeClass('catalog-item__pics-wrap_bar-style');
	});

	$('.icon-bar').on('click', function(){
		$('.catalog-item__articul').addClass('hidden');
		$('.catalog-item__bigpic').removeClass('hidden');
		$('.catalog-item__smlpics').removeClass('hidden');
		$('.catalog-item').removeClass('catalog-item_width-auto');
		$('.catalog-item').removeClass('catalog-item_no-margin');
		$('.catalog-item__pics-wrap').removeClass('catalog-item__pics-wrap_width182');
		$('.catalog-item__pics-wrap').removeClass('left');
		$('.catalog-item__header-and-desct-wrap').removeClass('left');
		$('.catalog-item__header-and-desct-wrap').removeClass('catalog-item__header-and-desct-wrap_tab-style');
		$('.catalog-item__text-descr').addClass('hidden');
		$('.catalog-item__descr-item-wrap').removeClass('hidden');
		$('.catalog-item__header').removeClass('catalog-item__header_tab-style');
		$('.catalog-item__rating').removeClass('catalog-item__rating_tab-style');
		$('.catalog-item__price-and-buy-wrap').removeClass('catalog-item__price-and-buy-wrap-tab-style');
		$('.catalog-item__price').removeClass('catalog-item__price_tab-style');
		$('.good-presents').addClass('left');
		$('.good-presents').removeClass('right');
		$('.catalog-item__buy').removeClass('catalog-item__buy_tab-style');
		$('.catalog-item__description').removeClass('hidden');
		$('.catalog-item__rating').removeClass('hidden');
		$('.catalog-item__articul').removeClass('catalog-item__articul_bar-style');
		$('.catalog-item__header').removeClass('catalog-item__header_bar-style');
		$('.catalog-item__price').removeClass('catalog-item__price_bar-style');
		$('.catalog-item__header-and-desct-wrap').removeClass('catalog-item__header-and-desct-wrap_bar-style');
		$('.catalog-item__price-and-buy-wrap').removeClass('catalog-item__price-and-buy-wrap_bar-style');
		$('.catalog-item__buy').removeClass('catalog-item__buy_bar-style');
		$('.good-presents').removeClass('good-presents-bar-style');
		$('.to-bucket').removeClass('to-bucket-bar-style');
		$('.catalog-item').removeClass('catalog-item_bar-style');
		$('.catalog-item__pics-wrap').removeClass('catalog-item__pics-wrap_bar-style');
	});

	$('.icon-list').on('click', function(){
		$('.catalog-item__articul').removeClass('hidden');
		$('.catalog-item__bigpic').addClass('hidden');
		$('.catalog-item__smlpics').addClass('hidden');
		$('.catalog-item').addClass('catalog-item_width-auto');
		$('.catalog-item').addClass('catalog-item_no-margin');
		$('.catalog-item__pics-wrap').removeClass('catalog-item__pics-wrap_width182');
		$('.catalog-item__pics-wrap').removeClass('left');
		$('.catalog-item__description').addClass('hidden');
		$('.catalog-item__header-and-desct-wrap').removeClass('catalog-item__header-and-desct-wrap_tab-style');
		$('.catalog-item__header-and-desct-wrap').removeClass('left');
		$('.catalog-item__rating').addClass('hidden');
		$('.catalog-item__articul').addClass('catalog-item__articul_bar-style');
		$('.catalog-item__header').addClass('catalog-item__header_bar-style');
		$('.catalog-item__header').removeClass('catalog-item__header_tab-style');
		$('.catalog-item__price').addClass('catalog-item__price_bar-style');
		$('.catalog-item__price').removeClass('catalog-item__price_tab-style');
		$('.catalog-item__header-and-desct-wrap').addClass('catalog-item__header-and-desct-wrap_bar-style');
		$('.catalog-item__price-and-buy-wrap').addClass('catalog-item__price-and-buy-wrap_bar-style');
		$('.catalog-item__price-and-buy-wrap').removeClass('catalog-item__price-and-buy-wrap-tab-style');
		$('.catalog-item__buy').addClass('catalog-item__buy_bar-style');
		$('.catalog-item__buy').removeClass('catalog-item__buy_tab-style');
		$('.good-presents').addClass('good-presents-bar-style');
		$('.good-presents').removeClass('left');
		$('.good-presents').removeClass('right');
		$('.to-bucket').addClass('to-bucket-bar-style');
		$('.catalog-item').addClass('catalog-item_bar-style');
		$('.catalog-item__pics-wrap').addClass('catalog-item__pics-wrap_bar-style');

	});

	$('.catalog-item').on('mouseenter', function() {
		$(this).addClass('z-index');
	});
	$('.catalog-item').on('mouseleave', function() {
		$(this).removeClass('z-index');
	});
});