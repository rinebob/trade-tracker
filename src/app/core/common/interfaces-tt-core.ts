

export enum AppRoutes {
	LOGIN = 'login',
	LOGOUT = 'logout',
	DASHBOARD = 'dashboard',
    TRADES = 'trades',
    IMAGES = 'images',
    SKILLS = 'skills',
    JOURNAL = 'journal',
    ANALYTICS = 'analytics',
	DOCUMENTATION = 'documentation',
}

export enum AuthLevel {
    OWNER = 'owner',
    ADMIN = 'admin',
    USER = 'user',
    UNKNOWN = 'unknown',
}

export interface NavItem {
    name: string;
    text: string;
    href: string;
    external: boolean;
    children?: NavItem[];
    target?: string;
    mobileOnly?: boolean;
}

export interface ButtonMetadata {
	url: string;
	fragment?: string;
	text: string;
	authLevel?: AuthLevel;
}