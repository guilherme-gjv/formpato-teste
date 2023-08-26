// app/formbricks.tsx
"use client";
import formbricks from "@formbricks/js";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.init({
      environmentId: "cllrbivkz01osns0govy6kx8z",
      apiHost: "http://localhost:3000/", // e.g. https://app.formbricks.com
      debug: true, // remove when in production
    });
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}
