import React from 'react';
import styled from '@rainbow-me/styled';
import { ButtonPressAnimation } from '../animations';
import { Text } from '../text';
import { lightModeThemeColors, padding } from '@rainbow-me/styles';

const ExchangeDetailsButtonLabel = styled(Text).attrs({
  color: lightModeThemeColors.white,
  size: 'large',
  weight: 'heavy',
  ...(android && { lineHeight: 21 }),
})({
  ...padding.object(9),
});

export default function ExchangeDetailsButton({
  children,
  disabled,
  onPress,
  ...props
}) {
  return (
    <ButtonPressAnimation
      {...props}
      disabled={disabled}
      onPress={onPress}
      scaleTo={1.0666}
      style={{ opacity: disabled ? 0.4 : 1 }}
    >
      <ExchangeDetailsButtonLabel>{children}</ExchangeDetailsButtonLabel>
    </ButtonPressAnimation>
  );
}
