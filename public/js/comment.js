async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  const post_id = window.location.toString().split('/').pop();

  if (comment_text) {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.reload();
      } else {
        throw new Error('Error creating a new comment');
      }
    } catch (err) {
      console.log(err);
      alert('Failed to create a new comment');
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
