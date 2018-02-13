


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




Query(document).ready(function ($) {

    // auto slide
    /*
    $('#checkbox').ready(function(){
      setInterval(function () {
          moveRight();
      }, 5000);
    });
    */



    // define variants
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();

    // number of li
    var slideCount = $('#slider ul li').length;
    /* whole width of ul
       is number of li by width of li */
    var sliderUlWidth = slideCount * slideWidth;



    // preparation
    /* firstly,
       the window size of the slider
       is div over ul, equal
       to the default CSS */
    $('#slider').css({ width: slideWidth, height: slideHeight });
    /* secondary,
       apply the whole ul width to ul,
       move the whole ul to the left.
       marginLeft is shorthand.
       of margin-left, in jQuery */
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    /* finally,
       prepend the last li to the first.
       without this,
       the second li will appear
       at the first.
       */
    $('#slider ul li:last-child').prependTo('#slider ul');



    // define finctions
    /* prepend the last to first,
       append the first to last */
    function lastToFirst() {
        $('#slider ul li:last-child').prependTo('#slider ul');
    }
    function firstToLast() {
        $('#slider ul li:first-child').appendTo('#slider ul');
    }

    /* move to left */
    function moveToLeft() {
        /* firstly, move by animate.
           CSS is modified by this */
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            /* then, in callback,
               adjust li order,
               and cancel modified CSS*/
            lastToFirst();
            $('#slider ul').css('left', '');
        });
    };
    /* move to right, contraly */
    function moveToRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            firstToLast();
            $('#slider ul').css('left', '');
        });
    };



    // finally, apply functions to event
    $('a.control_prev').click(function () {
        moveToLeft();
    });
    $('a.control_next').click(function () {
        moveToRight();
    });



    // end of the whole script
});    