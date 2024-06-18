import { allProjects } from "~/data/projects"

export async function GET() {
	return new Response(JSON.stringify(allProjects))
}
