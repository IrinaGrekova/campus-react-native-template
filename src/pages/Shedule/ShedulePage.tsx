import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'native-base';
import { RouteParamsList, RoutesEnum } from '../../shared';

type Props = BottomTabScreenProps<RouteParamsList, RoutesEnum.SCHEDULE>;
export const ShedulePage: React.FC<Props> = () => <Text>Расписание</Text>;
