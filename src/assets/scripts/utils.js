// Event: Scroll to
$('.scrollto').on('click', function (e) {
  e.preventDefault()
  const offset = 0
  const target = this.hash

  $('html, body').stop().animate({
    'scrollTop': $(target).offset().top - offset
  }, 1000, 'swing', function () {
  })
})
