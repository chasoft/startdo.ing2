import markdownit from "markdown-it"
import markdownItAttrs from "@gerhobbelt/markdown-it-attrs"

import { introduction } from "../data/welcome"

export default function Home() {
	const result = markdownit().use(markdownItAttrs).render(introduction)
	return (
		<main className="flex w-full max-w-[1440px] flex-grow flex-col justify-center gap-10 sm:px-8 md:px-24">
			<div
				className="prose xl:prose-xl dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-400"
				dangerouslySetInnerHTML={{ __html: result }}
			></div>
		</main>
	)
}
