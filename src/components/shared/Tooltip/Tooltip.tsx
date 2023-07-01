import { styled } from "@mui/material";
import MuiTooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const StyledTooltip = styled(({ className, ...props }: TooltipProps & { "data-bg-color"?: string }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ "data-bg-color": backgroundColor }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: backgroundColor,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor,
  },
}));

export const Tooltip = ({ backgroundColor = "#3b4252", ...props }: TooltipProps & { backgroundColor?: string }) => {
  return <StyledTooltip data-bg-color={backgroundColor} {...props} />;
};
