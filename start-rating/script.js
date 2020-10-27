const starContainer = document.querySelector('.star-container')
const stars = document.querySelectorAll('.star')
const rating = document.querySelector('.rating')

starContainer.addEventListener('click', showStars)

function showStars(event) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove('star__checked')
  }

  const selectedStar = event.target
  const selectedIndex = [...stars].indexOf(selectedStar)

  if (selectedIndex > -1) {
    stars[selectedIndex].classList.add('star__checked')
    rating.textContent = `${stars.length - selectedIndex}/5`
  } else {
    rating.textContent = `${0}/5`
  }
}

// let stars = document.querySelectorAll('.star')
// document.querySelector('.star-container').addEventListener('click', starRating)
// let rating = document.querySelector('.rating')

// function starRating(e) {
//   stars.forEach((star) => star.classList.remove('star__checked'))
//   const i = [...stars].indexOf(e.target)
//   if (i > -1) {
//     stars[i].classList.add('star__checked')
//     rating.textContent = `${stars.length - i}/5`
//   } else {
//     rating.textContent = `${0}/5`
//   }
// }
