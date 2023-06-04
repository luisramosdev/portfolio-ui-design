const works = [
    {
        id: 1,
        title: "Login Page",
        image: "./images/work_01.png",
        link: "#",
        decription: "Login and sign up page"
    },
    {
        id: 2,
        title: "Travel",
        image: "./images/work_02.png",
        link: "#",
        decription: "Home page, memes and travel"
    },
    {
        id: 3,
        title: "Lechería",
        image: "./images/work_03.png",
        link: "#",
        decription: "Lecheria, Anzoategui, Venezuela"
    },
    {
        id: 4,
        title: "Cheems",
        image: "./images/work_04.png",
        link: "#",
        decription: "Cheems vs The World - The Game"
    },
    {
        id: 5,
        title: "404 Page Not Fount",
        image: "./images/work_05.png",
        link: "#",
        decription: "404 Page"
    },
    {
        id: 6,
        title: "Animal Crossing",
        image: "./images/work_06.png",
        link: "#",
        decription: "Animal Crossing Page"
    }
];

function queso(){
    const workContainer = document.querySelector(".works__container");

    works.forEach(item => {
        const template = `
            <div class="work" id=${item.id}>
                <div class="work__title">
                    <p>${item.title}</p>
                    <a href=${item.link}>View project</a>
                </div>
                <img src=${item.image} alt=${item.decription}>
            </div>`;
    
        workContainer.innerHTML += template;
    })
}

queso()