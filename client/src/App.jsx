import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes/AppRoutes';
import { Suspense } from 'react';
import { Loader } from './components/layout/Loader';

function App() {
  return (
    <div>
      
      
      <Suspense fallback={<Loader />}>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRoutes />

    </Suspense>
    </div>
  );
}

export default App;