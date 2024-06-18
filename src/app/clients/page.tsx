import { Metadata } from "next"

import { allClients } from "~/data/clients"
import { getRouteTitle } from "~/utils"
import styles from "./page.module.css"

export const metadata: Metadata = {
	title: getRouteTitle("Clients"),
	description:
		"Explore Brian's portfolio to discover the diverse range of clients he's collaborated with."
}

export default function ClientsRoute() {
	return (
		<main className="flex w-full max-w-[1440px] flex-grow flex-col gap-10 sm:p-8 md:p-24">
			<div className="prose xl:prose-xl dark:prose-invert">
				<h1>Clients</h1>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{allClients.map((client) => (
					<div
						key={client.name}
						tabIndex={0}
						className="aspect-video transition-duration-300 group flex flex-col gap-2 rounded-md border border-gray-200 bg-gray-50 p-4 text-slate-800 transition-all hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
					>
						<h2 className="transition-duration-300 relative text-lg font-semibold transition-all group-hover:pl-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
							<a
								href={client.primaryUrl}
								target="_blank"
								aria-label={client.name}
								className={`${styles["hover-effect"]} dark:before:bg-red-400`}
							>
								{client.name}
							</a>
						</h2>
						<p className="text-balance">{client.description}</p>
					</div>
				))}
			</div>
		</main>
	)
}
