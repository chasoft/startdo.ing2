import { Metadata } from "next"

import { allProjects } from "~/data/projects"
import { getRouteTitle } from "~/utils"
import styles from "./page.module.css"

export const metadata: Metadata = {
	title: getRouteTitle("Projects"),
	description:
		"Explore Brian's portfolio of projects. Discover in-depth documentation, live demos, and the stories behind each creation."
}

export default function ShowcaseRoute() {
	return (
		<main className="flex w-full max-w-[1440px] flex-grow flex-col gap-10 sm:p-8 md:p-24">
			<div className="prose xl:prose-xl dark:prose-invert">
				<h1>Projects</h1>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{allProjects.map((project) => (
					<div
						key={project.name}
						tabIndex={0}
						className="aspect-video transition-duration-300 group flex flex-col gap-2 rounded-md border border-gray-200 bg-gray-50 p-4 text-slate-800 transition-all hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
					>
						<h2 className="transition-duration-300 relative text-lg font-semibold transition-all group-hover:pl-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
							<a
								href={project.primaryUrl}
								target="_blank"
								aria-label={project.name}
								className={`${styles["hover-effect"]} dark:before:bg-red-400`}
							>
								{project.name}
							</a>
						</h2>
						<p className="text-balance">{project.description}</p>
					</div>
				))}
			</div>
		</main>
	)
}
