import React from 'react';

import appConfig from 'configs/app-config';

import Button from 'components/Button';

import * as Styles from './styles';

interface IStickersButtonProps {
  disabled?: boolean;
  handleStickerSelected(sticker: string): void;
}

const StickersButton = ({
  disabled,
  handleStickerSelected,
}: IStickersButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleIsOpen = React.useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  return (
    <Styles.Container>
      <Styles.StickersWrapper isOpen={isOpen}>
        {appConfig.stickers.map((sticker) => (
          <button
            key={sticker}
            onClick={() => {
              handleToggleIsOpen();
              handleStickerSelected(sticker);
            }}
          >
            <img src={sticker} alt={sticker} />
          </button>
        ))}
      </Styles.StickersWrapper>
      <Button
        variant="secondary"
        dimension="square"
        rounded="full"
        onClick={() => !disabled && handleToggleIsOpen()}
        label="😋"
      />
    </Styles.Container>
  );
};

export default StickersButton;
