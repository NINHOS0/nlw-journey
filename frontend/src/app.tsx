import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateTripPage } from './assets/pages/create-trip';
import { TripDetailsPage } from './assets/pages/trip-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
