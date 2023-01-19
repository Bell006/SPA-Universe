import {
    homeLink,
    theUniverseLink,
    explorationLink,
    anchors
} from './index.js'

export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    
    route(event) {
        event = event || window.event
        event.preventDefault() //para de recarregar on click (tira o padrão)

        // Empurrando para o histórico a mudança das páginas
        window.history.pushState({}, "", event.target.href) 
        
        this.handle() //referencia o biscoito
        
    }
    
    handle() {
        //Desestruturação ===> const pathname = window.location.pathname
        let { pathname } = window.location
        let route = this.routes[pathname] || this.routes[404]
        
        //fech é assíncrono (devolve uma promise)
        fetch(route)
        .then(data => data.text()) //arrow function retorna direto
        .then(html => document.querySelector('#app').innerHTML = html) //pegando o html da rota e passando dentro da div app
        
        //Anchors em bold
        for (let anchor of anchors) {
            anchor.style.fontWeight = "400";
            /* anchor.style.fontSize = "x-large"; */
        }
    
        switch (pathname) {
            case '/':
                homeLink.style.fontWeight = '900'
                break
            
            case '/TheUniverse': 
                theUniverseLink.style.fontWeight = '900'
                break
            
            case '/Exploration':
                explorationLink.style.fontWeight = '900'
                break
        }
    }
    
}
