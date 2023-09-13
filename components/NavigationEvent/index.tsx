"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Reloading from "../Reloading";

export function NavigationEvents(): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(isLoading => false);
    }, 2300);
    setIsLoading(true);
  }, [pathname, searchParams]);  
  return <>{isLoading ? <Reloading /> : null}</>;
}
