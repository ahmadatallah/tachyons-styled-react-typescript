import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, ColorProps } from "styled-system";

type DefaultProps = {
  fill?: string;
};

export type PathProps = DefaultProps & ColorProps;

const Path = styled("path", { shouldForwardProp })<PathProps | DefaultProps>(color, {
  boxSizing: "border-box",
});

Path.defaultProps = {
  fill: "currentcolor",
};

export default Path;
