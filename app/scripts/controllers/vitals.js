
app.directive('multiselectDropdown', [function() {
    return function(scope, element, attributes) {

        element = $(element[0]); // Get the element as a jQuery element

        // Below setup the dropdown:

        element.multiselect({
            option1: 123,
            option2: "abcd",
            // etc.
        })

        // Below maybe some additional setup
    }
}]);