
$(function () {

		// ArcticModal
  	$('.popup').click(function(e) {
  		e.preventDefault();
  		$('#popup-form').arcticmodal();
  	});

  	$('.popup__privacy').click(function(e) {
  		e.preventDefault();
  		$('#privacy').arcticmodal();
  	});

  	// Hamburger
	  $('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-mobile').toggleClass('menu-mobile_active');
	});

	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');


	// Плавный скроллинг
    $('.go_to').on( 'click', function(){ 
	    var el = $(this);
	    var dest = el.attr('href'); // получаем направление
	    if(dest !== undefined && dest !== '') { // проверяем существование
	        $('html').animate({ 
	            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
	        }, 500 // скорость прокрутки
	        );
	    }
	    return false;
	});

	// Плавающая шапка
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700){  
            $('.header-fixed').addClass("sticky");
        }
        else{
            $('.header-fixed').removeClass("sticky");
        }
    });

    // To top button

      $(window).scroll(function() {
      if($(this).scrollTop() > 500) {
      $('#toTop').fadeIn();
      } else {
      $('#toTop').fadeOut();
      }
      });
      $('#toTop').click(function() {
      $('body,html').animate({scrollTop:0},800);
      });

    // Slick

    $('.portfolio__slider').slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  centerMode: true,
  centerPadding: '0',
  speed: 1000,
  focusOnSelect: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        // centerMode: false,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

	$('.portfolio__next').click(function() {
	    $('.portfolio__slider').slick("slickNext");
	  })
	  $('.portfolio__prev').click(function() {
	    $('.portfolio__slider').slick("slickPrev");
	  })

		var slider = $('.portfolio__slider');
		$('.portfolio__wrap .sl-count__total').text( slider.slick("getSlick").slideCount);
		$(".portfolio__slider").on('afterChange', function(event, slick, currentSlide){
		 $(".portfolio__wrap .sl-count__num").text(currentSlide + 1);
		});

		$('.articles__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  variableWidth: false,
	  autoplay: false,
	  autoplaySpeed: 3000,
	  responsive:[
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        variableWidth: false
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        variableWidth: true
	      }
	    }
	  ]
	});

	$('.articles__next').click(function() {
	    $('.articles__slider').slick("slickNext");
	  })
	  $('.articles__prev').click(function() {
	    $('.articles__slider').slick("slickPrev");
	  })
	var sliderTwo = $('.articles__slider');
	$('.articles__wrap .sl-count__total').text( sliderTwo.slick("getSlick").slideCount);
	$(".articles__slider").on('afterChange', function(event, slick, currentSlide){
	 $(".articles__wrap .sl-count__num").text(currentSlide + 1);
	});


	$('.reviews__slider').slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  centerMode: true,
  centerPadding: '0',
  speed: 1000,
  focusOnSelect: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        // centerMode: false,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

	$('.reviews__next').click(function() {
	    $('.reviews__slider').slick("slickNext");
	  })
	  $('.reviews__prev').click(function() {
	    $('.reviews__slider').slick("slickPrev");
	  })

		var sliderThree = $('.reviews__slider');
		$('.reviews__wrap .sl-count__total').text( sliderThree.slick("getSlick").slideCount);
		$(".reviews__slider").on('afterChange', function(event, slick, currentSlide){
		 $(".reviews__wrap .sl-count__num").text(currentSlide + 1);
		});


		var show = true;
	    var countbox = ".number";
	    $(window).on("scroll load resize", function () {
	        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
	        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
	        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
	        var w_height = $(window).height(); // Высота окна браузера
	        var d_height = $(document).height(); // Высота всего документа
	        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
	        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
	            $('.number').css('opacity', '1');
	            $('.number').spincrement({
	                thousandSeparator: "",
	                duration: 3000
	            });
	             
	            show = false;
	        }
	    });

	    //Magnific popup

	    $('.popup-video').magnificPopup({
		    disableOn: 700,
	        type: 'iframe',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: false,

	        fixedContentPos: false
		  });

	     $('.review-popup').magnificPopup({
		    disableOn: 700,
	        type: 'iframe',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: false,

	        fixedContentPos: false
		  });

});