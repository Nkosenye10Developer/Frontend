import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes/AppRoutes';
import { Loader } from './components/Loader/Loader';

function App() {
  return (
    <div>
      <Suspense fallback={<Loader message="Loading application..." />}>
        <AppRoutes />
      </Suspense>
      
      <Toaster 
        position="top-center" 
        reverseOrder={false}
      />
    </div>
  );
}

export default App;