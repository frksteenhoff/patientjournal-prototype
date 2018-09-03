$( document ).ready(function() {
    includeComponents();
});

// generate html components
function includeComponents() { 
    var components = $('[data-component]');
    $.each(components, function(){
        var file = 'dist/html/' + $(this).data('component') + '.html';
        $(this).load(file, function() {
            initClickEvents();
        });
    });
}