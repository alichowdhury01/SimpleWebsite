let menu = {
    "entrees": [
        {
            "id": 1,
            "nomRepas": "Pétoncles au basilic et bacon",
            "prix": 10.99,
            "nomImgRepas": "petonclesaubasilicetbacon.jpeg"
        },
        {
            "id": 2,
            "nomRepas": "Tartare de tomates et crevettes en verrine",
            "prix": 9.99,
            "nomImgRepas": "tartaredetomatesetcrevettesenverrine.jpeg"
        },
        {
            "id": 3,
            "nomRepas": "Halloumi grillé tomates et basilic",
            "prix": 8.99,
            "nomImgRepas": "halloumigrilletomatesetbasilic.jpeg"
        },
        {
            "id": 4,
            "nomRepas": "Pochettes de pommes de terreau brie et basilic frais",
            "prix": 10.99,
            "nomImgRepas": "pochettesdepommesdeterreaubrieetbasilicfrais.jpeg"
        },
        {
            "id": 5,
            "nomRepas": "Rouleaux dasperges et prosciuttini",
            "prix": 11.99,
            "nomImgRepas": "rouleauxdaspergesetprosciuttini.jpeg"
        },
        {
            "id": 6,
            "nomRepas": "Salade étagée aux wontons croustillants",
            "prix": 10.99,
            "nomImgRepas": "saladeetageeauxwontonscroutillants.jpeg"
        },
        {
            "id": 7,
            "nomRepas": "Chaudrée du pêcheur",
            "prix": 10.99,
            "nomImgRepas": "chaudreedupecheur.jpeg"
        },
        {
            "id": 8,
            "nomRepas": "Tartare étagé de pétoncles et fraises",
            "prix": 10.99,
            "nomImgRepas": "tartareetagedepetonclesetfraises.jpeg"
        },
        {
            "id": 9,
            "nomRepas": "Potage aux poireaux et pommes de terres",
            "prix": 9.99,
            "nomImgRepas": "potageauxpoireauxetpommesdeterre.jpeg"
        },
        {
            "id": 10,
            "nomRepas": "Salade de saumon fumé et mâche",
            "prix": 11.99,
            "nomImgRepas": "saladedesaumonfumeetmache.jpeg"
        }
    ],
    "repas": [
        {
            "id": 1,
            "nomRepas": "Mac’n cheese en papillote",
            "prix": 16.99,
            "nomImgRepas": "macncheeseenpapillote.jpeg"
        },
        {
            "id": 2,
            "nomRepas": "Tournedos de boeuf marinés à la bière",
            "prix": 14,
            "nomImgRepas": "tournedosdebouefmarinealabiere.jpeg"
        },
        {
            "id": 3,
            "nomRepas": "Côtes levées Memphis",
            "prix": 17.99,
            "nomImgRepas": "cotesleveesmemphis.jpeg"
        },
        {
            "id": 4,
            "nomRepas": "Crêpes aux bananes et beurre d’arachide",
            "prix": 10,
            "nomImgRepas": "crepeaucbananesetbeurredarachide.jpeg"
        },
        {
            "id": 5,
            "nomRepas": "Salade de pâtes au thon",
            "prix": 14,
            "nomImgRepas": "saladedepatesauthon.jpeg"
        },
        {
            "id": 6,
            "nomRepas": "Pilons de poulet cajun",
            "prix": 15,
            "nomImgRepas": "pilonsdepouletcajun.jpeg"
        },
        {
            "id": 7,
            "nomRepas": "Salade debetteraves, mandarines et pistaches",
            "prix": 16,
            "nomImgRepas": "saladedebetteravesmandarinesetpistaches.jpeg"
        },
        {
            "id": 8,
            "nomRepas": "Steak de flanc tequila, limee tail",
            "prix": 23,
            "nomImgRepas": "steakdeflanctequilalimeetail.jpeg"
        },
        {
            "id": 9,
            "nomRepas": "Omelette gourmande",
            "prix": 10,
            "nomImgRepas": "omelettedujardin.jpeg"
        },
        {
            "id": 10,
            "nomRepas": "Poulet barbecue et légumes en papillote",
            "prix": 14.89,
            "nomImgRepas": "pouletbarbecueetlegumesenpapillote.jpeg"
        }
    ]
}

let cheminImgEntree = "../images/entree/";
let cheminImgRepas = "../images/repas/";
let totalEntree = 0;
let totalRepas = 0;
let totalFacture = 0;
let totalTaxes = 0;
const TAXES = 0.1497

let initialiser = () => {
    document.getElementById("imgEntree").src = cheminImgEntree + menu.entrees[0].nomImgRepas;
    document.getElementById("nomEntree").innerHTML = menu.entrees[0].nomRepas;
    document.getElementById("prixEntree").innerHTML = menu.entrees[0].prix + " $";

    document.getElementById("imgRepas").src = cheminImgRepas + menu.repas[0].nomImgRepas;
    document.getElementById("nomRepas").innerHTML = menu.repas[0].nomRepas;
    document.getElementById("prixRepas").innerHTML = menu.repas[0].prix + " $";

    //Générer le contenu du select pour les entrees
    let tabMenu = menu.entrees;
    let selectEntree = document.getElementById("selectEntree");
    for(let unEntree of tabMenu){
        selectEntree.options[selectEntree.options.length] = new Option(unEntree.nomRepas, unEntree.id);
    }
    //Générer le contenu du select pour les repas
    let tabMenuRepas = menu.repas;
    let selectRepas = document.getElementById("selectRepas");
    for(let unRepas of tabMenuRepas){
        selectRepas.options[selectRepas.options.length] = new Option(unRepas.nomRepas, unRepas.id);
    }
}

let traiterEntree = () => {
    let selectEntree = document.getElementById("selectEntree");
    let idEntree = selectEntree.options[selectEntree.selectedIndex].value;
    let objEntree = menu.entrees.find(entree => entree.id == idEntree);

    document.getElementById("imgEntree").src = cheminImgEntree + objEntree.nomImgRepas;
    document.getElementById("nomEntree").innerHTML = objEntree.nomRepas;
    document.getElementById("prixEntree").innerHTML = objEntree.prix + " $";

    //Calcul de la facture pour l'entree
    totalEntree = objEntree.prix;
    totalTaxes = (totalEntree + totalRepas) * TAXES;
    totalFacture = totalEntree + totalRepas + totalTaxes;
    totalFacturePayer();
}

let traiterRepas = () => {
    let selectRepas = document.getElementById("selectRepas");
    let idRepas = selectRepas.options[selectRepas.selectedIndex].value;
    let objRepas = menu.repas.find(repas => repas.id == idRepas);

    document.getElementById("imgRepas").src = cheminImgRepas + objRepas.nomImgRepas;
    document.getElementById("nomRepas").innerHTML = objRepas.nomRepas;
    document.getElementById("prixRepas").innerHTML = objRepas.prix + " $";

    //Calcul de la facture pour le repas
    totalRepas = objRepas.prix;
    totalTaxes = (totalEntree + totalRepas) * TAXES;
    totalFacture = totalEntree + totalRepas + totalTaxes;
    totalFacturePayer();
}

function totalFacturePayer() {
    let facture = " ";
    if(totalEntree >0){
        facture += " <b>Entree = </b>" + totalEntree.toFixed(2) + " $";
    }
    if(totalRepas > 0){
        facture += " <b>Repas = </b>" + totalRepas.toFixed(2) + " $";
    }
    facture += " <b>Taxes = </b>" + totalTaxes.toFixed(2) + " $";
    facture += "<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;À PAYER = </b>"+totalFacture.toFixed(2)+" $";
    document.getElementById("facture").innerHTML = facture;
}