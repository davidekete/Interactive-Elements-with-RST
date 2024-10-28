// Track the currently active dropdown identifier
// let activeDropdownId = null;

//edge case where more than one drop down is active
let activeDropDowns = [];

/**
 * Toggles visibility of the dropdown options.
 * @param {string} id - Unique identifier for the dropdown to toggle.
 */
function toggleDropdownOptions(id) {
  // activeDropdownId = id;
  // const dropdownOptionsContainer = document.querySelector(
  //   `[data-dropdown="${id}"]`
  // );

  // // Toggle visibility using a class
  // dropdownOptionsContainer.classList.toggle("show-dropdown");

  // activeDropDowns.push(id);

  activeDropDowns = [...new Set([...activeDropDowns, id])];

  const activeDropDownContainers = activeDropDowns.map((id) => {
    const dropdownOptionsContainer = document.querySelector(
      `[data-dropdown="${id}"]`
    );

    return dropdownOptionsContainer;
  });

  //toggle each visibility
  activeDropDownContainers.forEach((container) => {
    container.classList.toggle("show-dropdown");
  });
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
  // const dropdownLabel = document.querySelector(
  //   `[data-dropdown-label="${activeDropdownId}"]`
  // );

  //select dropdown labels
  const dropdownLabels = activeDropDowns.map((id) => {
    return document.querySelector(`[data-dropdown-label="${id}"]`);
  });

  //get the id that was clicked
  const id = e.target.closest("[data-dropdown]").getAttribute("data-dropdown");

  console.log(dropdownLabels);

  //change text to selected option
  dropdownLabels.forEach((label) => {
    if (label.dataset.dropdownLabel === id) {
      label.innerHTML = e.target.innerText;

      // Hide the dropdown options after selection
      if (activeDropDowns.includes(id)) {
        toggleDropdownOptions(id);
      }
    }
  });

  // dropdownLabel.innerHTML = e.target.innerText;

  // Hide the dropdown options after selection
  // if (activeDropdownId) {
  //   toggleDropdownOptions(activeDropdownId);
  // }

  // activeDropdownId = null;

  activeDropDowns = activeDropDowns.filter((dropdownId) => {
    return dropdownId !== id;
  });

  console.log(activeDropDowns);
}
