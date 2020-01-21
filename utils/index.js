export const scrollIt = (element, rootElement = null) => {
  const root = rootElement || document.documentElement
  const scrollElm = rootElement || window
  const rect = element.getBoundingClientRect()
  const scrollTop = window.pageYOffset || root.scrollTop

  scrollElm.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: rect.top + scrollTop
  })
}
