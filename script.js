const collection = [{
    photo: './images/cat-juan-manuel-sanchez-egk9uKaoNng-unsplash.jpg',
    title: 'We should talk',
    description: 'Some cat photo I found.'
}, {
    photo: './images/cat-4189697_1280.jpg',
    title: 'Sleeping cat',
    description: 'Sleeping kitten'
}, {
    photo: './images/cat-nathan-riley-_ir1D49PRqM-unsplash.jpg',
    title: 'Watchful eye',
    description: 'A cat from the net'
}, {
    photo: './images/cat-Szonja-2019.jpeg',
    title: 'Szonja 1',
    description: 'Szonja at home in 2019',
}, {
    photo: './images/cat-Szonja.jpeg',
    title: 'Power nap',
    description: 'Szonja before the night shift starts.'
}, {
    photo: './images/cat-SzonjaAT.jpeg',
    title: 'Any questions?',
    description: "I am ready to turn in for the rest of the day."
}
];

let currentPhoto = 0;
let data = collection[currentPhoto];
const maximum = collection.length;
let direction;

loadPhoto(currentPhoto);
makeThnActive(currentPhoto);

// make thumbnails:
collection.forEach((photo, index) => {
    let thnClass = 'thn';
    if (index == currentPhoto) {
        thnClass = 'thn active'
    }
    let htmlCont = `<div class="ic"><div class="title">${photo.title}</div><img class="${thnClass}" data-number="${index}" src="${photo.photo}" alt="cat-thn"></div>`
    $("#thcont").append(htmlCont);
});

$(".thn").click((event) => {
    let indexClicked = $(event.target).attr("data-number");
    currentPhoto = parseInt(indexClicked);
    loadPhoto(currentPhoto);
});

$(".thn").mouseover((event) => {
    let whichOne = $(event.target).attr("data-number");
    loadPhoto(parseInt(whichOne));
    setThnBorder(whichOne);
})

function setThnBorder(index) {
    $('.thn').each((element, obj) => {
        if ($(obj).hasClass('active')) {
            $(obj).removeClass("active");
        } else if (element == index) {
            $(obj).addClass('active');
        }
    })
}

function makeThnActive(photoIndex) {
    $('.thn').each((index, object) => {
        if (index == photoIndex) {
            $(object).toggleClass('active');
        }
    });
}

$("aside").click((e) => {
    let direction = e.target.className;
    if (direction == 'leftside') {
        currentPhoto = getNewLeftNumber(currentPhoto);
    } else if (direction === 'rightside') {
        currentPhoto = getNewRightNumber(currentPhoto);
    } else {
        console.log('The unexpected happened');
    }
    loadPhoto(currentPhoto);
    setThnBorder(currentPhoto);
});

function loadPhoto(index) {
    data = collection[index];
    $('#photo').attr('src', data.photo);
    $('#photo-title').text(data.title);
    $('#photo-description').text(data.description);
}

function getNewLeftNumber(current) {
    if (current === 0) {
        return maximum - 1;
    } else {
        return current - 1;
    }
}

function getNewRightNumber(current) {
    if (current === maximum - 1) {
        return 0;
    } else {
        return current + 1;
    }
}
