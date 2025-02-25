const Routes = {
  home: {
    title: 'Home',
    url: '/',
    children: [
      {
        title: 'Contact Us',
        url: '#contact',
      },
      {
        title: 'About Us',
        url: '#about',
      },
    ],
  },
  doctors: {
    title: 'Doctors',
    url: '/doctors',
    children: [],
  },
};

export default Routes;
