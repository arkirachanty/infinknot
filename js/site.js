$(document).ready(function() {

  /*function init() {
    $(window).on('scroll', onScroll)
    $(window).on('resize', resize)
  }*/

  // Variables
  var $codeSnippets = $('.code-example-body'),
    $nav = $('.navbar'),
    $body = $('body'),
    $window = $(window),
    $popoverLink = $('[data-popover]'),
    navOffsetTop = $nav.offset().top,
    $document = $(document),
    entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    }

  /*$("#what_button").click(function() {
    $("#demo").html("Hello, World!");
  });*/


  /*CLICKING BUTTONS*/
  /*$("#what_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#what_des").offset().top
    }, 2000);
  });

  $("#how_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#how_des").offset().top
    }, 2000);
  });

  $("#who_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#who_des").offset().top
    }, 2000);
  });

  $("#contact_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_des").offset().top
    }, 2000);
  });


  //STICKY BUTTONS
  /*function sticky_relocate() {
  //function onScroll() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top)
      //$('#what_button').addClass('sticky');
      $('#how_button').addClass('sticky');
      //$('#who_button').addClass('sticky');
      //$('#contact_button').addClass('sticky');
    else
      //$('#what_button').removeClass('sticky');
      $('#how_button').removeClass('sticky');
      //$('#who_button').removeClass('sticky');
      //$('#contact_button').removeClass('sticky');
  }

  /*function resize() {
    $('#what_button').removeClass('sticky')
    var div_top = $('#sticky-anchor').offset().top;
    onScroll()
  }*/


  /*$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  }); */

  //$("#demo").html("Hello, World!");

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#what_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#what_des").offset().top - 65
    }, 2000);
  });
  $("#how_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#how_des").offset().top - 65
    }, 2000);
  });
  $("#who_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#who_des").offset().top - 65
    }, 2000);
  });
  $("#contact_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_des").offset().top - 65
    }, 2000);
  });

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});