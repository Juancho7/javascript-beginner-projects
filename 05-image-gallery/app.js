const images = document.querySelector('#image-view')
const image = document.querySelector('#image')
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const counter = document.querySelector('#counter')

let currentImageIndex = 0

const imagePaths = [
  'images/goku-ultra-instict.jfif',
  'images/leon-resting.jfif',
  'images/vegeta-ultra-ego.jpg',
  'images/leon-vs-wolves.jfif',
  'images/leon-vs-zombies.jfif'
]

const loadImage = () => {
  image.src = imagePaths[currentImageIndex]
}

const prevImage = () => {
  if (currentImageIndex === 0) currentImageIndex = imagePaths.length - 1
  else currentImageIndex--

}

const nextImage = () => {
  if (currentImageIndex === imagePaths.length - 1) currentImageIndex = 0
  else currentImageIndex++
}

const updateCounter = () => {
  counter.textContent = `${currentImageIndex + 1} of ${imagePaths.length}`
}

prevButton.addEventListener('click', () => {
  prevImage()
  loadImage()
  updateCounter()
})

nextButton.addEventListener('click', () => {
  nextImage()
  loadImage()
  updateCounter()
})

loadImage()
updateCounter()

