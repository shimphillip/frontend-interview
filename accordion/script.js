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
    console.log('here')
    accordionContent.style.maxHeight = null
  } else {
    console.log('there')

    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
  }
}

accordion.addEventListener('click', clickHandler)
