import {anim_entete} from "./anim_entete.mjs";
let elmEntete = document.querySelector("header .titre");
const animEntete = new anim_entete(elmEntete);
animEntete.anim();

