// initialize click events
function initClickEvents() {    
    //////////////////////////////////////////////////////////////
    // HOME
    //////////////////////////////////////////////////////////////
    
    $( "#kid-mode" ).off().click(function() {
        showComponent("kid-measurement");
        currentMode = "kid";
    });

    $( "#parent-mode" ).off().click(function() {
        showComponent("parent-setup");
        currentMode = "parent";
    });

    $( "#ambulance-mode" ).off().click(function() {
        showComponent("ambulance-mode");
        currentMode = "ambulance";
    });

    $( getDataComponent("home") + " .modal .submit" ).off().click(function() {
        $( getDataComponent("home") + " .modal" ).addClass("hidden");
    });

    //////////////////////////////////////////////////////////////
    // PATIENT
    //////////////////////////////////////////////////////////////

    $( ".kid.subtitle" ).off().click(function() {
        currentMode = "parent";
        showComponent("parent-status");
    });

    // PATIENT BOTTOM MENU
    $( ".kid-monitor-tab" ).off().click(function() {
        showComponent("kid-monitor");
    });

    // KID MONITOR
    $( getDataComponent("kid-monitor") + " #monitor-btn" ).off().click(function() {
        $( getDataComponent("kid-monitor") + " .modal" ).removeClass("hidden");
    });

    $( getDataComponent("kid-monitor") + " .submit" ).off().click(function() {
        $( getDataComponent("kid-monitor") + " .modal" ).addClass("hidden");
        measureGlucoseLevel();
        $( getDataComponent("kid-measurement") + " .face img").attr('src', measurements[0].face);
        $( getDataComponent("kid-measurement") + " .feedback .image img").attr('src', measurements[0].feedbackImg);
        $( getDataComponent("kid-measurement") + " .feedback .action").html(measurements[0].feedbackAction);
        kid.hasNewMeasurement = true;
        showComponent("kid-measurement");
    });

    // PATIENT MEASUREMENT
    $( getDataComponent("kid-measurement") + " .back-btn" ).off().click(function() {
        $( getDataComponent("kid-measurement") + " .measurement-loading").removeClass("hidden");
        showComponent("kid-monitor");
    });

    //////////////////////////////////////////////////////////////
    // LÆGE
    //////////////////////////////////////////////////////////////

    // TOP BAR
    $( ".parent.subtitle" ).off().click(function() {
        if ( kid.active) {
            currentMode = "kid";
            showComponent("kid-monitor");
        }
    });

    // LÆGE BOTTOM MENU
    $( ".parent-status-tab" ).off().click(function() {
        showComponent("parent-status");
    });

    $( ".parent-settings-tab" ).off().click(function() {
        showComponent("parent-settings");
    });

        
    $( ".parent-history-tab" ).off().click(function() {
      showComponent("parent-history");
    });

    // LÆGE SETUP
    $( getDataComponent("parent-setup") + " .submit" ).off().click(function() {
        kid.name = $( ".setup-name" ).val();
        kid.age = $( ".setup-age" ).val();
        kid.regimenType = $( ".setup-regimen" ).val();
        kid.icRatio = $( ".setup-ic" ).val();
        kid.isTeen = $('.setup-teen').is(":checked");
        showComponent("parent-status");
    });
    
    // LÆGE SETTINGS
    $( getDataComponent("parent-settings") + " .edit-btn" ).off().click(function() {
        $( getDataComponent("parent-settings") + " .save-btn").removeClass('hidden');
        $( getDataComponent("parent-settings") + " .edit-btn").addClass('hidden');
        $( getDataComponent("parent-settings") + " .input").removeClass('hidden');
        $( getDataComponent("parent-settings") + " .detail-value").addClass('hidden');
    });

    $( getDataComponent("parent-settings") + " .save-btn" ).off().click(function() {
        kid.name = $( getDataComponent("parent-settings") + " .settings-input-name" ).val();
        kid.age = $( getDataComponent("parent-settings") + " .settings-input-age" ).val();
        kid.regimenType = $( getDataComponent("parent-settings") + " .settings-input-regimen" ).val();
        kid.icRatio = $( getDataComponent("parent-settings") + " .settings-input-ic" ).val();

        $( getDataComponent("parent-settings") + " .settings-name").html(kid.name);
        $( getDataComponent("parent-settings") + " .settings-age").html(kid.age);
        $( getDataComponent("parent-settings") + " .settings-regimen").html(kid.regimenType);
        $( getDataComponent("parent-settings") + " .settings-ic").html(kid.icRatio);

        $( getDataComponent("parent-settings") + " .save-btn").addClass('hidden');
        $( getDataComponent("parent-settings") + " .edit-btn").removeClass('hidden');
        $( getDataComponent("parent-settings") + " .input").addClass('hidden');
        $( getDataComponent("parent-settings") + " .detail-value").removeClass('hidden');
    });

    $( getDataComponent("parent-settings") + " .settings-teen" ).off().change(function() {
        kid.isTeen = $('.settings-teen').is(":checked");
    });

    //////////////////////////////////////////////////////////////
    // AMBULANCE
    //////////////////////////////////////////////////////////////

    $( ".ambulance.subtitle" ).off().click(function() {
        currentMode = "ambulance";
        showComponent("ambulance-status");
    });

    // AMBULANCE BOTTOM MENU
    $( ".ambulance-status-tab" ).off().click(function() {
        showComponent("ambulance-status");
    });

    $( ".ambulance-settings-tab" ).off().click(function() {
        showComponent("ambulance-settings");
    });
}