export const navLinks = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about-us',
    label: 'About Us',
  },
  {
    path: '/courses',
    label: 'Courses',
    children: [
      {
        path: '/courses/chess',
        label: 'Chess',
      },
      {
        path: '/courses/english',
        label: 'English',
      },
      {
        path: '/courses/japanese',
        label: 'Japanese',
      },
      {
        path: '/courses/photography',
        label: 'Photography',
      },
    ],
  },
  {
    path: '/shop',
    label: 'Shop',
  },
  {
    path: '/login',
    label: 'Login',
  },
];
