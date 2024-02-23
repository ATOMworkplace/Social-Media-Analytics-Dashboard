import React, { useState } from 'react';
import Swal from 'sweetalert2';
function PostForm() {
  const [draftPost, setDraftPost] = useState({ title: '', description: '', scheduledDate: null, platform: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDraftPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleScheduleChange = (event) => {
    const { name, value } = event.target;
    setDraftPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Post Scheduled',
      text: 'Your post has been drafted successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };
  

  return (
    <div className="post-form">
      <h2 className="Ph">Create New Post</h2>
      <div className="FormD">
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={draftPost.title} onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" value={draftPost.description} onChange={handleInputChange}></textarea>
          <select className="PlatformOp" name="platform" value={draftPost.platform} onChange={handleInputChange}>
            <option value="">Select Platform</option>
            <option value="YouTube">YouTube</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
          </select>
          <input type="datetime-local" name="scheduledDate" onChange={handleScheduleChange} />
          <button type="submit" onSubmit={handleSubmit}>Schedule Post</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
