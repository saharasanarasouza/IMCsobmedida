( função ( ) {
    janela . onload  =  function ( )  {
        $ form  =  document . getElementsByTagName ( 'formulário' ) [ 0 ] ;
        var  $ limpar  =  documento . getElementById ( 'limpar' ) ;
        var  $ mostar_condicao_fisica  =  document . formulários [ 'calculo_imc' ] . mostar_condicao_fisica ;

        $ form . addEventListener ( "enviar" ,  mostrarIMC ) ;          
        $ mostar_condicao_fisica . addEventListener ( 'alterar' ,  mostrarIMC )
                
        $ limpar . addEventListener ( 'click' ,  function ( ) {
            var  $ mostra_imc  =  document . getElementById ( "mostrar_imc" ) ;
            $ mostra_imc . textContent  =  '' ;
        } ) ;
    }

    function  calcularImc ( peso ,  altura )  {
        var  imc  =  peso  /  ( altura  *  altura ) ;
        return  imc ;
    }

    função  classificarImc ( imc )  {
        var  classificao 
        if  ( imc  <=  18,5 )  {
            classificao  =  "abaixo do peso" ;
        }
        else  if  ( imc  > =  18,6  &&  imc  <  25 )  {
            classificao  =  "sem peso Ideal" ;
        }
        else  if  ( imc  > =  25  &&  imc  <  30 )  {
            classificao  =  "levemente acima do peso" ;
        }
        else  if  ( imc  > =  30  &&  imc  <  35 )  {
            classificao  =  "com obesidade grau I" ;
        }
        else  if  ( imc  > =  35  &&  imc  <  40 )  {
            classificao  =  "com obesidade grau II" ;
        }
        else  if  ( imc  > =  40 )  {
            classificao  =  "com obesidade grau III" ;
        }
        return  classificao ;
    }

    function  mostrarIMC ( evento )  {    
        evento . preventDefault ( ) ;
        
        var  $ nome  =  documento . formulários [ 'calculo_imc' ] . nome ;
        var  $ peso  =  documento . formulários [ 'calculo_imc' ] . peso ;
        var  $ altura  =  documento . formulários [ 'calculo_imc' ] . altura ;
        var  $ mostrar_nome  =  documento . formulários [ 'calculo_imc' ] . mostrar_nome ;
        var  $ mostra_imc  =  document . getElementById ( "mostrar_imc" ) ;    
        
        var  imc  =  calcularImc ( $ peso . value ,  $ altura . value ) . paraFixado ( 2 ) ;
        
        if ( $ nome . value  ! =  ''  &&  $ peso . value  ! =  ''  &&  $ altura . value  ! =  ''  &&  $ form . checkValidity ( ) )  {
        
            if  ( $ mostrar_nome . value  ==  0  &&  mostar_condicao_fisica . value  ==  0 )
                $ mostra_imc . textContent  =  $ nome . value  +  ", seu IMC é"  + imc + ", você está" + classificarImc ( imc ) + "." ;       
            
            else  if ( $ mostrar_nome . value  ==  1  &&  mostar_condicao_fisica . value  ==  0 ) 
                $ mostra_imc . textContent  =  "Seu IMC é"  + imc + ", você está" + classificarImc ( imc ) + "." ;
            
            else  if  ( $ mostrar_nome . value  ==  0  &&  mostar_condicao_fisica . value  ==  1 )
                $ mostra_imc . textContent  =  $ nome . valor  +  ", seu IMC é"  + imc ;
            
            else  if ( $ mostrar_nome . value  ==  1  &&  mostar_condicao_fisica . value  ==  1 ) 
                $ mostra_imc . textContent  =  "Seu IMC é"  + imc ;
        }      
        function  calcularIMC ( evento )  {    
        evento . preventDefault ( ) ;
        
        var  $ nome  =  documento . getElementById [ 'calcular_imc' ] . nome ;
        var  $ peso  =  documento . getElementById [ 'calcular_imc' ] . peso ;
        var  $ altura  =  documento . getElementById [ 'calcular_imc' ] . altura ;
        var  $ mostrar_nome  =  getElementById . formulários [ 'calcular_imc' ] . mostrar_nome ;
        var  $ mostra_imc  =  document . getElementById ( "mostrar_imc" ) ;    
          }
          resultado.textContent= $ {nome} Seu IMC é {mostra_IMC}
} ) ( ) ;