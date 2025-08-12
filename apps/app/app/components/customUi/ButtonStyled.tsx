import { NavLink, useLocation, useNavigation, useResolvedPath } from "@remix-run/react";
import { cn } from "../ui/utils";
import { Button, buttonVariants } from "../ui/button";



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
}) => {
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