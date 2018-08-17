import { EventEmitter, Output } from "@angular/core";

export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    acToInCounter: boolean = false;

    @Output() counterEvent = new EventEmitter<boolean>();
    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterEvent.emit(!this.acToInCounter);
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterEvent.emit(this.acToInCounter);
    }
}