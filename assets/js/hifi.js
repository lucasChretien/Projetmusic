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

const hifi1 = new produit("Nouveau", "Système HiFi Micro Chaîne", "mini chaine", "980 €", "849 €", "../img/hifi1.png")
let produitcard = createCard(hifi1)
document.getElementById("produitligne1").appendChild(produitcard)

const hifi2 = new produit("nouveau", "Sonoro PRESTIGE Argent ", "mini chaine", "1100 €", "899 €", "../img/hifi2.png")
produitcard = createCard(hifi2)
document.getElementById("produitligne1").appendChild(produitcard)

const hifi3 = new produit("offre speciale", "Birmingham système stéréo", "stéréo", "312 €", "279 €", "../img/hifi3.png")
produitcard = createCard(hifi3)
document.getElementById("produitligne1").appendChild(produitcard)

const hifi4 = new produit("Rupture de stock ", "ROSE HIFI RS250 Lecteur Réseau", "lecteur reseau", "", "2 290,99 €", "../img/hifi4.png")
produitcard = createCard(hifi4)
document.getElementById("produitligne1").appendChild(produitcard)

const video1 = new produit("Remise exeptionelle", "GYHM70E Camescope d'épaule HD", "Camescope", "1400€", "1217€", "../img/video1.png")
produitcard = createCard(video1)
document.getElementById("produitligne2").appendChild(produitcard)

const video2 = new produit("Remise exeptionelle ", "Hybride - Panasonic Lumix", "lumix","900€","799,99€", "../img/video2.png")
produitcard = createCard(video2)
document.getElementById("produitligne2").appendChild(produitcard)

const video3 = new produit(" Nouveau", "STARBLITZ Trépier 3 sections", "trepier", "", "49,99€", "../img/video3.png")
produitcard = createCard(video3)
document.getElementById("produitligne2").appendChild(produitcard)

const video4  = new produit("offre special", "PERCHE INVISIBLE INSTA360", "perche", "21€", "14,99€", "../img/video4.png")
produitcard = createCard(video4)
document.getElementById("produitligne2").appendChild(produitcard)