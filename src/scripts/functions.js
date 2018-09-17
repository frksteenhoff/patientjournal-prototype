// hide the active component and show the selected
function showComponent(component) {
    $(".active").removeClass("active").addClass("hidden");
    $(getDataComponent(component)).addClass("active").removeClass("hidden");
}

// show component like a modal on top of the other
function showModal(component) {
    $(getDataComponent(component)).addClass("active").removeClass("hidden");
}

// get component reference value
function getDataComponent(component) {
    return "[data-component=" + component + "]";
}

// show menu in patient mode only if the patient is teen
function showMenu(component) {
    $( getDataComponent(component) + " .footer" ).removeClass("hidden");
}