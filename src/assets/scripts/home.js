// Event: Show input of hero

$('#hero__form-button').on('click', function(e) {
  if ($(this).closest('form').hasClass('active')) {
    return
  } else {
    e.preventDefault()

    $(this).closest('form').addClass('active')
    $('#hero__form-label').addClass('active')
    $('#hero__form-text').addClass('active')
    $(this).prev('#hero__form-input').show().addClass('active').focus()
  }
})

// Function: Handle window resize
function onWindowLoadResize() {
  const windowWidth = $(window).width();

  if (windowWidth <= 720) {
    $('.hero form').addClass('active')
  } else {
    $('.hero form').removeClass('active')
  }
}

// Function: init
function init() {
  onWindowLoadResize()

  window.addEventListener('load', onWindowLoadResize)
  window.addEventListener('resize', onWindowLoadResize)
}

init()
