

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
        
        alert(` ${response.data.message}`);
        // document.getElementById('signupForm').reset()
        window.location.href = 'user/login';
    } 
    
    catch (error) {
        console.error(error);

        // Show an error message
    }
});