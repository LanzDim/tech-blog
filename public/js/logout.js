async function logout() {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log(err);
    alert('Failed to log out');
  }
}

document.querySelector('#logout').addEventListener('click', logout);
