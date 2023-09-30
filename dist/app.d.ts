declare class Workout {
    protected readonly id: string;
    name: string;
    constructor(id: string, name: string);
}
declare class Sets extends Workout {
    sets: number;
    protected completedSets: boolean[];
    constructor(id: string, name: string, sets: number);
    describe(): void;
    set markSetComplete(setNumber: number);
}
declare class RepBasedStrengthWorkout extends Sets {
    reps: number | string;
    weight: number;
    constructor(id: string, name: string, sets: number, reps: number | string, weight: number);
    describe(): void;
    get getReps(): string | number;
}
declare const repBasedStrengthWorkout: RepBasedStrengthWorkout;
declare class TimeBasedStrengthWorkout extends Sets {
    duration: number;
    weight: number;
    constructor(id: string, name: string, sets: number, duration: number, weight: number);
    describe(): void;
}
declare const timeBasedStrengthWorkout: TimeBasedStrengthWorkout;
declare class CardioWorkout extends Workout {
    distance: number;
    duration: number;
    constructor(id: string, name: string, distance: number, duration: number);
    describe(): void;
}
declare const cardioWorkout: CardioWorkout;
//# sourceMappingURL=app.d.ts.map