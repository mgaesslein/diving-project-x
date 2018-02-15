


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


$('section.awSlider .carousel').carousel({
    pause: "hover",
    interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
    var bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src', bscn);
});

