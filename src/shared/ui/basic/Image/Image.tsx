import { Image as ImageNB, IImageProps } from 'native-base';
import { FC } from 'react';


export const Image: FC<IImageProps> = ({ defaultSource, ...restProps }) => (
  <ImageNB defaultSource={defaultSource} {...restProps} />
);
