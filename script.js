document.addEventListener('DOMContentLoaded', function() {
    var baseUrl = window.location.origin + window.location.pathname;

    // Ensure baseUrl ends with a slash
    if (!baseUrl.endsWith('/')) {
        baseUrl += '/';
    }

    document.getElementById('searchPuzzle').addEventListener('click', function() {
        window.open(baseUrl + 'searchPuzzle.html', '_blank');
    });

    document.getElementById('registerPuzzle').addEventListener('click', function() {
        window.open(baseUrl + 'registerPuzzle.html', '_blank');
    });
});
