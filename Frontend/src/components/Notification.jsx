import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return <ToastContainer position='top-right' autoClose={3000} />;
};

// Example usage
export const notifySuccess = (message) => toast.success(message);
export const notifyError = (message) => toast.error(message);

export default Notification;
