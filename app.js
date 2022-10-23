var imageFeature = document.querySelector('.img-feature')
var listImage = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')


var currentIndex = 0;

function updateImageByIndex(index) {
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index;
    imageFeature.src = listImage[index].getAttribute('src')
    listImage[index].parentElement.classList.add('active')
}
listImage.forEach((imageElement, index) => {
    imageElement.addEventListener('click', e => {
        imageFeature.style.opacity = '0'

        setTimeout(() => {
            updateImageByIndex(index)
            imageFeature.style.opacity = '1'
        }, 400)

    })
})
prevBtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImage.length - 1
    } else {
        currentIndex--
    }
    updateImageByIndex(currentIndex)
})
nextBtn.addEventListener('click', e => {
    if (currentIndex == listImage.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    updateImageByIndex(currentIndex)
})
updateImageByIndex(0)