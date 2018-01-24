class PainelFoto{

    constructor(){
        this.restrict = "AE";        
        this.transclude = true;

        this.scope = {
            titulo: '@'
        }

        this.templateUrl = 'js/directives/templates/painel-foto.html';

    }
}