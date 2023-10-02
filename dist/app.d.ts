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
    reps: number | string;
    weight: number;
    constructor(id: string, name: string, sets: number, reps: number | string, weight: number);
    describe(): void;
    get getReps(): string | number;
}
declare class TimeBasedStrengthExercise extends Sets {
    duration: number;
    weight: number;
    constructor(id: string, name: string, sets: number, duration: number, weight: number);
    describe(): void;
}
type ExcerciseTypes = RepBasedStrengthExercise | TimeBasedStrengthExercise;
interface Named {
    readonly name: string;
}
interface ExerciseList {
    excerciseList: ExcerciseTypes[];
}
interface Greetable extends Named, ExerciseList {
    mssg(phrase: string): void;
}
declare class Workouts implements Greetable {
    name: string;
    excerciseList: ExcerciseTypes[];
    constructor(name: string, excerciseList: ExcerciseTypes[]);
    mssg(phrase: string): void;
}
declare let allExercises: Greetable;
declare class AllWorkouts implements ExerciseList {
    excerciseList: ExcerciseTypes[];
    static workouts: ExcerciseTypes[];
    private constructor();
    static getList(exerciseList: ExcerciseTypes[]): AllWorkouts;
}
declare const everyWorkout: AllWorkouts;
//# sourceMappingURL=app.d.ts.map