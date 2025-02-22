import { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState(1);
  const [urgency, setUrgency] = useState('Standard');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('pages', pages);
    formData.append('urgency', urgency);
    formData.append('file', file);

    try {
      await axios.post('/api/orders', formData);
      alert('Order submitted successfully!');
    } catch (error) {
      alert('Failed to submit order.');
    }
  };

  return (
    <div className='dashboard'>
      <form onSubmit={handleSubmit}>
        <h2>Submit New Order</h2>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          placeholder='Pages'
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option value='Standard'>Standard</option>
          <option value='Urgent'>Urgent</option>
        </select>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        <button type='submit'>Submit Order</button>
      </form>
    </div>
  );
};

export default Dashboard;
