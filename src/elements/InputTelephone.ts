import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

type DefaultProps = {
  type?: "tel";
};

export type InputTelephoneProps = DefaultProps &
  SpaceProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  BackgroundColorProps &
  OpacityProps;

const InputTelephone = styled("input", { shouldForwardProp })<InputTelephoneProps>(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  { boxSizing: "border-box" }
);

InputTelephone.defaultProps = {
  type: "tel",
};

export default InputTelephone;
