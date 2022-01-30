import React from 'react';
import Lottie, { Options } from 'react-lottie';

interface ILootieImgProps {
  animationData: unknown;
}

const LootieImg = ({ animationData }: ILootieImgProps): JSX.Element => {
  const options: Options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return <Lottie title="lottie-component" options={options} />;
};

export default LootieImg;
