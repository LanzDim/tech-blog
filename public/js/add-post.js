async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('input[name="post-content"]').value;

  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, post_content }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      throw new Error('Error creating a new post');
    }
  } catch (err) {
    console.log(err);
    alert('Failed to create a new post');
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
