function DisableEverything(){
    const NavBarBeginning = document.getElementById("NavBarBeginning");
    NavBarBeginning.classList.remove('active');
    NavBarBeginning.classList.add('inactive');
    const NavBarEducation = document.getElementById("NavBarEducation");
    NavBarEducation.classList.remove('active');
    NavBarEducation.classList.add('inactive');
    const NavBarMedicine = document.getElementById("NavBarMedicine");
    NavBarMedicine.classList.remove('active');
    NavBarMedicine.classList.add('inactive');
    const NavBarIndustry = document.getElementById("NavBarIndustry");
    NavBarIndustry.classList.remove('active');
    NavBarIndustry.classList.add('inactive');
    const NavBarAgriculture = document.getElementById("NavBarAgriculture");
    NavBarAgriculture.classList.remove('active');
    NavBarAgriculture.classList.add('inactive');
    const NavBarCulture = document.getElementById("NavBarCulture");
    NavBarCulture.classList.remove('active');
    NavBarCulture.classList.add('inactive');
    const NavBarSport = document.getElementById("NavBarSport");
    NavBarSport.classList.remove('active');
    NavBarSport.classList.add('inactive');
    const NavBarSuggestions = document.getElementById("NavBarSuggestions");
    NavBarSuggestions.classList.remove('active');
    NavBarSuggestions.classList.add('inactive');
}
document.addEventListener('scroll', function() {
    const Width = document.documentElement.clientWidth
    const ScrollDistance = Width*0.06
    if(suggestions.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarSuggestions");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(sport.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarSport");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(culture.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarCulture");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(agriculture.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarAgriculture");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(industry.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarIndustry");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(medicine.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarMedicine");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(education.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarEducation");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else{
        DisableEverything()
        const element = document.getElementById("NavBarBeginning");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
});

function equalizeRowHeights() {
    // 1. Get all tables on the website
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
        // 2. Iterate through all rows in the current table
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            // Get all cells (td and th) in the current row
            const cells = row.querySelectorAll('td, th');

            // Find the maximum height among the cells in the row
            let maxHeight = 0;
            // Temporarily clear any set heights to get the natural height
            cells.forEach(cell => {
                cell.style.height = 'auto';
            });
            
            cells.forEach(cell => {
                // Use offsetHeight which accounts for padding, borders, etc.
                const cellHeight = cell.offsetHeight;
                if (cellHeight > maxHeight) {
                    maxHeight = cellHeight;
                }
            });

            // 3. Set all cells in the row to the maximum height found
            cells.forEach(cell => {
                cell.style.height = `${maxHeight}px`;
            });
        }
    });
}

// Run the function after the window loads to ensure all elements are rendered
window.onload = equalizeRowHeights;

// Optional: Run the function again if the window is resized, as heights might change
window.onresize = equalizeRowHeights;
