class ImgFoto{

    constructor(){

        this.restrict = "AE";

        this.scope = {
            url: '@',
            titulo:'@'
        }

        this.templateUrl='js/directives/templates/foto.html';
    }
}