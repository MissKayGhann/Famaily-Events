const events = [
    {
        "eventName": "Christmas 2022",
        "eventImage": "https://upload.wikimedia.org/wikipedia/commons/8/8f/NativityChristmasLights2.jpg",
        "eventInfo": "  ",
        "eventDate": "25th December 2022, 12:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "My 30th Birthday",
        "eventImage": "https://i.etsystatic.com/28485909/r/il/fc627f/3827922132/il_1588xN.3827922132_k1a4.jpg",
        "eventInfo": " ",
        "eventDate": "30th December 2022, 19:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "NEW YEARS 2023",
        "eventImage": "https://lovewimbledon.org/wp-content/uploads/2018/12/NYE.jpg",
        "eventInfo": " The point of this structure is for you to be able to access the information and from it render the events on your page. You should have at least 10 events to display. Finding an appropriate structure is part of your design strategy so choose wisely.",
        "eventDate": "1st January 2023, 00:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "Mama's Birthday",
        "eventImage": "https://i.etsystatic.com/27231097/r/il/251d5d/3159608905/il_1588xN.3159608905_i0m1.jpg",
        "eventInfo": " ",
        "eventDate": "6th February 2023, 17:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "Bro(1)'s Birthday",
        "eventImage": "https://cdn.happybirthdaywisher.com/images/hbw-articles-brother-1-cke.jpg",
        "eventInfo": " ",
        "eventDate": "7th February 2023, 20:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "My Baby JUDE's 2ND Birthday",
        "eventImage": "https://cdn.shopify.com/s/files/1/0115/4056/1978/articles/two-fast_horizontal_blog_241afeab-a4af-45ae-8d64-de010a32d830_1024x1024.jpg?v=1587456393",
        "eventInfo": " ",
        "eventDate": "12th February 2023, 14:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "Bro(2)'s Birthday",
        "eventImage": "https://parade.com/.image/t_share/MTkwNTgxNDczNDIzOTkxOTMz/birthday-messages-for-brother-jpg.jpg",
        "eventInfo": " ",
        "eventDate": "19th February 2023, 20:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "Bro(3)'s Birthday",
        "eventImage": "https://i.etsystatic.com/13779802/r/il/675865/2321201948/il_fullxfull.2321201948_ije7.jpg",
        "eventInfo": " ",
        "eventDate": "22nd February 2023, 20:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "Sissy's Birthday",
        "eventImage": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxhXbg23mZLQSVHTl0u4AhVixOgGd5zJ5diSu0Msm4PYDGVqquTt_4tNn_k3Z6g4WrsJWZNoxXX0o329EmBjCo0QGh4cCOghqPwOtIfjbvAfs1---3fcnXjQ&usqp=CAY",
        "eventInfo": " ",
        "eventDate": "30th March 2023, 21:00",
        "eventPrice": "£FREE"
    },
    {
        "eventName": "EASTER",
        "eventImage": "https://ichef.bbci.co.uk/news/640/cpsprodpb/7BD0/production/_124169613_eastereggs.jpg",
        "eventInfo": " ",
        "eventDate": "9th April 2023, 15:30",
        "eventPrice": "£FREE"
    },
]

const mainCard = document.querySelector('.main-card')

function createCard({eventName, eventImage, eventInfo, eventDate, eventPrice}) {
    const eventBox = document.createElement('fieldset')
    eventBox.classList.add('event-box')

    const img = document.createElement('img')
    img.classList.add('img')
    img.src = eventImage

    const familyEvent = document.createElement('h3')
    familyEvent.classList.add('family-event')

    const familyDate = document.createElement('div')
    familyDate.classList.add('family-date')

    const familyPrice = document.createElement('div')
    familyPrice.classList.add('family-price')

    const familyInfo = document.createElement('p')
    familyInfo.classList.add('family-info')

    const interested = document.createElement('button')
    interested.classList.toggle('interested')
    interested.innerText = 'Interested'

    interested.addEventListener('click', () => {
        interested.classList.toggle('interested')
        interested.classList.toggle('grn-btn')
    })

    const notInterested = document.createElement('button')
    notInterested.classList.toggle('not-interested')
    notInterested.innerText = 'Not Interested'

    notInterested.addEventListener('click', () => {
        notInterested.classList.toggle('not-interested')
        notInterested.classList.toggle('red-btn')
    })

    const defoGoing = document.createElement('button')
    defoGoing.classList.toggle('defo-going')
    defoGoing.innerText = "I'll be there!"

    defoGoing.addEventListener('click', () => {
        defoGoing.classList.toggle('defo-going')
        defoGoing.classList.toggle('blu-btn')
    })

    familyEvent.append(eventName)
    familyDate.append(eventDate)
    familyPrice.append(eventPrice)
    familyInfo.append(eventInfo)

    eventBox.append(img, familyEvent, familyDate, familyPrice, familyInfo, interested, notInterested, defoGoing )
    mainCard.append(eventBox)
}

events.forEach(event => createCard(event))

