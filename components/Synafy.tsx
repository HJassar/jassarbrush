import { IconButton, Tooltip } from "@mui/material";
import LinkRouter from "./LinkRouter";

const src = "/assets/synafy.svg";

export default function Synafy() {
  return (
    <Tooltip title="Made with ❤ by Synafy" placement="left" arrow>
      <IconButton>
        <LinkRouter
          to="http://synafy.com"
          target="_blank"
          rel="noopener"
          sx={{ opacity: 0.3 }}
        >
          <img width="30" src={src} alt="Synafy" />
        </LinkRouter>
      </IconButton>
    </Tooltip>
  );
}
