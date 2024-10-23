function showDropdownOptions(num) {
  const currentDropdownOption = document.getElementById(
    `dropdown-options-${num}`
  );

  currentDropdownOption.classList.toggle("show-dropdown");
}

const dropdownOptions = document.getElementsByClassName("dropdown-option");
Array.from(dropdownOptions).map((option) => {
  option.addEventListener("click", changeDropdownLabel);
});

function changeDropdownLabel(e) {
  document.getElementById("dropdown-label").innerHTML = e.target.innerText;
}
