

document.getElementById('searchPuzzle').addEventListener('click', async function() {
    const puzzleId = document.getElementById('puzzleId').value.trim();
    if (!puzzleId) {
        alert('Please enter a Puzzle ID');
        return;
    }

    // Replace this URL with the one you get from publishing your Google Sheet
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/1hI58DmWpDXnWrwApDP4FklEeE97epZGhSOtpWZCyO1c/';

    try {
        const response = await fetch(sheetUrl);
        const csvText = await response.text();
        const rows = csvText.split('\n').map(row => row.split(','));
        const header = rows[0];
        const puzzleIndex = header.indexOf('Puzzle ID'); // Adjust based on your actual column name
        const match = rows.find(row => row[puzzleIndex] === puzzleId);

        if (match) {
            // Example: Displaying the match - adjust according to your needs
            alert(`Match Found: ${match.join(', ')}`);
        } else {
            alert('No match found for the entered Puzzle ID.');
        }
    } catch (error) {
        console.error('Error fetching or parsing the sheet:', error);
        alert('Failed to search for Puzzle ID.');
    }
});



document.getElementById('registerPuzzle').addEventListener('click', function() {
    window.open('registerPuzzle.html', '_self');
});
