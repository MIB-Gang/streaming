/** 
 * HAUPT-SCRIPTFILE
 * Bevor JQuery benutzt werden kann, wird die API erst geladen.
 * Danach wird der eigentlich JQuery-Code ausgeführt (script.onload).
 */
var script = document.createElement('script'); 
document.head.appendChild(script);    
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
script.onload = function(){

    $(".navbar").ready(function (){
        $(".navbar").mouseenter(function() {
            $("#navbar-expanded").animate({height:"15rem", opacity:"1"});
        });
        $("#navbar-expanded").mouseleave(function() {
            $("#navbar-expanded").animate({height:"0rem", opacity:"0"});
        });
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $(".navbar").addClass("navbar-scroll");
        } else {
            $(".navbar").removeClass("navbar-scroll");
        }
    });

} 