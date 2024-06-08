import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProviders";

export default function Providers({children} : Readonly<{children : ReactNode}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}