const config = {
    videos: [
        "https://fast.wistia.net/embed/iframe/rhgkngj4yv?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/rhgkngj4yv?seo=false&videoFoam=true",
        "https://fast.wistia.net/embed/iframe/rhgkngj4yv?seo=false&videoFoam=true"
    ],
    next_button: "Next video",
    previous_button: "Previous video",
    progress_text: "Video"
}

const nxtBtn = document.getElementById('nxtBtn');
const prevBtn = document.getElementById('prevBtn');
const video = document.getElementById('video');
const progress = document.getElementById('progress');
const total = document.getElementById('total');
const progressText = document.getElementById('progressText');
const navCntrl = document.getElementById('navCntrl');
const progressDetails = document.getElementById('progressDetails')

progressText.innerText = config.progress_text;
total.textContent = config.videos.length;
nxtBtn.textContent = config.next_button;
prevBtn.textContent = config.previous_button;
video.src = config.videos[0];

let i = 0;
progress.textContent = i + 1;
prevBtn.style.display = 'none'
navCntrl.style.justifyContent = 'flex-end'

let max = config.videos.length;
const nextVideo = () => {
    if (i < max - 1) {
        i++
        video.src = config.videos[i];
    }

    if(i === max -1){
        nxtBtn.style.display = 'none'
    }

    progress.textContent = i + 1;
    prevBtn.style.display = 'flex'
    navCntrl.style.justifyContent = 'space-between'
}

nxtBtn.addEventListener('click', nextVideo)


const prevVideo = () => {
    if (i != 0) {
        i--
        video.src = config.videos[i];
        nxtBtn.style.display = 'flex';
    } 

    if(i === 0){
        prevBtn.style.display = 'none'
        navCntrl.style.justifyContent = 'flex-end'
    }

    progress.textContent = i + 1;
}

prevBtn.addEventListener('click', prevVideo)

if (config.videos.length === 1 || config.videos[i] === "") {
    nxtBtn.style.display = 'none'
    prevBtn.style.display = 'none'
    navCntrl.style.justifyContent = 'center'
    navCntrl.style.padding = '1.25rem 0 1.25rem 0'
}