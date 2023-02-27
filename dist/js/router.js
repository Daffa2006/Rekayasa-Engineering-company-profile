document.addEventListener("click", (e) => {
    const {target} = e
    if(!target.matches('nav ul li a')) {
        return 
    }
    e.preventDefault();
    urlRoute();
})
const urlRoutes = {
    404 : {
        template: "/dist/template/404.html",
        title : "404 NOT FOUND",
        description : "Page not found",
    },
    "/" : {
        template: "/dist/template/index.html",
        title : "Rekayasa Engineering",
        description : "PT REKAYASA ENGINEERING provide Basic Engineering & Field Engineering, Front End Engineering Design (FEED), EPC of Electrical & Instrument, EPC of Tank, and EPC Services in a wide range of engineering services area, as follows : Petrochemical and Chemical Area, Oil & Gas and Power Generation Area, Cement and Mineral Area, Industry Are.",
    },
    "/about-us" : {
        template: "/dist/template/about-us.html",
        title : "About Us",
        description : "About Us",
    },
    "/business" : {
        template: "/dist/template/business.html",
        title : "Business & Service",
        description : "Business & Service",
    },
    "/our-project" : {
        template: "/dist/template/our-project.html",
        title : "Our Project",
        description : "Our Project",
    },
    "sustainability" : {
        template: "/dist/template/sustainability.html",
        title : "Sustainability",
        description : "Sustainability",
    },
    "/contact-us" : {
        template: "/dist/template/contact-us.html",
        title : "Contact Us",
        description : "Contact Us",
    },
    "/procurement" : {
        template: "/dist/template/procurement.html",
        title: "procurement",
        description: "procurement"
    }
}
function urlRoute(event) {
    event = event || window.event;
    event.preventDefault()
    window.history.pushState({},"",event.target.href);
    urlLocationHandler()
}

async function urlLocationHandler() {
    let location = window.location.pathname;
    if (location.length === 0) {
        location = "/";
        
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then(response => response.text());
    document.querySelector('.page-content').innerHTML = html;
    document.querySelector('title').textContent = route.title;
    document.querySelector('meta[name="description"]').setAttribute('content',route.description)
}
window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler()