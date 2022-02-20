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
    
    $(document).ready(function (){
        $.get("../utils/navbar.html", function(content){
            $("body").prepend(content);
        });
    });

} 