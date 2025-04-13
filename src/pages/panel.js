window.onload = async () => {
    checkUser();
}

checkUser = () => {
    const currentUser = getCookie("currentUser");
    if (currentUser == undefined ||
        currentUser == null ||
        currentUser == "") {
        location.href = "../login.html";
    }
}

logoutSystem = () => {
    debugger;
    setCookie("currentUser", null, 0);
    setCookie("token", null, 0);
    location.href = "../login.html";
}