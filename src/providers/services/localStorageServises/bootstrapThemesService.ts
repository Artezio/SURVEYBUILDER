import { LocalStorageHelper } from './localStorageHelper';
import { Theme } from '../../../interface/layouts/MainLayoutProps';

const key = 'bootstrapCurrentTheme';

export const bootstrapCurrentThemeService = {
    getCurrentTheme() {
        return LocalStorageHelper.get(key);
    },
    setCurrentTheme(theme: Theme) {
        return LocalStorageHelper.save(key, theme);
    },
    removeCurrentTheme() {
        return LocalStorageHelper.remove(key);
    }
}