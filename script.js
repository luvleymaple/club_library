function search_club() {
    const query = document.getElementById('search_input').value.toLowerCase().trim();
    const row = document.querySelector('.container-fluid .row');
    const clubs = document.querySelectorAll('.col-lg-5');
    let visibleCount = 0;
    const noResults = document.getElementById('noResults');

    for (let i = 0; i < clubs.length; i++) {
        const name = clubs[i].getAttribute('data-name').toLowerCase();

        if (name.indexOf(query) !== -1 || query === '') {
            clubs[i].style.display = 'block';
            visibleCount++;
        } else {
            clubs[i].style.display = 'none';
        }
    }

    // Center if only 1 or 2 items
    if (visibleCount > 0 && visibleCount < 3) {
        row.style.justifyContent = 'center';
    } else {
        row.style.justifyContent = 'flex-start';
    }

    // Show or hide "no results" message
    if (noResults) {
        noResults.style.display = visibleCount > 0 ? 'none' : 'block';
    }
}

function filterBoxes(category) {
    const row = document.querySelector('.container-fluid .row');
    const clubs = document.querySelectorAll('.col-lg-5');
    let visibleCount = 0;
    const noResults = document.getElementById('noResults');

    for (let i = 0; i < clubs.length; i++) {
        const clubCategory = clubs[i].getAttribute('data-category');
        if (clubCategory === category) {
            clubs[i].style.display = 'block';
            visibleCount++;
        } else {
            clubs[i].style.display = 'none';
        }
    }

    if (visibleCount > 0 && visibleCount < 3) {
        row.style.justifyContent = 'center';
    } else {
        row.style.justifyContent = 'flex-start';
    }

    if (noResults) {
        noResults.style.display = visibleCount > 0 ? 'none' : 'block';
    }
}

function showAll() {
    const row = document.querySelector('.container-fluid .row');
    const clubs = document.querySelectorAll('.col-lg-5');
    const noResults = document.getElementById('noResults');

    for (let i = 0; i < clubs.length; i++) {
        clubs[i].style.display = 'block';
    }

    row.style.justifyContent = 'flex-start';
    if (noResults) {
        noResults.style.display = 'none';
    }
}
