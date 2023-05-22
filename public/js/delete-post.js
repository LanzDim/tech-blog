async function deleteFormHandler(event) {
  event.preventDefault();

  const postId = window.location.toString().split('/').pop();

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
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
    alert('Failed to delete the post');
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
