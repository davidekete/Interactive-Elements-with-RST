// Track all active dropdown identifiers
let activeDropdownIds = [];

/**
 * Toggles visibility of the dropdown options.
 * @param {string} id - Unique identifier for the dropdown to toggle.
 */
function toggleDropdownOptions(id) {
  const dropdownOptionsContainer = document.querySelector(
    `[data-dropdown="${id}"]`
  );

  // Check if the dropdown is already active
  const isActive = activeDropdownIds.includes(id);

  // Toggle visibility using a class
  dropdownOptionsContainer.classList.toggle("show-dropdown");

  // Add or remove the dropdown from active array
  if (isActive) {
    // Remove from active if it's currently open
    activeDropdownIds = activeDropdownIds.filter(
      (dropdownId) => dropdownId !== id
    );
  } else {
    // Add to active if it's being opened
    activeDropdownIds.push(id);
  }
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
  const dropdownContainer = e.target.closest("[data-dropdown]");
  const dropdownId = dropdownContainer.getAttribute("data-dropdown");

  const dropdownLabel = document.querySelector(
    `[data-dropdown-label="${dropdownId}"]`
  );
  dropdownLabel.innerHTML = e.target.innerText;

  // Hide the dropdown options after selection
  toggleDropdownOptions(dropdownId);
}
