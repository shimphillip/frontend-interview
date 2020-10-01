// const accordion = document.querySelector('.accordion')

// const clickHandler = (e) => {
//   const accordionTitle = e.target
//   const isAccordionTitle = accordionTitle.classList.contains('accordion-title')

//   if (!isAccordionTitle) {
//     return
//   }

//   accordionTitle.classList.toggle('is-open')
//   const accordionContent = accordionTitle.nextElementSibling

//   if (accordionContent.style.maxHeight) {
//     accordionContent.style.maxHeight = null
//   } else {
//     accordionContent.style.maxHeight = accordionContent.scrollHeight
//   }
// }

// accordion.addEventListener('click', clickHandler)

const accordion = document.querySelector('.accordion')

accordion.addEventListener('click', (event) => {
  const element = event.target

  if (element.classList[0] === 'accordion-title') {
    element.classList.toggle('is-open')
    const content = element.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  }
})

// then toggle aria hidden and expanded
