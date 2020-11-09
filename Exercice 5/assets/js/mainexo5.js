$ (document).ready (function (){
$ ('ul>li').css ('color', 'red'); 
});

$ (document).ready (function(){
    $("ul").children().css("color", "red"); /* tous les enfants de UL seront rouges */
}