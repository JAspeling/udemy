export class LoggingService {
    id: Guid = Guid.newGuid();
    logStatusChange(status: string): void {
        console.log(`A server status changed, new status: ` + status);
    }
}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}