export class StylistModel {
    name: string;
    time?: string[];
    weekdays?: string[];

    constructor(name: string, time: string[], weekdays: string[]) {
        this.name = name;
        this.time = time;
        this.weekdays = weekdays;
    }
}
