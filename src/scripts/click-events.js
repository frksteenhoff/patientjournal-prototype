// initialize click events
function initClickEvents() {    
    //////////////////////////////////////////////////////////////
    // HOME
    //////////////////////////////////////////////////////////////
    
    $( "#kid-mode" ).off().click(function() {
        showComponent("kid-measurement");
    });

    $( "#parent-mode" ).off().click(function() {
        showComponent("parent-setup");
    });

    $( "#ambulance-mode" ).off().click(function() {
        showComponent("ambulance-mode");
    });

    $( getDataComponent("home") + " .modal .submit" ).off().click(function() {
        $( getDataComponent("home") + " .modal" ).addClass("hidden");
    });

    //////////////////////////////////////////////////////////////
    // PATIENT (all files with 'kid')
    //////////////////////////////////////////////////////////////

    $( ".kid.subtitle" ).off().click(function() {
        showComponent("home");
    });

    // PATIENT BOTTOM MENU
    $( ".kid-monitor-tab" ).off().click(function() {
        showComponent("kid-monitor");
    });

    // PATIENT MONITOR
    $( getDataComponent("kid-monitor") + " #monitor-btn" ).off().click(function() {
        $( getDataComponent("kid-monitor") + " .modal" ).removeClass("hidden");
        $( getDataComponent("kid-monitor") + "#left-action-btn" ).removeClass("hidden");
    });

    $( getDataComponent("kid-monitor") + " .submit" ).off().click(function() {
        $( getDataComponent("kid-monitor") + " .modal" ).addClass("hidden");
        showComponent("kid-measurement");
    });

    // PATIENT MAIN
    $( getDataComponent("kid-measurement") + " .back-btn" ).off().click(function() {
        $( getDataComponent("kid-measurement")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    // LÆGE SETUP
    $( getDataComponent("kid-measurement") + " .submit" ).off().click(function() {
        $( getDataComponent("kid-measurement")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    //////////////////////////////////////////////////////////////
    // LÆGE (all files with 'parent')
    //////////////////////////////////////////////////////////////

    // TOP BAR
    $( ".parent.subtitle" ).off().click(function() {
            currentMode = "kid";
            showComponent("home");
    });

    // LÆGE BOTTOM MENU
    $( ".parent-status-tab" ).off().click(function() {
        showComponent("parent-status");
    });

    // LÆGE SETUP
    $( getDataComponent("parent-setup") + " .submit" ).off().click(function() {
        kid.name = $( ".setup-name" ).val();
        kid.age = $( ".setup-age" ).val();
        kid.regimenType = $( ".setup-regimen" ).val();
        kid.icRatio = $( ".setup-ic" ).val();
        kid.isTeen = $('.setup-teen').is(":checked");
        $( getDataComponent("parent-setup") + "#left-action-btn" ).removeClass("hidden");
        showComponent("parent-status");
    });

    // LÆGE -> MAIN
    $( getDataComponent("parent-setup") + " .back-btn" ).off().click(function() {
        $( getDataComponent("parent-setup")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    $( getDataComponent("parent-status") + " .back-btn" ).off().click(function() {
        $( getDataComponent("parent-status")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    //////////////////////////////////////////////////////////////
    // AMBULANCE
    //////////////////////////////////////////////////////////////

    $( ".ambulance.subtitle" ).off().click(function() {
        showComponent("home");
    });

    // AMBULANCE BOTTOM MENU
    $( ".ambulance-status-tab" ).off().click(function() {
        // Not yet implemented
        showComponent("ambulance-status");
    });

    $( ".ambulance-settings-tab" ).off().click(function() {
        // Not yet implemented
        showComponent("ambulance-settings");
    });

    // AMBULANCE -> MAIN
    $( getDataComponent("ambulance-mode") + " .back-btn" ).off().click(function() {
        $( getDataComponent("ambulance-mode")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });
}