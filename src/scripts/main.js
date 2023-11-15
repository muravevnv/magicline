

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