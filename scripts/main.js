var rc = "";
function chkIE() { if (document.all) { (rc); return false; } }
function chkNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) { (rc); return false; }
    }
}
if (document.layers)
{ document.captureEvents(Event.MOUSEDOWN); document.onmousedown = chkNS; }
else
{ document.onmouseup = chkNS; document.oncontextmenu = chkIE; }
document.oncontextmenu = new Function("return false")

function trim(inputStringTrim) {
    fixedTrim = "";
    lastCh = " ";
    for (x = 0; x < inputStringTrim.length; x++) {
        ch = inputStringTrim.charAt(x);
        if ((ch != " ") || (lastCh != " ")) { fixedTrim += ch; }
        lastCh = ch;
    }
    if (fixedTrim.charAt(fixedTrim.length - 1) == " ") {
        fixedTrim = fixedTrim.substring(0, fixedTrim.length - 1);
    }
    return fixedTrim;
}

function ChkDelete(Text) {
    var ConfirmDelete = window.confirm("Are you Sure you want to Delete this " + Text + "? \nNOTE: THIS CANNOT BE UNDONE! \n\nClick 'OK' to Confirm... \nClick 'Cancel' to Change your Mind...")
    if (ConfirmDelete) { return true }
    else { return false }
}

var winPop = null;
function NewWindow(mypage, myname, w, h, scroll, resizable) {
    if (w == '') { w = screen.width };
    if (h == '') { h = screen.height };
    if (h > screen.height) { h = screen.height };
    var winl = (screen.width - w) / 2;
    var wint = 0;     //(screen.height-h)/2;
    settings = 'height=' + h + ',width=' + w + ',top=' + wint + ',left=' + winl + ',scrollbars=' + scroll + ',toolbar=no,location=no,status=no,menubar=no,resizable=' + resizable + ',dependent=no'
    winPop = window.open(mypage, myname, settings)
    //window.open(mypage,myname,settings)
    //if(parseInt(navigator.appVersion) >= 4){winPop.window.focus();}
}

function MaxLen(elemID, maxLimit) {
    if (document.getElementById(elemID).value.length > maxLimit) {
        document.getElementById(elemID).value = document.getElementById(elemID).value.substring(0, maxLimit);
    }
}

function SetMaxImageWidth(picID, intWidth) {
    var img = document.getElementById(picID);
    var currWidth = img.width;
    if (currWidth > intWidth) {
        img.width = intWidth;
    }
}

function SetMaxImageWidthHeight(picID, intWidth, intHeight) {
    var img = document.getElementById(picID);
    var currWidth = img.width;
    var currHeight = img.height;
    if (currWidth > intWidth) {
        img.width = intWidth;
    }
    if (img.height > intHeight) {
        img.height = intHeight;
        var pc = (img.height / currHeight)
        img.width = (currWidth * pc)
    }
}

function cookieVal(cookieName) {
    thisCookie = document.cookie.split("; ");
    for (i = 0; i < thisCookie.length; i++) {
        if (cookieName == thisCookie[i].split("=")[0]) {
            return thisCookie[i].split("=")[1];
        }
    }
    return "";
}
function cookieVal(cookieName) {
    thisCookie = document.cookie.split("; ");
    for (i = 0; i < thisCookie.length; i++) {
        if (cookieName == thisCookie[i].split("=")[0]) {
            return thisCookie[i].split("=")[1];
        }
    }
    return "";
}

function ActivateTab(elOpen, elClosed, elTitleBold, elTitleReg, elTabBaseFront, elTabBaseBack) {
    document.getElementById(elOpen).style.position = "absolute";
    document.getElementById(elOpen).style.visibility = "hidden";
    document.getElementById(elClosed).style.position = "static";
    document.getElementById(elClosed).style.visibility = "visible";
    document.getElementById(elTitleBold).style.fontWeight = "bold";
    document.getElementById(elTitleReg).style.fontWeight = "";
    document.getElementById(elTabBaseFront).style.backgroundImage = "url('images/tab_base_open.gif')";
    document.getElementById(elTabBaseBack).style.backgroundImage = "url('images/tab_base.gif')";
}
function TabOpen(itemTab, itemDiv) {
    var lnk = document.getElementById(itemTab);
    var ul = lnk.parentNode;
    var items = ul.getElementsByTagName("li");

    var divContent = document.getElementById(itemDiv)
    var divContainer = divContent.parentNode;
    var divs = divContainer.getElementsByTagName("div");

    for (var i = 0; i < items.length; ++i) {
        if (items[i].id == itemTab) {
            items[i].setAttribute("class", "selectedTab");
        } else {
            items[i].setAttribute("class", "");
        }
    }

    for (var i = 0; i < divs.length; ++i) {
        if (divs[i].id == itemDiv) {
            divs[i].setAttribute("class", "DivOpen");
        } else {
            if (divs[i].id.indexOf("divTab") == 0) {
                divs[i].setAttribute("class", "DivClosed");
            }
        }
    }
}

function MenuBG(bgID, dir) {
    var cell = document.getElementById(bgID);
    if (dir == "over") {
        cell.style.backgroundColor = "#F6AB3F";
        cell.style.display = "block";
    } else {
        cell.style.backgroundColor = "";
        cell.style.display = "block";
    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }
}
function GTZero(ctl) {
    var el = document.getElementById(ctl);
    var val = trim(el.value);
    if ((val == "0") || (val == "")) {
        el.value = 1;
    }
}

var isNN = (navigator.appName.indexOf("Netscape") != -1);
function autoTab(input, len, e) {
    var keyCode = (isNN) ? e.which : e.keyCode;
    var filter = (isNN) ? [0, 8, 9] : [0, 8, 9, 16, 17, 18, 37, 38, 39, 40, 46];
    if (input.value.length >= len && !containsElement(filter, keyCode)) {
        input.value = input.value.slice(0, len);
        input.form[(getIndex(input) + 1) % input.form.length].focus();
    }
    function containsElement(arr, ele) {
        var found = false, index = 0;
        while (!found && index < arr.length)
            if (arr[index] == ele)
                found = true;
            else
                index++;
        return found;
    }
    function getIndex(input) {
        var index = -1, i = 0, found = false;
        while (i < input.form.length && index == -1)
            if (input.form[i] == input) index = i;
            else i++;
        return index;
    }
    return true;
}

function DisableSubmit(myButton, shortText, group) {
    // Client side validation
    if (group === undefined) {
        group = "";
    }
    if (typeof (Page_ClientValidate) == 'function') {
        if (Page_ClientValidate(group) == false)
        { return false; }
    }

    // disable the button
    myButton.disabled = true;
    
    if ((shortText === undefined) || (shortText == "")) {
        myButton.value = "Processing... Please Wait!";
    } else {
        myButton.value = shortText;
    }

    return true;
}

function preload() {
    var brochure = new Array();
    var pics = preload.arguments;
    var dir = appRoot + 'images/'
    for (i = 0; i < pics.length; i++) {
        brochure[i] = new Image();
        brochure[i].src = dir + pics[i];
        // uncomment next line for testing; click OK to continue loop and cancel to break
        //if(!confirm(brochure[i].src)) break;
        //alert(brochure[i].src);
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function CheckPhone(sender, args) {
    var IsRequired = (document.getElementById(sender.hidRequired).value == 'true');
    var AreaCode = trim(document.getElementById(sender.tbPhoneAreaCode).value);
    var Prefix = trim(document.getElementById(sender.tbPhonePrefix).value);
    var Suffix = trim(document.getElementById(sender.tbPhoneSuffix).value);
    var TotalLen = (AreaCode.length + Prefix.length + Suffix.length);
    var Phone = "";
    var Digit = "";
    if (TotalLen != 10) {
        if ((IsRequired == false) && (TotalLen == 0)) {
            args.IsValid = true;
            return;
        } else {
            args.IsValid = false;
            return;
        }
    } else {
        Phone = AreaCode.toString() + Prefix.toString() + Suffix.toString();
        for (var i = 1; i <= 10; i++) {
            Digit = Phone.substring(i - 1, i, 1).toString();
            if ((Digit != "0") && (Digit != "1") && (Digit != "2") && (Digit != "3") && (Digit != "4") && (Digit != "5") && (Digit != "6") && (Digit != "7") && (Digit != "8") && (Digit != "9")) {
                args.IsValid = false;
                return;
            }
        }
    }
    args.IsValid = true;
}

function chkDate(dateStr) {
    var validformat = /^\d{1,2}\/\d{1,2}\/\d{4}$/
    var returnval = false;
    if (!validformat.test(dateStr)) {
        returnval = false;
    } else {
        var monthfield = dateStr.split("/")[0]
        var dayfield = dateStr.split("/")[1]
        var yearfield = dateStr.split("/")[2]
        var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        if ((dayobj.getMonth() + 1 != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))
            returnval = false;
        else
            returnval = true;
    }
    return returnval
}
function IsDate(source, args) {
    if (chkDate(args.Value)) {
        args.IsValid = true;
    } else {
        args.IsValid = false;
    }
}

function GetXmlHttpObj() {
    var xmlHttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        var strName = "Msxml2.XMLHTTP"
        if (navigator.appVersion.indexOf("MSIE 5.5") >= 0) {
            strName = "Microsoft.XMLHTTP"
        }
        try {
            xmlHttp = new ActiveXObject(strName);
        }
        catch (e) {
            alert("Error! Scripting for ActiveX might be disabled.")
            xmlHttp = null;
        }
    }
    return xmlHttp;
}

function IsValidImg(source, args) {
    //var Types = new Array(".gif", ".jpg", ".jpeg", ".png")
    var Types = imgUplTypes.split(" ");
    var Upl = args.Value.toLowerCase();
    var UplLen = Upl.length;
    var UplExt;
    var ExtLen;
    var IsValid = false;

    for (i = 0; i < Types.length; i++) {
        ExtLen = Types[i].length;
        UplExt = Upl.substring((UplLen - ExtLen));
        if (Types[i] == UplExt) {
            IsValid = true;
            break;
        }
    }

    if (!IsValid) {
        var uplCtl = document.getElementById(source.controltovalidate);
        uplCtl.value = "";

        try {
            lblSuccess = source.controltovalidate.replace("_fileUp", "_lblSuccess");
            document.getElementById(lblSuccess).style.display = "none";
        } catch (e) {

        }
    }
    args.IsValid = IsValid;
}

function ClearUplErrors(ctlID) {
    var ctlStr = ctlID;
    var lblSizeErr = ctlStr.replace("_fileUp", "_lblSizeError");
    var lblSuccess = ctlStr.replace("_fileUp", "_lblSuccess");
    var lblAppErr = ctlStr.replace("_fileUp", "_lblAppErr");
    try {
        document.getElementById(lblSizeErr).style.display = "none";
    } catch (e) { }
    try {
        document.getElementById(lblSuccess).style.display = "none";
    } catch (e) { }
    try {
        document.getElementById(lblAppErr).style.display = "none";
    } catch (e) { }
}