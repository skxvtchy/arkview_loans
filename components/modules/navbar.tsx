import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/20 backdrop-blur-md border-b border-zinc-200/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            ARKVIEW
          </Link>
          <div className="hidden items-center gap-6 text-[13px] font-medium text-zinc-500 md:flex">
            <Link href="#product" className="transition-colors hover:text-zinc-900">
              Platform
            </Link>
            <Link href="#solutions" className="transition-colors hover:text-zinc-900">
              Integrations
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-zinc-900">
              Enterprise
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-zinc-900 px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-zinc-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
