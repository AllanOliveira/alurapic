angular.module('MinhasDiretivas',[])
    .directive('painelFoto',() => new PainelFoto())
    .directive('imgFoto',() => new ImgFoto())