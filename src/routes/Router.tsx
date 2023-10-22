import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Member from '@/pages/Member/Member';
import Chat from '@/pages/Chat/Chat';
import Profile from '@/pages/Profile/Profile';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';

const router = createBrowserRouter([
  { path: '/', element: <Member /> },
  { path: '/chat', element: <Chat /> },
  { path: '/profile', element: <Profile /> },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
]);

const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterComponent;
