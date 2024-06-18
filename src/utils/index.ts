const siteTitle = "Startdo.ing"

export const getRouteTitle = (title?: string) =>
	title ? `${siteTitle} - ${title}` : siteTitle
