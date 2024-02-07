
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('/user/signup', {
            name,
            email,
            phone,
            password
        });
        
        alert("Account created successfully! Please log in to access your account.");
        
    } 
    
    catch (error) {
        console.error(error);

        // Show an error message
    }
});