import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList90664Navigator from '../features/NotificationList90664/navigator';
import Settings90663Navigator from '../features/Settings90663/navigator';
import Settings90655Navigator from '../features/Settings90655/navigator';
import UserProfile90653Navigator from '../features/UserProfile90653/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList90664: { screen: NotificationList90664Navigator },
Settings90663: { screen: Settings90663Navigator },
Settings90655: { screen: Settings90655Navigator },
UserProfile90653: { screen: UserProfile90653Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
