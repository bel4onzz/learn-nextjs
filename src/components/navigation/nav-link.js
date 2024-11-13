"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavLink = ({ href, children }) => {
  const path = usePathname();
  // Check if the current route matches or starts with the href
  const isActive =
    href === "/"
      ? path === href // Exact match for the homepage
      : path.startsWith(href);

  return (
    <>
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={classNames(
          isActive
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "rounded-md px-3 py-2 text-sm font-medium"
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
