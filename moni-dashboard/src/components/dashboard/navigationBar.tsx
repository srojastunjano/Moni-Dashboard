/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FHq3XxMqPGa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { MountainIcon, MenuIcon, HomeIcon, PackageIcon, InfoIcon, MailIcon, SettingsIcon } from "lucide-react"
import { Button } from "../ui/button"

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background px-4 py-3 md:hidden">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-4 px-4 py-6">
                <Link href="#" className="flex items-center gap-2 font-medium" prefetch={false}>
                  <HomeIcon className="h-5 w-5" />
                  Hello
                </Link>
                <Link href="#" className="flex items-center gap-2 font-medium" prefetch={false}>
                  <PackageIcon className="h-5 w-5" />
                  Products
                </Link>
                <Link href="#" className="flex items-center gap-2 font-medium" prefetch={false}>
                  <InfoIcon className="h-5 w-5" />
                  About
                </Link>
                <Link href="#" className="flex items-center gap-2 font-medium" prefetch={false}>
                  <MailIcon className="h-5 w-5" />
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="hidden h-full w-14 flex-col border-r bg-background md:flex">
          <div className="flex flex-1 flex-col items-center gap-4 px-2 py-5">
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground"
              prefetch={false}
            >
              <MountainIcon className="h-5 w-5" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                  >
                    <HomeIcon className="h-5 w-5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Home</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                  >
                    <PackageIcon className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Products</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                  >
                    <InfoIcon className="h-5 w-5" />
                    <span className="sr-only">About</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">About</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                  >
                    <MailIcon className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Contact</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                  >
                    <SettingsIcon className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </nav>
        <main className="flex-1 px-4 py-6 md:px-6">
          <h1 className="text-2xl font-bold">Welcome to Acme Inc</h1>
          <p className="mt-4 text-muted-foreground">Explore our products and learn more about our company.</p>
        </main>
      </div>
      <nav className="fixed bottom-0 z-40 flex w-full items-center justify-around border-t bg-background px-4 py-3 md:hidden">
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-accent transition-colors hover:text-accent-foreground"
          prefetch={false}
        >
          <PackageIcon className="h-5 w-5" />
          <span className="text-xs">Products</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          <InfoIcon className="h-5 w-5" />
          <span className="text-xs">About</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          prefetch={false}
        >
          <MailIcon className="h-5 w-5" />
          <span className="text-xs">Contact</span>
        </Link>
      </nav>
    </div>
  )
}