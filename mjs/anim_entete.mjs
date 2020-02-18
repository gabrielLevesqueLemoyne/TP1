export class anim_entete {
    constructor(elmEntete) {
      this.elmEntete = elmEntete
    }
    
    anim(){
        console.log('///////// animation //////////')
        //console.log(this.elmEntete.tagName)
        let elmTitre = this.elmEntete
        console.log(elmTitre.tagName)
        elmTitre.classList.add('animEntete')
    }
    
    }