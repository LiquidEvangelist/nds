$(document).ready(function () {
    var isLoaded = false;
    var ua = navigator.userAgent;
    var isOpen = false;
    var isMouseDown = false;
    var winH = $(window).height();
    var winW = $(window).width();

    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    function touch() {
        if ((is_touch_device()) || ua.match(/(iPhone|iPod|iPad)/) || ua.match(/BlackBerry/) || ua.match(/Android/)) {
            return true;
        } else {
            return false;
        }
    }

    $("#mnu_icon").click(function () {
        var dropMenu = $("#menu_drop_items");
        dropMenu.slideToggle("slow", function () {
        });
    });
    $("#menu_drop").focusout(function () {
       // mousedown event fires before the blur
        var dropMenu = $("#menu_drop_items");
        if (isMouseDown) { // cancel the blur event
            isMouseDown = false;
        }
        else { // blur event is okay
            dropMenu.css("display", "none");
        }
    });
    $(".menu").mousedown(function () {
        isMouseDown = true;
    });

    $('.popcal').datetimepicker({
        timepicker: false,
        format: 'm/d/Y',
        closeOnDateSelect: true,
        allowBlank: true,
        todayButton: true,
        validateOnBlur: false
    });

    $(window).resize(function () {
        var winHNew = $(window).height();
        var winWNew = $(window).width();
        var widthChanged = (winW != winWNew);
        if ($('#menu_drop_items').is(":visible") && (widthChanged)) {
            $('#menu_drop_items').hide();
        }
        winH = $(window).height();
        winW = $(window).width();

        //setFooter();
    });

    $(window).load(function () {
        //setFooter();
        isLoaded = true;
    });

});

function noSpacesField(ctl) {
    ctl.val(ctl.val().replace(/ +?/g, ''));
    ctl.val(ctl.val().replace('\t', ''));
}
function loadBalloon(balloonID) {
    var balloon = $("[id*=" + balloonID + "]");
    var h = balloon.height();
    h += 52; //img=22;padding=30
    //var px = "-" + h + "px";
    balloon.css("top", "-" + h + "px");
    balloon.show();
}
function unloadBalloon(balloonID) {
    var balloon = $("[id*=" + balloonID + "]");
    balloon.hide();
}
function getAjaxP1(MethodPath, Param1, Param1Val) {
    var xmlhttp = GetXmlHttpObj();
    xmlhttp.open("POST", MethodPath, false);
    xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xmlhttp.send("{" + Param1 + ":'" + Param1Val + "'}");
    var objJSON = JSON.parse(xmlhttp.responseText);
    return objJSON.d;
}
function getAjaxP2(MethodPath, Param1, Param1Val, Param2, Param2Val) {
    var xmlhttp = GetXmlHttpObj();
    xmlhttp.open("POST", MethodPath, false);
    xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xmlhttp.send("{" + Param1 + ":'" + Param1Val + "'," + Param2 + ":'" + Param2Val + "'}");
    var objJSON = JSON.parse(xmlhttp.responseText);
    return objJSON.d;
}
function popcal(calFieldID) {
    var calField = $(eval(calFieldID));
    calField.datetimepicker('show');
}