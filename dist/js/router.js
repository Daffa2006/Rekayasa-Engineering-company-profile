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
    "/detail-project" : {
        template: "/dist/template/detail-project.html",
        title : "Detail Project",
        description : "Detail Project",
    },
    "/news" : {
        template: "/dist/template/news.html",
        title : "News",
        description : "News",
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
    },
    "/csr-report" : {
        template: "/dist/template/csr-report.html",
        title: "CSR Report",
        description: "CSR Report"
    },
    "/sustainability" : { 
        template : "/dist/template/sustainability.html"
    },
    "/sustainability/quality-policy" : {
        template: "/dist/template/sustainability/quality-policy.html",
        title: "Quality Policy",
        description: "Quality Policy"
    },
    "/sustainability/hse" : {
        template: "/dist/template/sustainability/hse.html",
        title: "HSE",
        description: "HSE"
    },
    "/sustainability/csr" : {
        template: "/dist/template/sustainability/csr.html",
        title: "CSR",
        description: "CSR"
    },
    "/sustainability/certification" : {
        template: "/dist/template/sustainability/certification.html",
        title: "Certification",
        description: "Certification"
    },
    "/sustainability/it-technology" : {
        template: "/dist/template/sustainability/it-technology.html",
        title: "IT Technology",
        description: "IT Technology"
    },
    "/sustainability/gcg" : {
        template: "/dist/template/sustainability/gcg.html",
        title: "IT Technology",
        description: "IT Technology"
    }
}
document.addEventListener("click", (e) => {
    const {target} = e
    if(!target.matches('ul li a')) {
        return 
    }
    e.preventDefault();
    urlRoute();
})
function urlRoute(event) {
    event = event || window.event;
    event.preventDefault()
    window.history.pushState({},"",event.target.href);
    console.log("test 2")
    urlLocationHandler()
}
let inSustainability = false;
async function urlLocationHandler() {
    let location = window.location.pathname;
    if (location.length === 0) {
        location = "/";   
    }
    if (location.includes('/sustainability')) {
        if (!inSustainability) {
            const route = urlRoutes["/sustainability"] || urlRoutes[404];
            const html = await fetch(route.template).then(response => response.text());
            document.querySelector('.page-content').innerHTML = html;
        }
        if (location === '/sustainability') {
            location = "/sustainability/quality-policy"
            window.location.pathname = location;
        }
        const routeSubPage = urlRoutes[location] || urlRoutes[404]
        const subPageHTML = await fetch(routeSubPage.template).then(response => response.text());
        document.querySelector('.sub-page').innerHTML = subPageHTML;
        document.querySelector('title').textContent = routeSubPage.title;
        document.querySelector('meta[name="description"]').setAttribute('content',routeSubPage.description);
        inSustainability = true;
        return
    } else {
        inSustainability = false;
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then(response => response.text());
    document.querySelector('.page-content').innerHTML = html;
    document.querySelector('title').textContent = route.title;
    document.querySelector('meta[name="description"]').setAttribute('content',route.description);
}
window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler()