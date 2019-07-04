const pad = (number: number | undefined, length: number) => {
    if (number === undefined) return;
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

export class HumanReadableGuid {
    private counter: number;
    private itemsMap: Map<string, number>;

    private constructor(initialCounter: number, itemsMap?: Map<string, number>) {
        this.counter = initialCounter;
        this.itemsMap = itemsMap || new Map();
    }

    private static instance?: HumanReadableGuid;
    static getHumanReadableGuid(initialCounter: number | undefined = 0, itemsMap?: Map<string, number>): HumanReadableGuid {
        if (!HumanReadableGuid.instance) {
            HumanReadableGuid.instance = new HumanReadableGuid(initialCounter, itemsMap);
        }
        return HumanReadableGuid.instance;
    }

    public getHumanReadableId(key: string): string {
        if (!this.itemsMap.has(key)) {
            this.itemsMap.set(key, ++this.counter)
        }
        return pad(this.itemsMap.get(key), 3) || '';
    }

    public updateKey(oldKey: string, newKey: string) {
        if (!this.itemsMap.has(oldKey)) return;
        const counter = this.itemsMap.get(oldKey);
        this.itemsMap.set(newKey, counter as number);
        this.itemsMap.delete(oldKey);
    }
}

export default HumanReadableGuid;