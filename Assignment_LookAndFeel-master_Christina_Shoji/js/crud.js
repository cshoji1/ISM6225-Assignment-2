document.addEventListener('DOMContentLoaded', function() {
    const movieForm = document.getElementById('movieForm');
    const moviesTableBody = document.getElementById('dmTable').getElementsByTagName('tbody')[0];
    let movies = JSON.parse(localStorage.getItem('dmData')) || [];

    
    const staticData = [
        {
            "name": "Titanic",
            "description": "A romantic adventure film about the sinking of the RMS Titanic in 1912",
            "releaseYear": 1997,
            "grossRevenue": 674460013,
            "awards": 11
        },
        {
            "name": "The Blind Side",
            "description": "A sports drama film on overcoming adversity to play in the NFL",
            "releaseYear": 2009,
            "grossRevenue": 255959475,
            "awards": 5
        },
        {
            "name": "Catch Me if You Can",
            "description": "An FBI agent becomes obsessed with tracking down a con man",
            "releaseYear": 2002,
            "grossRevenue": 164606800,
            "awards": 16
        },
        {
            "name": "The Truman Show",
            "description": "An insurance salesman is unaware that his life is actually a reality TV show",
            "releaseYear": 1998,
            "grossRevenue": 125618201,
            "awards": 40
        },
        {
            "name": "Oppenheimer",
            "description": "The story of J.Robert Oppenheimer, who helped develop nuclear weapons during WW2",
            "releaseYear": 2023,
            "grossRevenue": 329862540,
            "awards": 7
        },
        {
            "name": "The Pursuit of Happyness",
            "description": "A salesman struggles to make a living while his wife leaves him",
            "releaseYear": 2006,
            "grossRevenue": 162586036,
            "awards": 9
        },
        {
            "name": "A Star is Born",
            "description": "A musical romantic drama film about a troubled country rock star who falls in love with a singer",
            "releaseYear": 2018,
            "grossRevenue": 215288866,
            "awards": 3
        },
        {
            "name": "Twilight",
            "description": "A vampire romance fantasy film based on Stephenie Meyer's novel",
            "releaseYear": 2008,
            "grossRevenue": 192769854,
            "awards": 35
        },
        {
            "name": "A Beautiful Mind",
            "description": "The story of a man whose mind was of enormous service to humanity while also left him with delusions",
            "releaseYear": 2001,
            "grossRevenue": 170708996,
            "awards": 4
        },
        {
            "name": "Apollo 13",
            "description": "A movie based on the true story of NASA's efforts to return Apollo 13 safely to Earth",
            "releaseYear": 1995,
            "grossRevenue": 173772767,
            "awards": 2
        }
    ];

    
    if (movies.length === 0) {
        movies = staticData;
        localStorage.setItem('dmData', JSON.stringify(movies));
    }

    
    updateMoviesTable();

    movieForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const movie = document.getElementById('movie').value;
        const description = document.getElementById('description').value;
        const awards = parseInt(document.getElementById('awards').value);
        const gross_revenue = parseInt(document.getElementById('gross_revenue').value);
        const year = parseInt(document.getElementById('year').value);

       
        const editIndex = movieForm.getAttribute('data-edit-index');
        if (editIndex !== null) {
            
            movies[editIndex] = { name: movie, description, awards, grossRevenue: gross_revenue, releaseYear: year };
            movieForm.removeAttribute('data-edit-index'); 
        } else {
            
            const newMovie = { name: movie, description, awards, grossRevenue: gross_revenue, releaseYear: year };
            movies.push(newMovie);
        }

        
        localStorage.setItem('dmData', JSON.stringify(movies));

        
        updateMoviesTable();

        
        movieForm.reset();
    });

    function updateMoviesTable() {
       
        moviesTableBody.innerHTML = '';

        
        movies.forEach(function(movie, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.name}</td>
                <td>${movie.description}</td>
                <td>${movie.awards}</td>
                <td>${movie.grossRevenue}</td>
                <td>${movie.releaseYear}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            moviesTableBody.appendChild(row);
        });

        
        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                const index = event.target.getAttribute('data-index');
               
                const movieToEdit = movies[index];
                document.getElementById('movie').value = movieToEdit.name;
                document.getElementById('description').value = movieToEdit.description;
                document.getElementById('awards').value = movieToEdit.awards;
                document.getElementById('gross_revenue').value = movieToEdit.grossRevenue;
                document.getElementById('year').value = movieToEdit.releaseYear;
               
                movieForm.setAttribute('data-edit-index', index);
            });
        });

       
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                const index = event.target.getAttribute('data-index');
               
                movies.splice(index, 1);
                
                localStorage.setItem('dmData', JSON.stringify(movies));
                
                updateMoviesTable();
            });
        });
    }
});