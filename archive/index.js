var accessKey = "uithbskdfhgiweru89uf0u9a22e0-7ghjjp",
    baseURL = "https://avspv9f312.execute-api.us-west-2.amazonaws.com/dev/search",
    searchURL = "",
    currentPostType = "";

function createSearchURL(url) {
  return baseURL + "?access_token=" + accessKey + "&url=" + url;
}

function determineType(post) {

}

function submitSearch(url) {
  $.get(url, function(data) {

    console.log(data);
  });
}

$('#submitSearch').click(function(e) {
  searchURL = createSearchURL($('#search').val());
  submitSearch(searchURL);
});

