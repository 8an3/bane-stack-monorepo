import { Outlet } from "@remix-run/react";

						export default function Route() {
						return (
							<div className="min-h-screen">
							<Outlet />
							</div>
						);
						}