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
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  gridGap,
  GridGapProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridArea,
  GridAreaProps,
} from "styled-system";

export type MainProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  GridGapProps &
  GridColumnGapProps &
  GridRowGapProps &
  GridColumnProps &
  GridRowProps &
  GridAutoFlowProps &
  GridAutoColumnsProps &
  GridAutoRowsProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  GridTemplateAreasProps &
  GridAreaProps;

const Main = styled("main", { shouldForwardProp })<MainProps>(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  {
    boxSizing: "border-box",
  }
);

Main.defaultProps = {
  width: 1,
};

export default Main;
