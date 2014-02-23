/* 
 * 
 */

/**
 * Controler para os dados do contrato
 * @param {type} $scope
 * @returns {undefined}
 */
function dadosContrato($scope) {

    $scope.btSemDesc = false;
    $scope.btComDesc = false;

    $scope.contrato = {
        vlrTotalParc: 0,
        vlrParc: 0,
        vlrHon: 0,
        qntParc: 0,
        vlrGCA: 0,
        vlrDescJuros: 0,
        vlrJuroParc1: 0,
        vlrJuroParc2: 0,
        vlrJuroParc3: 0
    };


        
    $scope.reset = function() {
        $scope.contrato = {
            vlrTotalParc: 0,
            vlrParc: 0,
            vlrHon: 0,
            qntParc: 0,
            vlrGCA: 0,
            vlrDescJuros: 0,
            vlrJuroParc1: 0,
            vlrJuroParc2: 0,
            vlrJuroParc3: 0
        };
        $scope.btSemDesc = false;
        $scope.btComDesc = false;
        
    };

    /**
     * Funcao ou metodo para controlar a mudança do valor da parcela
     * @returns {undefined}
     */
    var cpVlrParc = function() {
        $scope.contrato.vlrHon = (($scope.contrato.vlrParc) * 10) / 100;

        $scope.contrato.totalSemDesconto = parcSemDesc();
        $scope.contrato.totalComDesconto = parcComDesc();

    };

    /**
     * Metodo para controlar os honorarios
     * @returns {undefined}
     */
    var cpVlrHon = function() {

    };

    /**
     * Metodo para controlar o evento no Select da "Quantidade de Parcelas"
     * @returns {undefined}
     */
    var cpQntParc = function() {
        $scope.contrato.vlrHon = ((((($scope.contrato.vlrParc) * 10) / 100)) * $scope.contrato.qntParc);

        $scope.contrato.totalSemDesconto = parcSemDesc();
        $scope.contrato.totalComDesconto = parcComDesc();

        $scope.contrato.textoSemDesc = textoParcSemDesc();
        $scope.contrato.textoComDesc = textoParcComDesc();
    };


    /**
     * Metodo para controlar o valor do GCA
     * @returns {undefined}
     */
    var cpVlrGCA = function() {
        $scope.contrato.totalSemDesconto = parcSemDesc();
        $scope.contrato.totalComDesconto = parcComDesc();
    };

    /**
     * Metodo para controlar o valor do desconto dos juros
     * @returns {undefined}
     */
    var cpVlrDescJuros = function() {
        $scope.contrato.totalComDesconto = parcComDesc();
    };

    /**
     * Metodo para controlar o evento no campo "Juro parcela 1"
     * @returns {undefined}
     */
    var cpVlrJuroParc1 = function() {
        $scope.contrato.totalSemDesconto = parcSemDesc();
        $scope.contrato.totalComDesconto = parcComDesc();
    };

    /**
     * Metodo para controlar o evento no campo "Juro parcela 2"
     * @returns {undefined}
     */
    var cpVlrJuroParc2 = function() {
        $scope.contrato.totalSemDesconto = parcSemDesc();
        $scope.contrato.totalComDesconto = parcComDesc();
    };

    /**
     * Metodo para controlar o evento no campo "Juro parcela 3"
     * @returns {undefined}
     */
    var cpVlrJuroParc3 = function() {
        $scope.contrato.totalSemDesconto = parcSemDesc();
        $scope.contrato.totalComDesconto = parcComDesc();
    };


    /**
     * Metodo para calcular o valor da(s) parcela(s) sem desconto
     * 
     */
    function parcSemDesc() {
        somaSemJuro =
                (($scope.contrato.vlrParc * $scope.contrato.qntParc)
                        + $scope.contrato.vlrHon)
                + $scope.contrato.vlrGCA;


        parc = $scope.contrato.qntParc;
        if (parc == 1) {
            return somaSemJuro + $scope.contrato.vlrJuroParc1;
        } else if (parc == 2) {
            return somaSemJuro + $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2;
        } else if (parc == 3) {
            return somaSemJuro + $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2 + +$scope.contrato.vlrJuroParc3;

        }
    }
    ;

    /**
     * Metodo para calcular o valor da(s) parcela(s) com desconto
     * 
     */
    function parcComDesc() {
        somaVlrEstaveis = (($scope.contrato.vlrParc * $scope.contrato.qntParc)
                + $scope.contrato.vlrHon)
                + $scope.contrato.vlrGCA;

        if (parc == 1) {

            juroComDesc = ($scope.contrato.vlrJuroParc1 * $scope.contrato.vlrDescJuros) / 100;
            return (somaVlrEstaveis + $scope.contrato.vlrJuroParc1) - juroComDesc;
        } else if (parc == 2) {
            juroComDesc = (($scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2) * $scope.contrato.vlrDescJuros) / 100;
            return (somaVlrEstaveis + $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2) - juroComDesc;
        } else if (parc == 3) {
            juroComDesc = (($scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2 + $scope.contrato.vlrJuroParc3) * $scope.contrato.vlrDescJuros) / 100;
            return (somaVlrEstaveis + $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2 + $scope.contrato.vlrJuroParc3) - juroComDesc;

        }
        ;
    }
    ;

    /**
     * Metodo para escrever String de Parcela sem desconto
     * @returns {String|textoDesc|texto|qntDeParc|$scope.contrato.vlrHon|vlrHon|$scope.contrato.vlrDescJuros|Number|somaJuro|$scope.contrato.vlrJuroParc3|$scope.contrato.vlrJuroParc2|$scope.contrato.vlrJuroParc1|vlrJuros|vlrDesc|textoHon|textoJuros|textoGCA|vlrGCA|$scope.contrato.vlrGCA|$scope.contrato.totalComDesconto|vlrAcordo}
     */
    function textoParcSemDesc() {

        cifrao = " R$ ";
        texto = "Vlr Acordo " + cifrao + ".: ";

        if ($scope.contrato.totalComDesconto == null) {
            vlrAcordo = 0;
        } else {
            vlrAcordo = $scope.contrato.totalComDesconto;
        }

        textoHon = " Hon " + cifrao + ".: ";
        vlrHon = $scope.contrato.vlrHon;
        textoJuros = " Juros " + cifrao + ".: ";
        textoDesc = " Desc " + cifrao + ".: ";
        vlrDesc = " S/D";
        vlrJuros = "";

        if ($scope.contrato.qntParc == 1) {
            vlrJuros = $scope.contrato.vlrJuroParc1;
        } else if ($scope.contrato.qntParc == 2) {
            vlrJuros = $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2;
        } else if ($scope.contrato.qntParc == 3) {
            vlrJuros = $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2 + $scope.contrato.vlrJuroParc3;
        }

        textoGCA = " GCA " + cifrao + ".: ";
        vlrGCA = $scope.contrato.vlrGCA;

        qntDeParc = "";

        if ($scope.contrato.qntParc == 1) {
            qntDeParc = " " + $scope.contrato.qntParc + " Parcela ";
        } else if ($scope.contrato.qntParc == 2) {
            qntDeParc = " " + $scope.contrato.qntParc + " Parcelas ";
        } else if ($scope.contrato.qntParc == 3) {
            qntDeParc = " " + $scope.contrato.qntParc + " Parcelas ";
        }


        return texto + vlrAcordo
                + textoHon + vlrHon
                + textoJuros + vlrJuros
                + textoDesc + vlrDesc
                + textoGCA + vlrGCA
                + qntDeParc;
    }
    ;

    /**
     * Metodo para escrever String de Parcela(s) com desconto
     * @returns {String}
     */
    function textoParcComDesc() {
        cifrao = " R$ ";
        texto = "Vlr Acordo " + cifrao + ".: ";

        if ($scope.contrato.totalComDesconto == null) {
            vlrAcordo = 0;
        } else {
            vlrAcordo = $scope.contrato.totalComDesconto;
        }
        textoHon = " Hon " + cifrao + ".: ";
        vlrHon = $scope.contrato.vlrHon;
        textoJuros = " Juros " + cifrao + ".: ";
        textoDesc = " Desc " + cifrao + ".: ";
        vlrDesc = $scope.contrato.vlrDescJuros;
        vlrJuros = "";

        if ($scope.contrato.qntParc == 1) {
            vlrJuros = $scope.contrato.vlrJuroParc1 - (($scope.contrato.vlrJuroParc1 * $scope.contrato.vlrDescJuros) / 100);
        } else if ($scope.contrato.qntParc == 2) {

            somaJuro = $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2;
            vlrJuros = somaJuro - (((somaJuro * $scope.contrato.vlrDescJuros) / 100));
        } else if ($scope.contrato.qntParc == 3) {

            somaJuro = $scope.contrato.vlrJuroParc1 + $scope.contrato.vlrJuroParc2 + $scope.contrato.vlrJuroParc3;
            vlrJuros = somaJuro - ((somaJuro * $scope.contrato.vlrDescJuros) / 100);
        }

        textoGCA = " GCA.: ";
        vlrGCA = $scope.contrato.vlrGCA;

        qntDeParc = "";

        if ($scope.contrato.qntParc == 1) {
            qntDeParc = " " + $scope.contrato.qntParc + " Parcela ";
        } else if ($scope.contrato.qntParc == 2) {
            qntDeParc = " " + $scope.contrato.qntParc + " Parcelas ";
        } else if ($scope.contrato.qntParc == 3) {
            qntDeParc = " " + $scope.contrato.qntParc + " Parcelas ";
        }


        return texto + cifrao + vlrAcordo
                + textoHon + cifrao + vlrHon
                + textoJuros + cifrao + vlrJuros
                + textoDesc + vlrDesc + "% "
                + textoGCA + cifrao + vlrGCA
                + qntDeParc;
    }
    ;

    
    $scope.$watch('contrato.vlrParc', cpVlrParc);
    $scope.$watch('contrato.vlrHon', cpVlrHon);
    $scope.$watch('contrato.qntParc', cpQntParc);
}
;

function cobCalc($scope) {
    // $scope.totalSemDesconto = "test";
}



