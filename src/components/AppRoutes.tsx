import { useRoutes } from 'react-router-dom';
import { PrimeNumbers } from './primes/PrimeNumbers';
import { UserList } from './users/UserList';
import atomium from './atomium.jpg';

export function AppRoutes() {
  let element = useRoutes([
    {
      path: '/',
      element: (
        <div className="row">
          <h2 className="text-center mt-5">
            Concurrent Rendering Adventures in React 18
          </h2>
          <img className="g-5" src={atomium} alt="React Brussels" />
        </div>
      ),
    },
    { path: '/users', element: <UserList /> },
    { path: '/primes', element: <PrimeNumbers /> },
  ]);

  return element;
}
