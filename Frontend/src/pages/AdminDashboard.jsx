import { useEffect, useState } from 'react';
import api from '../services/api';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await api.get('/admin/orders');
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const handleApprove = async (orderId) => {
    try {
      await api.put(`/admin/orders/${orderId}/approve`);
      alert('Order approved!');
    } catch (error) {
      alert('Failed to approve order.');
    }
  };

  return (
    <div className='admin-dashboard'>
      <h2>Manage Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.title}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleApprove(order._id)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
