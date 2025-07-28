import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRoutes />
    </div>
  );
}

export default App;