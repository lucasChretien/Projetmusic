let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("pictureThird");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 6000); // Change image every 2 seconds
  }

  class avisGoogle {
    constructor(chemin, description, lettre, text1, text2 ) {
        
        this.chemin = chemin
        this.description = description
        this.lettre = lettre
        this.text1 = text1
        this.text2 = text2
    }
    afficheChemin() {
      return this.chemin
  }
    afficheDescription() {
        return this.description 
    }
    afficheLettre() {
        return this.lettre
    }
    affichetext1() {
        return this.text1
    }
    affichetext2() {
        return this.text2
    }
    
}

const createCard = (Google) => {
  let cardAvis = document.createElement("div")
    cardAvis.classList.add("cardAvis")

  let divImg = document.createElement("div")
  cardAvis.appendChild(divImg)

  let img = document.createElement("img")
    img.src = Google.afficheChemin()
    img.classList.add("imgAvis");
    divImg.appendChild(img)


  let descriptionAvis = document.createElement("p")
    descriptionAvis.innerHTML = Google.afficheDescription();
    descriptionAvis.classList.add("descriptionAvis");
    divImg.appendChild(descriptionAvis)
  
  let userAvis = document.createElement("div")
    userAvis.classList.add("userAvis")
    divImg.appendChild(userAvis)
  
  let photoCompte = document.createElement("div")
    photoCompte.classList.add("photoCompte")
    userAvis.appendChild(photoCompte)

  let lettre = document.createElement("p")
    lettre.innerHTML = Google.afficheLettre();
    lettre.classList.add("lettre");
    photoCompte.appendChild(lettre)
  
  let nomUser = document.createElement("div")
  nomUser.classList.add("nomUser")
    userAvis.appendChild(nomUser)

  let Text1 = document.createElement("p")
    Text1.innerHTML = Google.affichetext1();
    Text1.classList.add("Text1");
    nomUser.appendChild(Text1)
  
    let Text2 = document.createElement("p")
    Text2.innerHTML = Google.affichetext2();
    Text2.classList.add("Text2");
    nomUser.appendChild(Text2)

    return cardAvis
}

const avis1 = new avisGoogle("./assets/img/noteAvis.png", "super enceinte très bonne qualiée", "D", "Damien chevreau", "26 fevrier 2022")
let cardAvis = createCard(avis1)
document.getElementById("avis").appendChild(cardAvis)

const avis2 = new avisGoogle("./assets/img/noteAvis.png", "Arriver en avance Geniale !", "F", "Fred vanlong", "12 Décembre 2021")
cardAvis = createCard(avis2)
document.getElementById("avis").appendChild(cardAvis)

const avis3 = new avisGoogle("./assets/img/noteAvis.png", "très satisfaite", "E", "Eugenie Vinceau", "3 Janvier 2022")
cardAvis = createCard(avis3)
document.getElementById("avis").appendChild(cardAvis)

const avis4 = new avisGoogle("./assets/img/noteAvis.png", "Mon fils adore merci !", "Y", "Yannick petit", "14 Septembre 2021")
cardAvis = createCard(avis4)
document.getElementById("avis").appendChild(cardAvis)

