const pad = (number: number | undefined, length: number) => {
    if (number === undefined) return;
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

interface IHumanReadableGuid {
    getHumanReadableId(key: string): string;
    updateKey(oldKey: string, newKey: string): void;
}

export const HumanReadableGuid = (function () {
    let instance: IHumanReadableGuid;
    const init = (): IHumanReadableGuid => {
        let counter: number = 1;
        const itemsMap: Map<string, number> = new Map<string, number>();;
        const _getHumanReadableId = (key: string): string => {
            if (!itemsMap.has(key)) {
                itemsMap.set(key, counter++)
            }
            return pad(itemsMap.get(key), 3) || '';
        }
        const _updateKey = (oldKey: string, newKey: string): void => {
            if (!itemsMap.has(oldKey)) return;
            const counter = itemsMap.get(oldKey);
            itemsMap.set(newKey, counter as number);
            itemsMap.delete(oldKey);
        }
        return {
            getHumanReadableId(key: string): string {
                return _getHumanReadableId(key);
            },
            updateKey(oldKey: string, newKey: string): void {
                _updateKey(oldKey, newKey);
            }
        };
    }
    return {
        getHumanReadableGuid() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})()

export default HumanReadableGuid;