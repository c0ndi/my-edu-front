import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pl", "ua", "de"],
  defaultLocale: "default",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
