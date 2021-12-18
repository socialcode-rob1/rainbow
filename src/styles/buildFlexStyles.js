import { StyleSheet } from 'react-native';
import position from './position';
import { css } from '@rainbow-me/styled';

export const getFlexStylesFromShorthand = style =>
  style === 'end' || style === 'start' ? `flex-${style}` : style;

const buildFlexStyles = css`
  /* Align Items */
  align-items: ${({ align = 'stretch' }) => getFlexStylesFromShorthand(align)};

  /* Align Self */
  ${({ self }) =>
    self ? `align-self: ${getFlexStylesFromShorthand(self)};` : ''}

  /* Flex */
  ${({ flex }) => (flex !== undefined ? `flex: ${flex};` : '')}

  /* Flex Direction */
  flex-direction: ${({ direction = 'row' }) => direction};

  /* Flex Grow */
  ${({ grow }) => (grow !== undefined ? `flex-grow: ${grow};` : '')}

  /* Flex Shrink */
  ${({ shrink }) => (shrink !== undefined ? `flex-shrink: ${shrink};` : '')}

  /* Flex Wrap */
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

  /* Justify Content */
  justify-content: ${({ justify = 'start' }) =>
    getFlexStylesFromShorthand(justify)};

  /* Shorthand Shortcuts 💇‍♂️️ */
  ${({ centered }) => (centered ? position.centered : '')}
  ${({ cover }) => (cover ? position.cover : '')}
`;

buildFlexStyles.object = ({
  align = 'stretch',
  self,
  flex,
  direction = 'row',
  justify = 'start',
  wrap,
  grow,
  shrink,
  centered,
  cover,
}) => {
  const props = {
    alignItems: getFlexStylesFromShorthand(align),
    flexDirection: direction,
    justifyContent: getFlexStylesFromShorthand(justify),
    wrap: wrap ? 'wrap' : 'nowrap',
  };

  if (self) {
    props.alignSelf = getFlexStylesFromShorthand(self);
  }

  if (typeof flex !== 'undefined') {
    props.flex = flex;
  }

  if (typeof grow !== 'undefined') {
    props.flexGrow = grow;
  }

  if (typeof shrink !== 'undefined') {
    props.flexShrink = shrink;
  }

  if (centered) {
    props.alignItems = 'center';
    props.justifyContent = 'center';
  }

  if (cover) {
    Object.assign(props, StyleSheet.absoluteFillObject);
  }

  return props;
};

export default buildFlexStyles;
