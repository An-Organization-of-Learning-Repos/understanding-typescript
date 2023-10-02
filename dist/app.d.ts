declare abstract class Exercise {
    protected readonly id: string;
    name: string;
    static exercises: Exercise[];
    constructor(id: string, name: string);
    abstract describe(this: Exercise): void;
}
declare abstract class Sets extends Exercise {
    sets: number;
    protected completedSets: boolean[];
    constructor(id: string, name: string, sets: number);
    abstract describe(this: Sets): void;
    set markSetComplete(setNumber: number);
}
declare class RepBasedStrengthExercise extends Sets {
    protected reps: number | string;
    weight: number;
    constructor(id: string, name: string, sets: number, reps: number | string, weight: number);
    describe(): void;
    get getReps(): string | number;
}
interface Greetable {
    name: string;
    excerciseList: Exercise[];
    mssg(phrase: string): void;
}
declare let allExercises: Greetable;
//# sourceMappingURL=app.d.ts.map