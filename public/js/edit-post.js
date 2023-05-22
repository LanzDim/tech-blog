async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('input[name="post-content"]').value;
  const postId = window.location.toString().split('/').pop();

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_content: postContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.log(err);
    alert('Failed to update the post');
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
