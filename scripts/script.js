
jQuery(document).ready(function($) {
    $('.sliderHomeContainer').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1
    });

    $('.sliderHighlightContainer').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    jQuery('.accordion-trigger').bind('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(jQuery(window).width() <= 768) {
            jQuery(this).parent().find('.green-block-txt').slideToggle('fast');
            jQuery(this).parent().toggleClass('is-expanded');
        }
    });

    jQuery(window).on('resize', function(event) {
        if(jQuery(window).width() >= 768) {
            jQuery(this).parent().removeClass('is-expanded');
        }
    });

    $('body').addClass('loaded');
    $(window).on("resize", function() {
        var h = $(window).outerHeight() - $('header').outerHeight() - $('footer').outerHeight() - 80;
        $('#content').css('min-height', h);
    });
    $(window).resize();
    /**
     * Click on TR for some pages
     */
     $(".clic tr").click(function(){
        if ($(this).attr("data-href")) {
            document.location.href = $(this).attr("data-href");
        }
    });

    var cnilCookieName = "cookieCNIL";
    if(null == cookieManagerLocal.readCookie(cnilCookieName)) {
        $('#cookies-infos').show();
        cookieManagerLocal.createCookie(cnilCookieName, 'ok', 365);
    }

    $('#cookies-infos p> span').click(function () {
        $('#cookies-infos').slideUp();
    });

    // limitation de l'affichage de la popin d'avertissement concernant les cookies à une fois par semaine (sauf si fermée manuellement : 365 jours)
    var cookies = document.cookie.split('; ');
    var setCookie = true;
    for (var i in cookies) {
        var cookieName = cookies[i].substr(0, cookies[i].indexOf('='));
        if (cookieName == 'cookie_disclaimer') {
            setCookie = false;
            break;
        }
    }
    if (setCookie) {
        var cookieExpires = new Date(new Date().getTime() + (7 * 86400 * 1000)).toUTCString();
        document.cookie = "cookie_disclaimer=1; expires="+cookieExpires+"; path=/";
    }
    // /!\ Attention ! pas de .off('click'), on surcharge le comportement de base sans l'écraser
    $('#cookies-infos p> span').on('click', function () {
        // au clic, expiration du cookie à 365 jours
        var cookieExpires = new Date(new Date().getTime() + (365 * 86400 * 1000)).toUTCString();
        document.cookie = "cookie_disclaimer=1; expires="+cookieExpires+"; path=/";
    });
    var ico = $('<i class="dripicon-chevron-down"></i>');

    $('#nav-mobile li:has(ul) > a').append(ico);

    $('#nav-mobile li:has(ul) > a').on('click',function(){
        if (!$(this).parent('li').hasClass('open')) {
            $('#nav-mobile li:has(ul)').removeClass('open');
            $(this).parent('li').addClass('open');
        } else {
            $(this).parent('li').removeClass('open');
        }
    });

    $('#btn-navigation').on('click',function(e){
        $('#nav-mobile').toggleClass('active');
        $('div#overbeau').css({'background': 'rgba(0, 0, 0, 0.6)'}).show();
        return false;
    });

    $('div#overbeau').on('click',function(){
        $('#nav-mobile').removeClass('active');
        $('div#overbeau').css({'background': 'transparent'}).hide();
    });

    $('.close-nav').on('click',function(){
        $('#nav-mobile').removeClass('active');
        $('div#overbeau').css({'background': 'transparent'}).hide();
    });
    $('.panelItem:not(.panelLogin) ').parents('ul').find('> li').removeClass('is-expanded').find('.panel-body').slideUp('fast');

    $('.panel *:not(.panelLogin) .panel-title').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).parent('li').hasClass('is-expanded')) {
            $(this).parents('ul').find('> li').removeClass('is-expanded').find('.panel-body').slideUp('fast');
            $(this).parent('li').addClass('is-expanded').find('.panel-body').slideDown('fast');
        } else {
            $(this).parent('li').removeClass('is-expanded').find('.panel-body').slideUp('fast');
        }



        // $(window).on('resize', function(event) {
        //     if ($(window).width() >= forestHill.consts.getValue('bpDesktop')) {
        //         $('.panel:not(.legal-mention-panel)').find('.panel-body').show();
        //     }
        // });

        $(window).resize();

    });
});