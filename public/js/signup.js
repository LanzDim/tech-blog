async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const twitter = document.querySelector('#twitter-signup').value.trim();
  const github = document.querySelector('#github-signup').value.trim();

  if (username && email && password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          twitter,
          github,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Success');
        document.location.replace('/dashboard');
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
      alert('Failed to sign up');
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
