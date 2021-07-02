// SEARCH QUERY AREA FROM INDEX.HTML






// EVENT LISTENERS FOR SEARCH BAR AND SEARCH FORMAT DROPDOWN

$('#search').on('click', function(event) {
    event.preventDefault();

    // build api query from search term and format inputs
    var searchTerm = $('#searchTerm').val();
    var searchFormat = $('#searchFormat').val();

    if (!searchTerm) {
        alert("Please enter a search term!");
        return
    };

    var apiBase = 'https://www.loc.gov';
    
    if (!searchFormat) {
        var apiRequest = apiBase + '/search/?q=' + searchTerm + '&fo=json';

        fetch(apiRequest)
        .then(response => response.json())
        .then(function (data) {
            console.log(data.results[0].description);
        });

    } else {
        var apiRequest = apiBase + '/' + searchFormat.replace(' ', '-') + '/?q=' + searchTerm + '&fo=json';
        console.log(apiRequest);
    };
});