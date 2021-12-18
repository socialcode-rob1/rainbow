import React, { useCallback } from 'react';
import Text from './Text';
import styled from 'styled-components';
import { buildTextStyles } from '@rainbow-me/styles';

const TextWithStyles = styled(Text)({
  // TODO terry
  // ${buildTextStyles};
});

const AnimatedNumberWithTextStyles = ({
  formatter,
  textAlign = 'right',
  disableTabularNums,
  initialValue,
  renderContent,
  style,
  value,
  ...props
}) => {
  const formatValue = useCallback(() => {
    const valueToFormat = value || initialValue;
    if (formatter) return formatter(valueToFormat);
    return () => Number(valueToFormat).toString();
  }, [formatter, value, initialValue]);

  const number = formatValue();
  const content = renderContent ? renderContent(number) : number;

  return (
    <TextWithStyles
      {...props}
      style={[
        {
          fontVariant: disableTabularNums ? undefined : ['tabular-nums'],
          textAlign,
        },
        style,
      ]}
    >
      {content}
    </TextWithStyles>
  );
};

export default AnimatedNumberWithTextStyles;
