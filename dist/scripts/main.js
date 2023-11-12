

function openModal() {
  let modalId = $(this).data('modal');
  $(`.modal[data-modal=${modalId}]`).addClass('is-open');
  console.log(modalId)
}

function closeModal() {
  $('.modal').removeClass('is-open')
}

$('.js-open-modal').on('click', openModal)

$('.modal-overlay').on('click', closeModal)
$('.modal-close').on('click', closeModal)