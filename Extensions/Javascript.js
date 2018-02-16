


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}






// IMAGE


$(document).ready(function() {
    // $('[data-toggle="toggle"]').change(function(){
    //     $(this).parents().next('.hide').toggle();
    // });
    $('table.courses').find("tr.labels").on("click", function () {
        $(this).nextUntil('tr.labels').toggle();
    });
});


// maps


