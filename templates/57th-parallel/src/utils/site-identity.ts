/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "57th Parallel";
const DEFAULT_SITE_TAGLINE = "North of Ordinary";
const DEFAULT_LOGO_URL = "/57th-parallel-logo.svg";
const DEFAULT_FAVICON_URL = "/favicon-57-red.svg";

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	const siteTitle = settings?.title?.trim() || DEFAULT_SITE_TITLE;
	const siteTagline = settings?.tagline?.trim() || DEFAULT_SITE_TAGLINE;
	return {
		siteTitle,
		siteTagline,
		siteLogo: {
			mediaId: settings?.logo?.mediaId ?? "57th-logo",
			alt: settings?.logo?.alt || siteTitle,
			url: DEFAULT_LOGO_URL,
		},
		siteFavicon: DEFAULT_FAVICON_URL,
	};
}
