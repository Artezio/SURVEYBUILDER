import { Dispatch } from "../Dispatch";

export type Theme = {
    title: string,
    href: string
};

export interface MainLayoutOwnProps {
    themes: Theme[]
}

export interface MainLayoutProps extends MainLayoutStore, MainLayoutOwnProps {
    dispatch: Dispatch;
}

export interface MainLayoutStore {
    currentTheme?: Theme;
    bootstrapThemes?: Theme[];
}