
import { Router } from './router.js'

const homeLink = document.querySelector('#homeLink')
const theUniverseLink = document.querySelector('#theUniverseLink')
const explorationLink = document.querySelector('#explorationLink')

const anchors = [homeLink, theUniverseLink, explorationLink]

const router = new Router() //precisa do new para puxar a classe

router.add('/', '/pages/Home.html')
router.add('/TheUniverse', '/pages/TheUniverse.html')
router.add('/Exploration', '/pages/Exploration.html')
router.add(404, '/pages/404.html')

router.handle() // aparece a pág home sem precisar clicar no botão
router.anchorStyle

window.onpopstate = () => router.handle() //permite a navegação pelas setinhas de voltar/avançar
window.route = () => router.route()

function anchorStyle() {

    const { pathname } = window.location


    for (let anchor of anchors) {
        anchor.style.fontWeight = "400";
        /* anchor.style.fontSize = "x-large"; */
    }

    switch (router.routes) {
        case '/':
            homeLink.style.fontWeight = '900'
            break
        
        case '/TheUniverse': 
            theUniverseLink.style.fontWeight = '900'
            break
    }
    console.log(pathname)
}

anchorStyle()


export {
    homeLink,
    theUniverseLink,
    explorationLink,
    anchors
}





