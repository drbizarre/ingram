
// Update configuration to our liking
$( document ).on( "mobileinit", function() {

	$( "#envialo" ).click(function() {
		$("#suceso").hide();
	}); 

});
$( document ).ready(function() {
$('#form1').validate({
    rules: {
        correo: {
            required: true
        },
        suceso: {
            required: true
        }        
    },
    messages: {
        correo: {
            required: "Escribe tu correo."
        },   	
        suceso: {
            required: "Cuentanos la urgencia."
        }
    },
    errorPlacement: function (error, element) {
        error.appendTo(element.parent().prev());
    },
    submitHandler: function (form) {
    	$("#correo").val("");
    	$("#suceso").val("");
    	$.post( "http://whynot.mx/api/enviar", { correo: $("#correo").val(), mensaje: $("#suceso").val() })
.done(function( data ) {

});
$.get( "https://rest.nexmo.com/sms/json", { api_key: "dedd250e", api_secret: "b879f1e6", from: "WHYNOT", to: "526641108064", text: "haz recibido una nueva peticion de ayuda desde la aplicacion de movil de whynot"  } );

        $(':mobile-pagecontainer').pagecontainer('change', '#success', {
            reload: false
        });
        return false;
        
    }
});
});
