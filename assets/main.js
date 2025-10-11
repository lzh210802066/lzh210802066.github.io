<script src="https://unpkg.com/simple-jekyll-search@latest/dist/simple-jekyll-search.min.js"></script>
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
  noResultsText: '没有找到结果',
  limit: 10
});
</script>
