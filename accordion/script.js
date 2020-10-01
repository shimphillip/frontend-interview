const accordion = document.querySelector('.accordion')

const clickHandler = (e) => {
  const accordionTitle = e.target
  const isAccordionTitle = accordionTitle.classList.contains('accordion-title')

  if (!isAccordionTitle) {
    return
  }

  accordionTitle.classList.toggle('is-open')
  const accordionContent = accordionTitle.nextElementSibling

  if (accordionContent.style.maxHeight) {
    accordionContent.style.maxHeight = null
  } else {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
  }
}

accordion.addEventListener('click', clickHandler)
