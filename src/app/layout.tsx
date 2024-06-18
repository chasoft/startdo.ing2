/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

import { getRouteTitle } from "~/utils"
import logo from "~/assets/icon.svg"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: getRouteTitle(),
	description:
		"A central hub showcasing Brian's projects, providing detailed documentation, and offering insights into his work."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex min-h-svh flex-col gap-10 p-4 pb-10 lg:gap-4 lg:pb-20">
					<header className="flex w-full justify-between">
						<div>
							<Link href="/" tabIndex={0}>
								<img src={logo} alt="logo" width={40} height={40} />
							</Link>
						</div>
						<div>{/* EMPTY INTENTIONALLY */}</div>
					</header>
					{children}
				</div>
			</body>
		</html>
	)
}
