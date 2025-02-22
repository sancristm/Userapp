import { notifySuccess, notifyError } from '../components/Notification';
import api from '../services/api';

const Payment = () => {
  const handlePayment = async (method) => {
    try {
      // Call the backend to process payment
      await api.post('/payments/process', { method });
      notifySuccess('Payment processed successfully!');
    } catch (error) {
      notifyError('Payment failed.');
    }
  };

  return (
    <div className='payment'>
      <h2>Select Payment Method</h2>
      <button onClick={() => handlePayment('PayPal')}>Pay with PayPal</button>
      <button onClick={() => handlePayment('Stripe')}>Pay with Stripe</button>
      <button onClick={() => handlePayment('Mpesa')}>Pay with M-Pesa</button>
    </div>
  );
};

export default Payment;
