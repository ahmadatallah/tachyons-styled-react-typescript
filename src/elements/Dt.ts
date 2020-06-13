import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

type DtProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;
const Dt = styled("dt", { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  {}
);

export default Dt;
