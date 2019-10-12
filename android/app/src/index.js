
import Page1 from './App';
import Page2 from './LoginForm';
import Page3 from './Teste';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
    Zeze: Page3,
  })
);

export default Routes;