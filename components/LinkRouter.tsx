import NextLink from "next/link";
import { Link, LinkProps, Typography } from "@mui/material";

interface LinkRouterProps extends LinkProps {
  to?: string | false;
  replace?: boolean;
}

export default function LinkRouter(props: LinkRouterProps) {
  const { to, replace, children, ...rest } = props;
  if (to)
    return (
      <NextLink href={to} replace={replace}>
        <Link component="a" sx={{ cursor: "pointer" }} {...rest} href={to}>
          {children}
        </Link>
      </NextLink>
    );

  return (
    <Typography sx={{ display: "inline" }} {...rest}>
      {children}
    </Typography>
  );
}

LinkRouter.defaultProps = {
  replace: false,
};
