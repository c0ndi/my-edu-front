import type { Metadata, ResolvingMetadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { notFound, useSearchParams } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Strona główna - MYEDU',
  description: "Przedstawiamy przyszłościowy system zarządzania edukacją, który ułatwia nauczycielom projektowanie spersonalizowanych testów i klasówek, a także zarządzanie lekcjami i materiałami dydaktycznymi.",
  openGraph: {
    images: [`https://my-edu.vercel.app/images/locales/pl/og.png`],
  },
}


const locales = ["pl", "en", "ua", "de"];

export default function RootLayout({
  children,
  params: {
    locale
  }
}: {
  children: React.ReactNode,
  params: {
    locale: string
  }
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
