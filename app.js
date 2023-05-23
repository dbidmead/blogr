
const productToggle = document.querySelector('#product-toggle');
productToggle.dropdown = document.querySelector('#product-dropdown');
productToggle.dropdownHeight = getComputedStyle(productToggle.dropdown).height;
productToggle.dropdown.style.height = '0px';
productToggle.dropdown.style.padding = '0px';

const companyToggle = document.querySelector('#company-toggle');
companyToggle.dropdown = document.querySelector('#company-dropdown');
companyToggle.dropdownHeight = getComputedStyle(companyToggle.dropdown).height;
companyToggle.dropdown.style.height = '0px';
companyToggle.dropdown.style.padding = '0px';

const connectToggle = document.querySelector('#connect-toggle');
connectToggle.dropdown = document.querySelector('#connect-dropdown');
connectToggle.dropdownHeight = getComputedStyle(connectToggle.dropdown).height;
connectToggle.dropdown.style.height = '0px';
connectToggle.dropdown.style.padding = '0px';

const toggles = [productToggle, companyToggle, connectToggle];

const mobileMenu = document.querySelector('.dropdown-container');
mobileMenu.initialHeight = getComputedStyle(mobileMenu).height;
mobileMenu.style.height = '0px';
mobileMenu.style.padding = '0 2rem';

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenu.style.height = mobileMenu.classList.contains('active') ?
        mobileMenu.initialHeight :
        '0px';
    mobileMenu.setAttribute('style', mobileMenu.classList.contains('active') ?
        'padding: 2rem' :
        'padding: 0 2rem');
})

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