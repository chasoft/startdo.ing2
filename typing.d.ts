declare module "@gerhobbelt/markdown-it-attrs" {
	import MarkdownIt from "markdown-it"
	function markdownItAttrs(md: MarkdownIt, options?: any): MarkdownIt
	export = markdownItAttrs
}
