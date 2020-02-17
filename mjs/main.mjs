import {anim_entete} from "./anim_entete.mjs";
import {anim_livraison} from "./anim_livraison.mjs";

let elmEntete = document.querySelector("header .titre");
const animEntete = new anim_entete(elmEntete);
animEntete.anim();

let elmLivraison = document.querySelector(".livraison #icon_truck");
const animCamion = new anim_livraison(elmLivraison);
animCamion.anim();
