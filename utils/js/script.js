/** 
 * HAUPT-SCRIPTFILE
 * Bevor JQuery benutzt werden kann, wird die API erst geladen.
 * Danach wird der eigentlich JQuery-Code ausgeführt (script.onload).
 */
var script = document.createElement('script'); 
document.head.appendChild(script);    
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.onload = () => {


    /* Wenn Nav-Button geklickt, öffnet Nav als Fullscreen */
    $("body").ready(() => {
        $(".nav-fab").click(() => {
            if(!$("nav").is(":visible")) {
                $("nav").show();
                $(".nav-fab img").prop("src", "/assets/icons/icon_close.svg");
            } else {
                $("nav").hide();
                $(".nav-fab img").prop("src", "/assets/icons/icon_menu.svg");
            }
        });
    });

    /* Wenn Scroll nicht oben, kriegt Navbar Klasse */
    $(window).scroll(() => {
        if($(window).width() > 860) {
            $("nav").show();
        }
        if($(this).scrollTop() > 50) {
            $("nav").addClass("nav-scroll");
        } else {
            $("nav").removeClass("nav-scroll");
        }
    });

    

} 