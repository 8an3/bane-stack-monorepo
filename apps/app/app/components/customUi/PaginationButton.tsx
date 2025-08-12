import { NavLink, useLocation, useNavigation, useResolvedPath } from "@remix-run/react";
import { cn } from "~/components/ui/utils";
import { Button, buttonVariants } from "./button";



export const PaginationButton = ({
  to = "/",
  variant = "outline",
  accent = "default",
  size = "icon",
  align = "default",
  radius = "0px",
  prefetch = "intent",
  isIcon = false,
  className,
  disabled = false,
  loadingText = "",
  isDisabledWhenLoading = true,
  spinnerColor = 'border-blue-500',
  spinnerSize = 6, // in rem units
  children,
}) => {
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