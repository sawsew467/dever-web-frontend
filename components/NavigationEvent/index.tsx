'use client'
 
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Reloading from '../Reloading'
 
export function NavigationEvents():JSX.Element {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    setTimeout(() => {
      setIsLoading(false);
    },2400)
    setIsLoading(true)
  }, [pathname, searchParams])
 
  return <>
    {isLoading ? <Reloading isLoading={isLoading}/> : null}
  </>
}