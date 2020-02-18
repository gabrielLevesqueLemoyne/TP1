export class anim_livraison {
    constructor(elmLivraison) {
      this.elmLivraison = elmLivraison
    }
    
    anim(){
        console.log('///////// animation //////////')
        console.log(this.elmLivraison.tagName)
        let elmCamion = this.elmLivraison
        console.log(elmCamion.tagName)
        elmCamion.classList.add('animLivraison')
    }
    
    }