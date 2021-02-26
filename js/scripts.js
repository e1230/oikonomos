// JavaScript Document
function formularioAparece(){
        $("#form-credito").collapse('show');
}
$(document).ready(function(){
        $(".btn-primary").click(function(){
                //$("#barra-carga").collapse('show');
                animar();
                setTimeout(formularioAparece,4000);
                $('#boton-buscar').hide();
                $('#slc').hide();
        });
        $("#slc").change(function() {
                $( "#boton-buscar" ).prop( "disabled", false );
        });
        $("#form2").click(function(){
                $("#formulario").collapse('show');
        });
});


$('.carousel').carousel({
        interval: 2000
})

function animar(){
        document.getElementById("barra-carga").classList.toggle("final");
}

