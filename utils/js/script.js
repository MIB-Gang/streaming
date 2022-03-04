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

    $(".nav-fab").ready(() => {
        $(".nav-fab").click(() => {
            
        });
    });

    /* Wenn Scroll nicht oben, kriegt Navbar Klasse */
    $(window).scroll(() => {
        if($(this).scrollTop() > 50) {
            $("nav").addClass("nav-scroll");
        } else {
            $("nav").removeClass("nav-scroll");
        }
    });

} 