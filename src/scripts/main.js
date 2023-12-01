

function openModal(e) {
  e.preventDefault();
  let modalId = $(this).data('modal');
  $(`.modal[data-modal=${modalId}]`).addClass('is-open');
  console.log(modalId)
}

function closeModal() {
  $('.modal').removeClass('is-open')
}

$('.js-open-modal').on('click', openModal)

$('.modal-overlay').on('click', closeModal);
$('.modal-close').on('click', closeModal);
$('.js-modal-close').on('click', closeModal);


$('[data-role="tab"]').each(function(){
  let tabs = $(this).find('.tabs-item');
  let tabsContent = $(this).find('.tabs-content');

  tabs.on('click', function(){
    let dataTab = $(this).data('tab');

    tabs.removeClass('is-active');
    $(this).addClass('is-active');
    
    tabsContent.removeClass('is-open');
    $(`.tabs-content[data-tab="${dataTab}"]`).addClass('is-open');
  })
})

$('.acc-item').on('click', function(){
  $parent = $(this).closest('.acc');
  $body = $parent.find('.acc-body');

  $parent.toggleClass('is-open');
  $body.slideToggle();
})

let selectList = document.querySelectorAll('.js-select');

selectList.forEach(function(item) {
  let choices = new Choices(item);
})

$('.form-control').on('input', function(){
  if ($(this).val() != '' ) {
    $(this).addClass('is-filled')
  } else {
    $(this).removeClass('is-filled')
  }
})

$('.header-burger').on('click', function(){
  $(this).toggleClass('is-active');
  $('.header').toggleClass('is-active')
  $('.nav').toggleClass('is-open');
})

if (window.matchMedia("(min-width: 1024px)").matches) {
  $(window).on("mousemove", function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax-layer").each(function (i, el) {
      var offset = parseInt($(el).data("speed"));
      var translate =
        "translate3d(" +
        Math.round(offsetX * offset) +
        "px," +
        Math.round(offsetY * offset) +
        "px, 0px)";

      $(el).css({
        "-webkit-transform": translate,
        transform: translate,
        "moz-transform": translate,
      });
    });
  });
}


$(".js-date-mask").each(function(){
  let inputDate = $(this)[0];

  IMask(
    inputDate,
    {
      mask: '00.00.0000'
    }
  )
})

$(".js-price-input").each(function(){
  let inputPrice = $(this)[0];

  IMask(
    inputPrice,
    {
      mask: /^[0-9,.]+\d{0,9}$/
    }
  )
})

function cislo(){
  if (event.keyCode < 48 || event.keyCode > 57)
  event.returnValue= false;
}