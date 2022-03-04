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

    /* $(".navbar").ready(function (){
        $(".navbar").mouseenter(function() {
            $("#navbar-expanded").animate({height:"15rem", opacity:"1"});
        });
        $("#navbar-expanded").mouseleave(function() {
            $("#navbar-expanded").animate({height:"0rem", opacity:"0"});
        });
    }); */

    $("nav").ready(() => {
        console.log(window.location.href);
        $(".nav-single").each(() => {
            if ($(this).prop("href") == "#Home") {
                $(this).addClass("nav-active"); /* $(this).parents("li").addClass("active"); */
            }
        });
    })

    $(window).scroll(() => {
        if($(this).scrollTop() > 50) {
            $("nav").addClass("nav-scroll");
        } else {
            $("nav").removeClass("nav-scroll");
        }
    });

} 