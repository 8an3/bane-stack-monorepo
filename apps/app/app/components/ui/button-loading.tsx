import { forwardRef } from "react";

import { Button, buttonVariants } from "~/components/ui";
import { cn } from "~/components/ui/utils";

import type { VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { NavLink, useLocation, useNavigation, useResolvedPath } from "@remix-run/react";



export const ButtonLoading = forwardRef<HTMLButtonElement, ButtonLoadingProps>(
  (
    {
      type = "button",
      variant = "outline",
      accent = "default",
      size = "sm",
      weight = "default",
      radius = "default",
      align = "default",
      className,
      children,
      isSubmitting = false,
      loadingText = "",
      isDisabledWhenLoading = true,
      name,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        type={type}
        ref={ref}
        disabled={isDisabledWhenLoading ? isSubmitting : isDisabledWhenLoading}
        className={cn(
          "text-foreground  cursor-pointer  border-border",
          buttonVariants({
            variant,
            accent,
            size,
            weight,
            radius,
            align,
            isIcon: false,
            className,
          })
        )}
        name={name}
        value={value}
        {...props}
      >
        {isSubmitting && <LoaderCircle className="animate-spin" />}
        {isSubmitting ? loadingText : children}
      </Button>
    );
  }
);

export const NavButton = ({
  to = "/",
  variant = "ghost",
  accent = "default",
  size = "default",
  align = "default",
  radius = "0px",
  prefetch = "intent",
  isIcon,
  className,
  spinnerColor = 'border-blue-500',
  spinnerSize = 6, // in rem units
  disabled = false,
  loadingText = "Navigating...",
  isDisabledWhenLoading = true,
  children,
  ...props
}: ButtonNLProps) => {
  const nav = useNavigation()
  const resolvedTo = useResolvedPath(to);

  const isSubmitting = nav.state === 'submitting';

  const isNavigating = nav.state === 'loading' && nav.location?.pathname === resolvedTo.pathname;

  const isDisabled = isDisabledWhenLoading && isNavigating;

  const location = useLocation();

  const pathname = location.pathname

  const baseClasses = cn(
    buttonVariants({ variant, accent, size, radius, align, isIcon }),
    "text-neutral-600",   {  'bg-[#222323]': pathname === to,   },
    className
  );
  return (
    <Button size={size} variant={variant} asChild disabled={disabled || isDisabled || isSubmitting}>
      <NavLink to={to} preventScrollReset prefetch={prefetch} className={cn(baseClasses)} {...props}>
        {isNavigating ? (
          <div className='flex items-center gap-3'>
            <div className="flex items-center justify-center h-full">
              <div className={`animate-spin rounded-full h-${spinnerSize} w-${spinnerSize} border-t-4 border-${spinnerColor} border-solid`}></div>
            </div>
            <p className='ml-3'>{loadingText}</p>
          </div>
        ) : (
          children
        )}
      </NavLink >
    </Button>
  );
};
export const NavButtonStyled = ({
  primary = true,
  to = "/",
  variant = primary === 'dashed' ? 'outline' : "ghost",
  accent = "default",
  size = primary === 'dashed' ? 'sm' : "default",
  align = "default",
  radius = "0px",
  prefetch = "intent",
  isIcon,
  className,
  disabled = false,
  loadingText = "Navigating...",
  spinnerColor = 'border-blue-500',
  spinnerSize = 6, // in rem units
  isDisabledWhenLoading = true,
  children,
  ...props
}: ButtonNLProps) => {
  const nav = useNavigation()
  const resolvedTo = useResolvedPath(to);

  const isSubmitting = nav.state === 'submitting';

  const isNavigating = nav.state === 'loading' && nav.location?.pathname === resolvedTo.pathname;

  const isDisabled = isDisabledWhenLoading && isNavigating;

  const baseClasses = cn(
    buttonVariants({ variant, accent, size, radius, align, isIcon }),
    "transition duration-300 border-2 border-border w-[95%] text-center mx-auto  text-white px-6 py-3 rounded-none",
    className
  );

  const primaryClasses =
    primary === true
      ? "bg-[#2563eb] hover:bg-[#16171a]"
      : primary === false
        ? "bg-[#121212] hover:bg-[#2563eb]"
        : primary === "dashed"
          ? "h-8 border-dashed"
          : "";

  return (
    <Button size={size} variant={variant} asChild disabled={disabled || isDisabled || isSubmitting}>
      <NavLink
        to={to}
        prefetch={prefetch}
        preventScrollReset
        className={cn(baseClasses, primaryClasses)}
        {...props}
      >
        {isNavigating ? (
          <div className='flex items-center gap-3'>
            <div className="flex items-center justify-center h-full">
              <div className={`animate-spin rounded-full h-${spinnerSize} w-${spinnerSize} border-t-4 border-${spinnerColor} border-solid`}></div>
            </div>
            <p className='ml-3'>{loadingText}</p>
          </div>
        ) : (
          children
        )}
      </NavLink>
    </Button>
  );
};
export const ButtonStyled = ({
  primary = true,
  variant = typeof primary === 'string' ? 'outline' : 'ghost',
  accent = "default",
  size = primary === 'dashed' ? 'sm' : "default",
  align = "default",
  radius = "0px",
  type = 'submit',
  name = 'intent',
  value = 'actionForm',
  isIcon,
  className,
  disabled = false,
  loadingText = "Submitting...",
  isDisabledWhenLoading = true,
  spinnerColor = 'border-blue-500',
  spinnerSize = 6,
  children,
  ...props
}: ButtonNLProps) => {
  const nav = useNavigation()

  const isNavigating = nav.state === 'loading';

  const isSubmitting = nav.state === 'submitting';

  const isDisabled = isDisabledWhenLoading && isSubmitting;

  const baseClasses = cn(
    buttonVariants({ variant, accent, size, radius, align, isIcon }),
    "transition duration-300 border-2 border-border w-full text-center mx-auto rounded-none  text-white px-6 py-3",
    className
  );

  const primaryClasses =
    primary === true
      ? "bg-[#2563eb] hover:bg-[#16171a]"
      : primary === false
        ? "bg-[#121212] hover:bg-[#2563eb]"
        : primary === "dashed"
          ? "h-8 border-dashed"
          : "";

  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      name={name}
      value={value}
      disabled={disabled || isDisabled || isNavigating}
      aria-busy={isSubmitting}
      className={cn(baseClasses, primaryClasses)}
      {...props}
    >
      {isSubmitting ? (
        <div className='flex items-center gap-3'>
          <div className="flex items-center justify-center h-full">
            <div className={`animate-spin rounded-full h-${spinnerSize} w-${spinnerSize} border-t-4 border-${spinnerColor} border-solid`}></div>
          </div>
          <p className='ml-3'>{loadingText}</p>
        </div>
      ) : (
        children
      )}
    </Button >
  );
};
export const PaginationButton = ({
  to = "/",
  variant = "outline",
  accent = "default",
  size = "icon",
  align = "default",
  radius = "0px",
  prefetch = "intent",
  isIcon,
  className,
  disabled = false,
  loadingText = "",
  isDisabledWhenLoading = true,
  spinnerColor = 'border-blue-500',
  spinnerSize = 6, // in rem units
  children,
  ...props
}: ButtonNLProps) => {
  const nav = useNavigation()
  const resolvedTo = useResolvedPath(to);

  const isSubmitting = nav.state === 'submitting';

  const isNavigating = nav.state === 'loading' && nav.location?.pathname === resolvedTo.pathname;

  const isDisabled = isDisabledWhenLoading && isNavigating;

  const baseClasses = cn(
    buttonVariants({ variant, accent, size, radius, align, isIcon }),
    "text-neutral-600",
    className
  );

  return (
    <Button size={size} variant={variant} asChild disabled={disabled || isDisabled || isSubmitting}>
      <NavLink
        to={to}
        prefetch={prefetch}
        preventScrollReset
        className={cn(baseClasses)}
        {...props}
      >
        {isNavigating ? (
          <div className='flex items-center gap-3'>
            <div className="flex items-center justify-center h-full">
              <div className={`animate-spin rounded-full h-${spinnerSize} w-${spinnerSize} border-t-4 border-${spinnerColor} border-solid`}></div>
            </div>
            <p className='ml-3'>{loadingText}</p>
          </div>
        ) : (
          children
        )}
      </NavLink>
    </Button>
  );
};

export const ButtonNL = ({
  to = "/",
  variant = "ghost",
  accent = "default",
  size = "default",
  align = "default",
  radius = "default",
  isIcon,
  className,
  isSubmitting = false,
  loadingText = "",
  isDisabledWhenLoading = true,
  children,
  ...props
}: ButtonNLProps) => {
  const location = useLocation();
  const pathname = location.pathname
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={cn(
        buttonVariants({
          variant,
          accent,
          size,
          radius,
          align,
          isIcon: false,
          className,
        }),
        pathname === to
          ? "bg-transparent hover:text-[#2563eb] text-[#f1f1f1] bg-transparent"
          : "hover:bg-transparent hover:text-[#f1f1f1] text-[#2563eb] bg-transparent",
        "justify-start"
      )
      }
      {...props}
    >
      {isSubmitting && <LoaderCircle className="animate-spin" />}
      {isSubmitting ? loadingText : children}
    </NavLink >
  );
};
export interface ButtonLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isSubmitting?: boolean;
  loadingText?: React.ReactNode;
  isDisabledWhenLoading?: boolean;
}
ButtonNL.displayName = "ButtonNL";
ButtonLoading.displayName = "ButtonLoading";
export interface ButtonNLProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isSubmitting?: boolean;
  loadingText?: React.ReactNode;
  isDisabledWhenLoading?: boolean;
}
