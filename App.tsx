import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { FC } from 'react';

import LinearGradient from 'react-native-linear-gradient';

import { THEME_CONFIG } from './src/app';
import { NewPasswordElement } from './src/pages/NewPasswordElement/NewPasswordElement';
import { Pass } from './src/pages/Pass';
import { Profile } from './src/pages/Profile';
import { RestorePasswordElement } from './src/pages/RestorePasswordElement';
import { SignInElement } from './src/pages/SignInElement';
import { SplashScreen } from './src/pages/SplashScreen/SplashScreen';
import { SuccessSendingElement } from './src/pages/SuccessSendingElement';
// eslint-disable-next-line import/no-internal-modules
import { Loader, RoutesEnum } from './src/shared';

const appTheme = extendTheme(THEME_CONFIG);

const config = {
  dependencies: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'linear-gradient': LinearGradient,
  },
};

export const App: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider config={config} theme={appTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={RoutesEnum.SPLASH_SCREEN}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={RoutesEnum.PASS} component={Pass} />
          <Stack.Screen name={RoutesEnum.SPLASH_SCREEN} component={SplashScreen} />
          <Stack.Screen name={RoutesEnum.SIGNIN} component={SignInElement} />
          <Stack.Screen name={RoutesEnum.RESTORE_PASSWORD} component={RestorePasswordElement} />
          <Stack.Screen name={RoutesEnum.NEW_PASSWORD} component={NewPasswordElement} />
          <Stack.Screen name={RoutesEnum.SUCCESSFULSENDING} component={SuccessSendingElement} />

          <Stack.Screen name={RoutesEnum.PROFILE} component={Profile} />
          <Stack.Screen name={RoutesEnum.LOADER} component={Loader} />
          {/* <Stack.Screen
            name={RoutesEnum.ROUTING}
            component = {Routing} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
