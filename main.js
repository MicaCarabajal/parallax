$(document).ready(function(){  //se hace para que el codigo cargue hasta que haya finalizado cargar la pagina
    $(window).scroll(function(){//detecta cuando el usuario mueve el scroll
        var barra = $(window).scrollTop(); //posicion del scroll
        var posicion = barra * 0.10; //el movimiento que va a tener el fondo
        $('body').css({
            'background-position': '0 -' + posicion + 'px'//cuando queremos modificar el B-P cuando hagamos scroll. El 0 seria el valor de izq y der, el - seria para que vaya de arriba para abajo
            //background-position: 0 -100px; es lo mismo que escribimos arriba
            // el 0 - (el menos lo que hace es que vaya de abajo hacia arriba, si lo quitamos va ir de arriba para abajo)
        });
    });   
});