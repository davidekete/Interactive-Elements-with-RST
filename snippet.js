// Track the currently active dropdown identifier
let activeDropdownId = null;

/**
 * Toggles visibility of the dropdown options.
 * @param {string} id - Unique identifier for the dropdown to toggle.
 */
function toggleDropdownOptions(id) {
  activeDropdownId = id;
  const dropdownOptionsContainer = document.querySelector(
    `[data-dropdown="${id}"]`
  );

  // Toggle visibility using a class
  dropdownOptionsContainer.classList.toggle("show-dropdown");
}

// Add event listener to update label when an option is clicked
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-option")) {
    updateDropdownLabel(e);
  }
});

/**
 * Updates the main dropdown label based on the selected option.
 * @param {Event} e - The click event from a dropdown option.
 */
function updateDropdownLabel(e) {
  const dropdownLabel = document.querySelector(
    `[data-dropdown-label="${activeDropdownId}"]`
  );
  dropdownLabel.innerHTML = e.target.innerText;

  // Hide the dropdown options after selection
  if (activeDropdownId) {
    toggleDropdownOptions(activeDropdownId);
  }
  activeDropdownId = null;
}
