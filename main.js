// Sample code data
const codes = [
    { code: "A01", description: "Typhoid fever" },
    { code: "B01", description: "Chickenpox" },
    { code: "E11", description: "Type 2 diabetes mellitus" },
    { code: "I10", description: "Essential hypertension" },
    { code: "M17", description: "Osteoarthritis of knee" }
];

// Get DOM elements
const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");

// Event listener for input
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    
    // Filter matching codes
    const filteredCodes = codes.filter(code => code.description.toLowerCase().includes(query));
    
    // Clear previous suggestions
    suggestionsList.innerHTML = "";
    
    // Display new suggestions
    filteredCodes.forEach(code => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = `${code.code} - ${code.description}`;
        listItem.addEventListener("click", () => {
            alert(`Code: ${code.code}\nDescription: ${code.description}`);
        });
        suggestionsList.appendChild(listItem);
    });
});
