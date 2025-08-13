import { Button, buttonVariants } from "~/components/ui";
import { NavLink, useLocation, useNavigation, useResolvedPath } from "@remix-run/react";
import { cn } from "~/components/ui/utils";


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
}) => {
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