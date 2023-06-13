import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum RoutesEnum {
  LOADER = 'LOADER',
  NEWS = 'NEWS',
  NEWS_TAB_SCREEN = 'NEWS_TAB_SCREEN',
  NEW_PASSWORD = 'NEW_PASSWORD',
  PASS = 'PASS',
  PROFILE = 'PROFILE',
  RESTORE_PASSWORD = 'RESTORE_PASSWORD',
  ROUTING = 'ROUTING',
  SCHEDULE = 'SCHEDULE',
  SIGNIN = 'SIGNIN',
  SPLASH_SCREEN = 'SPLASH_SCREEN',
  SUCCESSFULSENDING = 'SUCCESSFULSENDING',
  TAB_BAR_SCREEN = 'TAB_BAR_SCREEN',
}

export type RouteParamsList = {
  [RoutesEnum.PASS]: undefined;
  [RoutesEnum.PROFILE]: undefined;
  [RoutesEnum.SIGNIN]: undefined;
  [RoutesEnum.RESTORE_PASSWORD]: undefined;
  [RoutesEnum.NEW_PASSWORD]: undefined;
  [RoutesEnum.SUCCESSFULSENDING]: undefined;
  [RoutesEnum.TAB_BAR_SCREEN]: undefined;
  [RoutesEnum.SPLASH_SCREEN]: undefined;
  [RoutesEnum.NEWS]: undefined;
  [RoutesEnum.SCHEDULE]: undefined;
  [RoutesEnum.ROUTING]: undefined;
  [RoutesEnum.LOADER]: undefined;
};

export type PossiblyEmpty<T extends string> = T | '';
export type TabId = keyof RouteParamsList;

export type PropsWithNavigation<
  ScreenName extends keyof RouteParamsList,
  Props extends React.ComponentProps<React.ComponentType> = object,
> = NativeStackScreenProps<RouteParamsList, ScreenName> & Props;

// export type ExcludeFunctionsField<T extends object> = {
//   [key in keyof T as T[key] extends Function ? never : key]: T[key];
// };

export enum LoadingState {
  INITIAL = 'INITIAL',
  LOADED = 'LOADED',
  LOADING = 'LOADING',
}

export type VoidFunction = () => void;

export type CommonIconProps = {
  color: string;
  focused: boolean;
  size: number;
};
