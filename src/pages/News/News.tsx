import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'native-base';
import { FC } from 'react';
import { RouteParamsList, RoutesEnum } from '../../shared';

type Props = BottomTabScreenProps<RouteParamsList, RoutesEnum.NEWS>;

export const News: FC<Props> = () => <Text>Расписание</Text>;
