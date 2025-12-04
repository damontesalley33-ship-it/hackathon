// Get DOM elements
const fetchUserBtn = document.getElementById('fetchUserBtn');
const userCard = document.getElementById('userCard');
const userImage = document.getElementById('userImage');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userLocation = document.getElementById('userLocation');

// Fetch random user function
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Fill user card with data
            userImage.src = user.picture.large;
            userName.textContent = `${user.name.first} ${user.name.last}`;
            userEmail.textContent = `Email: ${user.email}`;
            userLocation.textContent = `Location: ${user.location.city}, ${user.location.country}`;

            // Show user card
            userCard.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            alert('Failed to fetch a random user. Try again!');
        });
}

// Add event listener to button
fetchUserBtn.addEventListener('click', fetchRandomUser);
