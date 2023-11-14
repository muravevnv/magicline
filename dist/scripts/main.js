

function openModal() {
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