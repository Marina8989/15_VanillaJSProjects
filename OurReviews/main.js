const reviews = [{

        name: 'Deborah Smith',
        job: 'Web Developer',
        img: "https://www.soluciones506.com/img/portfolio/reclutamiento.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repudiandae quam animi perspiciatis temporibus eveniet, consequatur ut saepe excepturi sunt?"
    },
    {

        name: 'Will Smith',
        job: 'Front end Developer',
        img: "https://www.soluciones506.com/img/portfolio/reclutamiento.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repudiandae quam animi perspiciatis temporibus eveniet, consequatur ut saepe excepturi sunt?"
    },
    {

        name: 'Tom Smith',
        job: 'Web Developer',
        img: "https://www.soluciones506.com/img/portfolio/reclutamiento.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repudiandae quam animi perspiciatis temporibus eveniet, consequatur ut saepe excepturi sunt?"
    },
    {

        name: 'Nan Smith',
        job: 'Web Developer',
        img: "https://www.soluciones506.com/img/portfolio/reclutamiento.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repudiandae quam animi perspiciatis temporibus eveniet, consequatur ut saepe excepturi sunt?"
    },
]
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const info = document.querySelector('.info');
const image = document.querySelector('.img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoader', function() {
    setPerson(currentItem);
})

function setPerson(person) {
    const item = reviews[person];
    image.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    setPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    setPerson(currentItem);
});



randomBtn.addEventListener('click', function() {
    currentItem = randomReview();
    setPerson(currentItem);
});

function randomReview() {
    return Math.floor(Math.random() * reviews.length);
}