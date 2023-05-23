
const productToggle = document.querySelector('#product-toggle');
productToggle.dropdown = document.querySelector('#product-dropdown');
productToggle.dropdownHeight = getComputedStyle(productToggle.dropdown).height;

const companyToggle = document.querySelector('#company-toggle');
companyToggle.dropdown = document.querySelector('#company-dropdown');
companyToggle.dropdownHeight = getComputedStyle(companyToggle.dropdown).height;

const connectToggle = document.querySelector('#connect-toggle');
connectToggle.dropdown = document.querySelector('#connect-dropdown');
connectToggle.dropdownHeight = getComputedStyle(connectToggle.dropdown).height;

const toggles = [productToggle, companyToggle, connectToggle];

function toggleDropdown(e) {
    toggles.forEach(toggle => {
        if(e.target === toggle) {
            if(toggle.dropdown.classList.contains('expanded')) {
                toggle.dropdown.style.height = '0px';
                toggle.dropdown.style.padding = '0 0 0 1.5rem';
                // toggle.firstElementChild.style.textDecoration = 'unset';
                toggle.dropdown.classList.remove('expanded');
                toggle.arrow.classList.remove('up');
            } else {
                toggle.dropdown.style.height = toggle.dropdownHeight;
                toggle.dropdown.style.padding = '1.5rem';
                // toggle.firstElementChild.style.textDecoration = 'underline';
                toggle.dropdown.classList.add('expanded');
                toggle.arrow.classList.add('up');
            }
        } else {
            toggle.dropdown.style.height = '0px';
            toggle.dropdown.style.padding = '0 0 0 1.5rem';
            // toggle.firstElementChild.style.textDecoration = 'unset';
            toggle.dropdown.classList.remove('expanded');
            toggle.arrow.classList.remove('up');
        }
    })
};

toggles.forEach(toggle => {
    toggle.arrow = toggle.lastElementChild;
    toggle.addEventListener('click', toggleDropdown);
})