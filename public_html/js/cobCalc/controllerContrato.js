/* 
 * 
 */


                                    function dadosContrato($scope) {
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

                                        var cpVlrParc = function() {
                                            $scope.contrato.vlrHon = (($scope.contrato.vlrParc) * 10) / 100;

                                            $scope.contrato.totalSemDesconto = parcSemDesc();
                                            $scope.contrato.totalComDesconto = parcComDesc();

                                        };

                                        var cpVlrHon = function() {

                                        };

                                        var cpQntParc = function() {
                                            $scope.contrato.vlrHon = ((((($scope.contrato.vlrParc) * 10) / 100)) * $scope.contrato.qntParc);

                                            $scope.contrato.totalSemDesconto = parcSemDesc();
                                            $scope.contrato.totalComDesconto = parcComDesc();

                                            $scope.contrato.textoSemDesc = textoParcSemDesc();
                                            $scope.contrato.textoComDesc = textoParcComDesc();
                                        };


                                        var cpVlrGCA = function() {
                                            $scope.contrato.totalSemDesconto = parcSemDesc();
                                            $scope.contrato.totalComDesconto = parcComDesc();
                                        };
                                        var cpVlrDescJuros = function() {
                                            $scope.contrato.totalComDesconto = parcComDesc();
                                        };

                                        var cpVlrJuroParc1 = function() {
                                            $scope.contrato.totalSemDesconto = parcSemDesc();
                                            $scope.contrato.totalComDesconto = parcComDesc();
                                        };
                                        var cpVlrJuroParc2 = function() {
                                            $scope.contrato.totalSemDesconto = parcSemDesc();
                                            $scope.contrato.totalComDesconto = parcComDesc();
                                        };
                                        var cpVlrJuroParc3 = function() {
                                            $scope.contrato.totalSemDesconto = parcSemDesc();
                                            $scope.contrato.totalComDesconto = parcComDesc();
                                        };

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

                                        $scope.contrato.limparDados = function() {
                                            $scope.contrato.vlrGCA = 200;
                                        };

                                        $scope.$watch('contrato.vlrParc', cpVlrParc);
                                        $scope.$watch('contrato.vlrHon', cpVlrHon);
                                        $scope.$watch('contrato.qntParc', cpQntParc);
                                    }
                                    ;

                                    function cobCalc($scope) {
                                        // $scope.totalSemDesconto = "test";
                                    }



