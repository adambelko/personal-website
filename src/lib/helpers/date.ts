export const formatDate = (timestamp: string) =>
	new Intl.DateTimeFormat("en-AU", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "Australia/Sydney"
	}).format(new Date(timestamp))
