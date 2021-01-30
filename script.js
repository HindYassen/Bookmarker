

var BookMarkerList;
if (localStorage.getItem("BookMarkerItems") == null)
    BookMarkerList = [];
else {
    BookMarkerList = JSON.parse(localStorage.getItem("BookMarkerItems"));
    display();
}

function addbookmarker() {
    var Bookmarker = document.getElementById('Bookmark').value;
    var url = document.getElementById('url').value;

    var Bookmarker_flag = check_name(Bookmarker);
    var url_flag = check_url(url);
    var Bookmarker_isExist = isNameExist(Bookmarker);
    var url_isExist = isurlExist(url);

    if (Bookmarker_flag && url_flag && Bookmarker_isExist && url_isExist) {
        hide_name();
        hide_url();
        hide_name_exist();
        hide_url_exist();
        var Book = {
            BookMarkerValue: Bookmarker,
            urlValue: url,
        };
        BookMarkerList.push(Book);
        localStorage.setItem("BookMarkerItems", JSON.stringify(BookMarkerList));
        Reset();
        display();
    }
    else {
        if (!Bookmarker_flag || !url_flag || !Bookmarker_isExist || !url_isExist) {
            hide_name();
            hide_url();
            hide_name_exist();
            hide_url_exist();
        }
        if (!Bookmarker_flag) {
            show_name();
        }
        if (!url_flag) {
            show_url();
        }
        if (!Bookmarker_isExist) {
            show_name_exist();
        }
        if (!url_isExist) {
            show_url_exist();
        }
    }


}
function display() {
    var container = ``;
    for (var i = 0; i < BookMarkerList.length; i++) {
        container += `<tr>
        <td>`+ i + `</td>
        <td>`+ BookMarkerList[i].BookMarkerValue + `</td>
        <td>`+ BookMarkerList[i].urlValue + `	</td>
        <td> <button onclick="visit_Bookmarker(`+ i + `)" class="btn btn-primary">visit</button> </td>
        <td> <button onclick="delete_Bookmarker(`+ i + `)" class="btn btn-danger">delete</button> </td>
    </tr>
`
    }
    document.getElementById('tableBody').innerHTML = container;
}
function visit_Bookmarker(BookmarkerIndex) {
    var urlValue = BookMarkerList[BookmarkerIndex].urlValue;
    if (urlValue.search(".com") == -1)
        window.location.assign("http://www." + urlValue + ".com");
    else
        window.location.assign("http://www." + urlValue + "");


}
function delete_Bookmarker(BookmarkerIndex) {
    BookMarkerList.splice(BookmarkerIndex, 1);
    localStorage.setItem("BookMarkerItems", JSON.stringify(BookMarkerList));
    display();
}
function Reset() {
    document.getElementById('Bookmark').value = "";
    document.getElementById('url').value = "";


}


function check_name(Bookmarker) {
    if (Bookmarker == null || Bookmarker == '')
        return false;
    else
        return true;
}
function check_url(url) {
    if (url == null || url == '')
        return false;
    else
        return true;

}
function isNameExist(Bookmarker) {
    if (BookMarkerList != null) {
        var count = 0;
        for (var i = 0; i < BookMarkerList.length; i++) {
            if (BookMarkerList[i].BookMarkerValue == Bookmarker) {
                count++;
                break;
            }
        }
        if (count > 0)
            return false;
        else
            return true;
    }
}
function isurlExist(url) {
    if (BookMarkerList != null) {
        var count = 0;
        for (var i = 0; i < BookMarkerList.length; i++) {
            if (BookMarkerList[i].urlValue == url) {
                count++;
                break;
            }
        }
        if (count > 0)
            return false;
        else
            return true;
    }
}
function show_name() {
    var element = document.getElementById("name-alert");
    element.classList.remove("d-none");
    element.classList.add("d-block");
}
function hide_name() {
    var element = document.getElementById("name-alert");
    element.classList.remove("d-block");
    element.classList.add("d-none");
}

function show_url() {
    var element = document.getElementById("url-alert");
    element.classList.remove("d-none");
    element.classList.add("d-block");
}
function hide_url() {
    var element = document.getElementById("url-alert");
    element.classList.remove("d-block");
    element.classList.add("d-none");
}

function show_name_exist() {
    var element = document.getElementById("exist-alert");
    element.classList.remove("d-none");
    element.classList.add("d-block");
}
function hide_name_exist() {
    var element = document.getElementById("exist-alert");
    element.classList.remove("d-block");
    element.classList.add("d-none");
}


function show_url_exist() {
    var element = document.getElementById("exist-url-alert");
    element.classList.remove("d-none");
    element.classList.add("d-block");
}
function hide_url_exist() {
    var element = document.getElementById("exist-url-alert");
    element.classList.remove("d-block");
    element.classList.add("d-none");
}

