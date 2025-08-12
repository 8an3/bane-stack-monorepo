import { NavLink, useLocation, useNavigation, useResolvedPath } from "@remix-run/react";
import { cn } from "../ui/utils";
import { Button, buttonVariants } from "../ui/button";



export const NavButton = ({
    to = "/",
    variant = "ghost",
    accent = "default",
    size = "default",
    align = "default",
    radius = "0px",
    prefetch = "intent",
    isIcon = false,
    className,
    spinnerColor = 'border-blue-500',
    spinnerSize = 6, // in rem units
    disabled = false,
    loadingText = "Navigating...",
    isDisabledWhenLoading = true,
    children,
}) => {
    const nav = useNavigation()
    const resolvedTo = useResolvedPath(to);

    const isSubmitting = nav.state === 'submitting';

    const isNavigating = nav.state === 'loading' && nav.location?.pathname === resolvedTo.pathname;

    const isDisabled = isDisabledWhenLoading && isNavigating;

    const location = useLocation();

    const pathname = location.pathname

    const baseClasses = cn(
        buttonVariants({ variant, accent, size, radius, align, isIcon }),
        "text-neutral-600", { 'bg-[#222323]': pathname === to, },
        className
    );
    return (
        <Button size={size} variant={variant} asChild disabled={disabled || isDisabled || isSubmitting}>
            <NavLink to={to} preventScrollReset prefetch={prefetch} className={cn(baseClasses)}>
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