export class LocalStorageHelper {

    static save(key: string, data?: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch {

        }
    }

    static get(key: string) {
        try {
            return JSON.parse(localStorage.getItem(key) || '');
        } catch {

        }
    }

    static remove(key: string) {
        try {
            localStorage.removeItem(key);
        } catch {

        }
    }
}

export default LocalStorageHelper;