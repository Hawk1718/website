// Detect click

$('#hero__form-button').on('click', function(e) {
  e.preventDefault()

  $('#hero__form-input').addClass('active')
})
