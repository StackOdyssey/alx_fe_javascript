// Step 1: Create the quotes array
const quotes = [
    { text: "Code is poetry.", category: "Tech" },
    { text: "Stay hungry, stay foolish.", category: "Inspiration" },
    { text: "Simplicity is the soul of efficiency.", category: "Design" }
];

// Step 2: Display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = `"${selectedQuote.text}" — ${selectedQuote.category}`;
}

// Step 3: Add a new quote to the array
function addQuote(text, category) {
    quotes.push({ text, category });
    displayRandomQuote(); // Optional: refresh display
}

// Step 4: Add event listener to the button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);