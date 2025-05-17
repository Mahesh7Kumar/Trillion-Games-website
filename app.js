const nextButton = document.querySelector('.next-btn');

const video = document.querySelector('.hero-video');

const gamelist = ['videos H/hero-1.mp4', 'videos H/hero-2.mp4', 'videos H/hero-3.mp4', 'videos H/hero-4.mp4']

let index = 0;
nextButton.addEventListener('click', () => {
    index += 1
    video.src = gamelist[index]

    if (index === 3) {
        index = -1
    }
})
