class produit {
    constructor(offre, titre, sousTitre, prix1, prix2, chemin, ) {
        
        this.offre = offre
        this.titre = titre
        this.sousTitre = sousTitre
        this.prix1 = prix1
        this.prix2 = prix2
        this.chemin = chemin
    }
    afficheOffre() {
        return this.offre 
    }
    afficheTitre() {
        return this.titre 
    }
    afficheOffreTitre() {
        return this.sousTitre 
    }
    affichePrix1() {
        return this.prix1 
    }
    affichePrix2() {
        return this.prix2 
    }
    afficheChemin() {
        return this.chemin
    }
}

// fonction produit ligne 
const createCard = (produit) => {
    let globalCard = document.createElement("div")
    globalCard.classList.add("globalCard")

    let produit1  = document.createElement("div")
    globalCard.classList.add("produit1")
    globalCard.appendChild(produit1)
    
    let img = document.createElement("img")
    img.src = produit.afficheChemin()
    img.classList.add("imgEclairage");
    produit1.appendChild(img)

    let borderGray  = document.createElement("div")
    borderGray.classList.add("borderGray")
    globalCard.appendChild(borderGray)

    let BorderOffre = document.createElement("p")
    BorderOffre.innerHTML = produit.afficheOffre();
    BorderOffre.classList.add("BorderOffre");
    borderGray.appendChild(BorderOffre)


    let bottomCardProduit = document.createElement("div")
    bottomCardProduit.classList.add("bottomCardProduit");
    globalCard.appendChild(bottomCardProduit)

    let Text1 = document.createElement("p")
    bottomCardProduit.appendChild(Text1)
    Text1.innerHTML = produit.afficheTitre();
    Text1.classList.add("Text1");
    globalCard.appendChild(bottomCardProduit)

    let Text2 = document.createElement("p")
    bottomCardProduit.appendChild(Text2)
    Text2.innerHTML = produit.afficheOffreTitre();
    Text2.classList.add("Text2");
    globalCard.appendChild(bottomCardProduit)

    let Price = document.createElement("div")
    globalCard.appendChild(Price)
    Price.classList.add("Price");

    let price1 = document.createElement("p")
    Price.appendChild(price1)
    price1.innerHTML = produit.affichePrix1();
    price1.classList.add("price1");

    let price2 = document.createElement("p")
    Price.appendChild(price2)
    price2.innerHTML = produit.affichePrix2();
    price2.classList.add("price2");

    return globalCard
}

// produit eclairage
const eclairage1 = new produit("offre special", "Cameo TS 200 FC LED Theater", "spot", "980 €", "798 €", "../img/eclairage1.png")
let produitcard = createCard(eclairage1)
document.getElementById("produitligne1").appendChild(produitcard)

const eclairage2 = new produit("offre speciale", "Projecteur LED Equipson PARLED ", "projecteur", "", "589,39 €", "../img/eclairage2.png")
produitcard = createCard(eclairage2)
document.getElementById("produitligne1").appendChild(produitcard)

const eclairage3 = new produit("Nouveau", "Lampes à tête mobile Gobo LED", "tête mobile", "", "366,56 €", "../img/eclairage8.png")
produitcard = createCard(eclairage3)
document.getElementById("produitligne1").appendChild(produitcard)

const eclairage4 = new produit("Rupture de stock ", "LUMERI DROME12.10-D", "drome", "269 €", "189,99 €", "../img/eclairage3.png")
produitcard = createCard(eclairage4)
document.getElementById("produitligne1").appendChild(produitcard)

const eclairage5 = new produit("Rupture de stock ", "LUMERI DROME12.10", "drome", "209€", "179€", "../img/eclairage4.png")
produitcard = createCard(eclairage5)
document.getElementById("produitligne2").appendChild(produitcard)

const eclairage6 = new produit("Remise exeptionelle ", "Ac90-240V Led 10W", "spot","23€","19,99€", "../img/eclairage5.png")
produitcard = createCard(eclairage6)
document.getElementById("produitligne2").appendChild(produitcard)

const eclairage7 = new produit(" Nouveau", "Equinox Domin8R", "barre d'eclairage led", "322 €", "214 €", "../img/eclairage6.png")
produitcard = createCard(eclairage7)
document.getElementById("produitligne2").appendChild(produitcard)

const eclairage8  = new produit("offre special", "SET STROBOSCOPE PRO", "stroboscope", "", "69,99€", "../img/eclairage7.png")
produitcard = createCard(eclairage8)
document.getElementById("produitligne2").appendChild(produitcard)




