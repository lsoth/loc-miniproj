// SEARCH QUERY AREA FROM INDEX.HTML






// EVENT LISTENERS FOR SEARCH BAR AND SEARCH FORMAT DROPDOWN

$('#SEARCHBUTTON').on('click', function () {
    // build api query from search term and format inputs
    var searchTerm = $('#SEARCHBAR').val();
    var searchFormat = $('#SEARCHFORMAT').val();


    if (!searchTerm) {
        alert("Please enter a search term!");
        return
    };

    var apiBase = 'https://www.loc.gov';
    
    if (!searchFormat) {
        var apiRequest = apiBase + '/search/?q=' + searchTerm.replace(' ', '-') + '&fo=json';
        console.log(apiRequest);
    } else {
        var apiRequest = apiBase + '/' + searchFormat.replace(' ', '-') + '/?q=' + searchTerm.replace(' ', '-') + '&fo=json';
        console.log(apiRequest);
    }
});