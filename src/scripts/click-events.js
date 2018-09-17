function initClickEvents() {    
    //////////////////////////////////////////////////////////////
    // HOME
    //////////////////////////////////////////////////////////////
    
    $( "#patient-mode" ).off().click(function() {
        showComponent("patient-measurement");
    });

    $( "#doctor-mode" ).off().click(function() {
        showComponent("doctor-setup");
    });

    $( "#ambulance-mode" ).off().click(function() {
        showComponent("ambulance-mode");
    });

    $( getDataComponent("home") + " .modal .submit" ).off().click(function() {
        $( getDataComponent("home") + " .modal" ).addClass("hidden");
    });

    //////////////////////////////////////////////////////////////
    // PATIENT (all files with 'patient')
    //////////////////////////////////////////////////////////////

    $( ".patient.subtitle" ).off().click(function() {
        showComponent("home");
    });

    // PATIENT BOTTOM MENU
    $( ".patient-monitor-tab" ).off().click(function() {
        showComponent("patient-monitor");
    });

    // PATIENT MONITOR
    $( getDataComponent("patient-monitor") + " #monitor-btn" ).off().click(function() {
        $( getDataComponent("patient-monitor") + " .modal" ).removeClass("hidden");
        $( getDataComponent("patient-monitor") + "#left-action-btn" ).removeClass("hidden");
    });

    $( getDataComponent("patient-monitor") + " .submit" ).off().click(function() {
        $( getDataComponent("patient-monitor") + " .modal" ).addClass("hidden");
        measureGlucoseLevel();
        $( getDataComponent("patient-measurement") + " .face img").attr('src', measurements[0].face);
        $( getDataComponent("patient-measurement") + " .feedback .image img").attr('src', measurements[0].feedbackImg);
        $( getDataComponent("patient-measurement") + " .feedback .action").html(measurements[0].feedbackAction);
        patient.hasNewMeasurement = true;
        showComponent("patient-measurement");
    });

    // PATIENT MAIN
    $( getDataComponent("patient-measurement") + " .back-btn" ).off().click(function() {
        $( getDataComponent("patient-measurement")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    $( getDataComponent("patient-measurement") + " .submit" ).off().click(function() {
        $( getDataComponent("patient-measurement")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    //////////////////////////////////////////////////////////////
    // DOCTOR (all files with 'doctor')
    //////////////////////////////////////////////////////////////

    // TOP BAR
    $( ".doctor.subtitle" ).off().click(function() {
            showComponent("home");
    });

    // BOTTOM MENU
    $( ".doctor-status-tab" ).off().click(function() {
        showComponent("doctor-status");
    });


    // SETUP
    $( getDataComponent("doctor-setup") + " .submit" ).off().click(function() {
        patient.name = $( ".setup-name" ).val();
        patient.age = $( ".setup-age" ).val();
        patient.regimenType = $( ".setup-regimen" ).val();
        patient.icRatio = $( ".setup-ic" ).val();
        patient.isTeen = $('.setup-teen').is(":checked");
        $( getDataComponent("doctor-setup") + "#left-action-btn" ).removeClass("hidden");
        showComponent("doctor-status");
    });

    // LÆGE -> MAIN
    $( getDataComponent("doctor-setup") + " .back-btn" ).off().click(function() {
        $( getDataComponent("doctor-setup")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    $( getDataComponent("doctor-status") + " .back-btn" ).off().click(function() {
        $( getDataComponent("doctor-status")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });

    //////////////////////////////////////////////////////////////
    // AMBULANCE
    //////////////////////////////////////////////////////////////

    $( ".ambulance.subtitle" ).off().click(function() {
        showComponent("home");
    });

    // BOTTOM MENU
    $( ".ambulance-status-tab" ).off().click(function() {
        // Not yet implemented
        showComponent("ambulance-status");
    });

    $( ".ambulance-settings-tab" ).off().click(function() {
        // Not yet implemented
        showComponent("ambulance-settings");
    });

    // MAIN
    $( getDataComponent("ambulance-mode") + " .back-btn" ).off().click(function() {
        $( getDataComponent("ambulance-mode")).addClass("hidden");
        $( getDataComponent("home")).addClass("hidden");
        showComponent("home");
    });
}