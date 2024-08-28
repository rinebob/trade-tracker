import { AppRoutes, AuthLevel, ButtonMetadata, NavItem } from "./interfaces-tt-core";

export const APP_SIDENAV_BUTTONS: ButtonMetadata[] = [
    {url: AppRoutes.DASHBOARD, text: 'dashboard', authLevel: AuthLevel.USER},
    {url: AppRoutes.TRADES, text: 'trades', authLevel: AuthLevel.UNKNOWN},
    {url: AppRoutes.IMAGES, text: 'images', authLevel: AuthLevel.USER},
    {url: AppRoutes.ANALYTICS, text: 'analytics', authLevel: AuthLevel.USER},
    {url: AppRoutes.SKILLS, text: 'skills', authLevel: AuthLevel.UNKNOWN},
    {url: AppRoutes.JOURNAL, text: 'journal', authLevel: AuthLevel.USER},
    {url: AppRoutes.LOGIN, text: 'login'},
    {url: AppRoutes.LOGOUT, text: 'logout'},
    {url: AppRoutes.DOCUMENTATION, text: 'documentation', authLevel: AuthLevel.UNKNOWN},
];


export const NAV_MENU_ITEMS: NavItem[] = [
    {
        name: 'dashboard',
        text: 'dashboard',
        href: 'dashboard',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    {
        name: 'trades',
        text: 'trades',
        href: 'trades',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    {
        name: 'images',
        text: 'images',
        href: 'images',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    {
        name: 'analytics',
        text: 'analytics',
        href: 'analytics',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    {
        name: 'skills',
        text: 'skills',
        href: 'skills',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    {
        name: 'journal',
        text: 'journal',
        href: 'journal',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    {
        name: 'login',
        text: 'don\'t log in',
        href: 'login',
        mobileOnly: false,
        external: true,
        target: '_self',
    },
    {
        name: 'logout',
        text: 'logout',
        href: '',
        mobileOnly: false,
        external: false,
        target: '_self',
    },
    // {
    //     name: 'chart',
    //     text: '',
    //     href: '/',
    //     mobileOnly: false,
    //     target: '_self',
    // },
    // {
    //     name: '',
    //     text: '',
    //     target: '',
    //     mobileOnly: false,
    //     children: [
    //         {
    //             name: '',
    //             text: '',
    //             href: '',
    //             target: '_self',
    //         },

]