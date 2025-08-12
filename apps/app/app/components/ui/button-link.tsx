import { buttonVariants  } from "~/components/ui/button";
import { cn } from "~/components/ui/utils";
import { Link, useSubmit, useNavigate, useLoaderData, useNavigation, Form, NavLink, useFetcher } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";
import type { VariantProps } from "class-variance-authority";

/**
 * Button Link
 *
 * Button with Link component.
 */

export interface ButtonLinkProps
  extends RemixLinkProps,
    VariantProps<typeof buttonVariants> {}

export const ButtonLink = ({
  to = "/",
  variant = "default",
  accent = "default",
  size = "default",
  align = "default",
  radius = "default",
  className,
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <NavLink
      to={to}
      className={cn(
        buttonVariants({
          variant,
          accent,
          size,
          align,
          radius,
          isIcon: false,
          className,
        })
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
};
ButtonLink.displayName = "ButtonLink";

export interface ButtonNavLinkProps
  extends RemixLinkProps,
    VariantProps<typeof buttonVariants> {}

export const ButtonNavLink = ({
  to = "/",
  variant = "default",
  accent = "default",
  size = "sm",
  align = "default",
  radius = "default",
  isIcon,
  className,
  children,
  ...props
}: ButtonNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={cn(
        buttonVariants({
          variant,
          accent,
          size,
          align,
          radius,
          isIcon: false,
          className,
        })
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
};
ButtonNavLink.displayName = "ButtonNavLink";

export interface ButtonLinkIconProps
  extends RemixLinkProps,
    VariantProps<typeof buttonVariants> {}

export const ButtonLinkIcon = ({
  to = "/",
  variant = "default",
  accent = "default",
  size = "default",
  align = "default",
  radius = "default",
  className,
  children,
  ...props
}: ButtonLinkIconProps) => {
  return (
    <NavLink
      to={to}
      className={cn(
        buttonVariants({
          variant,
          accent,
          size,
          align,
          radius,
          isIcon: true,
          className,
        })
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
};
ButtonLinkIcon.displayName = "ButtonLinkIcon";
