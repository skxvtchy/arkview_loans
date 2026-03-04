import Link from "next/link";
import { FieldSeparator } from "../ui/field";

export function LoginForm({
  className = "",
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      className={`flex flex-col gap-6 ${className}`.trim()}
      {...props}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-zinc-900">Login to your account</h1>
          <p className="text-sm text-zinc-500 text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <Link
              href="/reset-password"
              className="ml-auto text-sm text-zinc-500 underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Login
        </button>
        <FieldSeparator>Or continue with</FieldSeparator>
        <div className="space-y-4">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with GitHub
          </button>
          <p className="text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-zinc-900 underline underline-offset-4 hover:no-underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
