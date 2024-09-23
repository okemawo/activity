// Function to save data to cookies, localStorage, or sessionStorage
function saveToStorage(type, key, value) {
    if (type === 'cookie') {
        // Save data as a cookie (expires in 7 days)
        document.cookie = `${key}=${value}; path=/; max-age=${7 * 24 * 60 * 60}`;
        updateStatus('Data saved to cookies');
    } else if (type === 'localStorage') {
        // Save data to localStorage
        localStorage.setItem(key, value);
        updateStatus('Data saved to local storage');
    } else if (type === 'sessionStorage') {
        // Save data to sessionStorage
        sessionStorage.setItem(key, value);
        updateStatus('Data saved to session storage');
    } else {
        updateStatus('Invalid storage type');
    }
}

// Function to update the status text on the webpage
function updateStatus(message) {
    document.getElementById('status').innerText = message;
}
