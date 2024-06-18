type Deployment = "Vercel" | "Cloudflare" | "Github Pages"
type Framework = "Next" | "Remix" | "Vue" | "Angular" | "Astro"

type Project = {
	name: string
	description: string
	assets: {
		logo: string
		thumbnail: string
		background: string
	}
	primaryUrl: string
	secondaryUrl?: string
	deployment: Deployment
	framework: Framework
	tag: string[]
}

export const allProjects: Project[] = [
	{
		name: "Traveling Events",
		description:
			"A web application enabling users to discover and explore travel events happening in their desired location.",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://traveling.events",
		secondaryUrl: "https://traveling.startdo.ing",
		deployment: "Vercel",
		framework: "Angular",
		tag: []
	},
	{
		name: "Cao Anh",
		description: "My personal website",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://anh.pw",
		deployment: "Cloudflare",
		framework: "Angular",
		tag: []
	},
	{
		name: "Việt Cờ Tướng",
		description: "Learn Chinese Chess",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://vietcotuong.com",
		deployment: "Cloudflare",
		framework: "Astro",
		tag: []
	},
	{
		name: "Tự Học Chữ Hán",
		description: "Learn Chinese Characters for Vietnamese",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://tuhocchuhan.startdo.ing",
		deployment: "Cloudflare",
		framework: "Astro",
		tag: []
	},
	{
		name: "Truyện | Tàng Kinh Các",
		description: "Reading stories and articles",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://truyen.startdo.ing",
		deployment: "Cloudflare",
		framework: "Astro",
		tag: []
	},
	{
		name: "Domain",
		description:
			"A comprehensive resource for understanding domain names: Learn how they work, explore available options, and discover the perfect domain for your online presence.",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://domain.startdo.ing",
		deployment: "Cloudflare",
		framework: "Astro",
		tag: []
	},
	{
		name: "Sáng | Tư duy phản biện",
		description:
			"A comprehensive resource for understanding and identifying logical fallacies, empowering individuals to think critically and engage in constructive dialogue.",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://sáng.vn",
		deployment: "Vercel",
		framework: "Next",
		tag: []
	},
	{
		name: "Events Countdown",
		description:
			"A visually stunning countdown website for personalized events (birthdays, holidays, anniversaries, etc.) with customizable themes and informative content.",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://events.startdo.ing",
		deployment: "Vercel",
		framework: "Next",
		tag: []
	},
	{
		name: "Join With Me",
		description:
			"Looking for a IT related job at FPT Software? Getting referred can help you stand out! Have a friend submit your CV through this form to get noticed by the recruiters. Plus, I offer interview mentoring to give you an extra edge.",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://jobs.id.vn",
		secondaryUrl: "https://jobs.startdo.ing",
		deployment: "Cloudflare",
		framework: "Remix",
		tag: []
	},
	{
		name: "Online Games",
		description:
			"Rediscover the joy of classic games online. Join our community of players and challenge yourself with chess, bingo, and more!",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://play.startdo.ing",
		deployment: "Cloudflare",
		framework: "Remix",
		tag: []
	},
	{
		name: "AI Hub",
		description: "AI Hub",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://chat.startdo.ing",
		deployment: "Cloudflare",
		framework: "Remix",
		tag: []
	},
	{
		name: "Chasoft Labs",
		description: "Home of Chasoft Labs",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://chasoft.net",
		deployment: "Github Pages",
		framework: "Vue",
		tag: []
	},
	{
		name: "Random Everything",
		description: "Random Everything",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://random.startdo.ing",
		deployment: "Vercel",
		framework: "Vue",
		tag: []
	},
	{
		name: "Cao Family",
		description: "Cao Family Project",
		assets: {
			logo: "string",
			thumbnail: "string",
			background: "string"
		},
		primaryUrl: "https://cao.id.vn",
		deployment: "Cloudflare",
		framework: "Vue",
		tag: []
	}
]
