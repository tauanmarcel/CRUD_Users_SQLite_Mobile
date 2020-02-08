import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Users from './pages/Users';
import AddUser from './pages/Users/create';

export default createAppContainer(
  createSwitchNavigator(
    {
      App: createSwitchNavigator({
        Users,
        AddUser,
      }),
    },
    {
      initialRouteName: 'App',
    },
  ),
);
