import { TruncatedText } from '../text';
import styled from 'styled-components';

const CoinName = styled(TruncatedText).attrs(
  ({ color, size, theme: { colors } }) => ({
    color: color || colors.dark,
    letterSpacing: 'roundedMedium',
    lineHeight: android ? 'normalTight' : 'normal',
    size: size || 'lmedium',
  })
)({
  paddingRight: ({ paddingRight = 19 }) => paddingRight,
});

export default CoinName;
