// Sample fruit list
const fruits = ["Apple 🍎", "Banana 🍌", "Grape 🍇", "Orange 🍊", "Pear 🍐", "Pineapple 🍍", "Mango 🥭", "Kiwi 🥝", "Strawberry 🍓"];

// Step Five: Add Event Listener For Key Strokes
document.getElementById("searchInput").addEventListener("input", search);

// Step Six: Filter The List Based On User Input
function search() {
    const userInput = document.getElementById("searchInput").value.toLowerCase();
    const results = fruits.filter(fruit => fruit.toLowerCase().includes(userInput));
    displayResults(results);
}

// Step Seven: Display The Results List As A Drop Down
function displayResults(results) {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";
    results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        suggestionsList.appendChild(listItem);
    });
}

// Step Eight: Highlight the suggestion below a user’s cursor
document.getElementById("suggestions").addEventListener("mouseover", highlightSuggestion);

function highlightSuggestion(event) {
    const suggestion = event.target;
    if (suggestion.tagName === "LI") {
        suggestion.classList.add("highlighted");
    }
}

// Step Nine: Populate the search box with a user’s selected suggestion
document.getElementById("suggestions").addEventListener("click", useSuggestion);

function useSuggestion(event) {
    const suggestion = event.target;
    if (suggestion.tagName === "LI") {
        document.getElementById("searchInput").value = suggestion.textContent;
    }
}
