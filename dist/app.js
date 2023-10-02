"use strict";
class Exercise {
    id;
    name;
    static exercises = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Sets extends Exercise {
    sets;
    completedSets;
    constructor(id, name, sets) {
        super(id, name);
        this.sets = sets;
        this.completedSets = new Array(sets).fill(false);
    }
    set markSetComplete(setNumber) {
        if (!setNumber) {
            throw new Error("No set number provided");
        }
        this.completedSets[setNumber] = true;
    }
}
class RepBasedStrengthExercise extends Sets {
    reps;
    weight;
    constructor(id, name, sets, reps, weight) {
        super(id, name, sets);
        this.reps = reps;
        this.weight = weight;
    }
    describe() {
        console.log(`\nExercise ${this.id}: ${this.name} is rep based`);
        console.log("Weight is", this.weight);
        console.log("Reps is", this.reps);
    }
    get getReps() {
        if (typeof this.reps === "string") {
            return this.reps;
        }
        return this.reps;
    }
}
class TimeBasedStrengthExercise extends Sets {
    duration;
    weight;
    constructor(id, name, sets, duration, weight) {
        super(id, name, sets);
        this.duration = duration;
        this.weight = weight;
    }
    describe() {
        console.log(`\nExercise ${this.id}: ${this.name} is time based`);
        console.log("Weight is", this.weight);
        console.log("Duration is", this.duration);
    }
}
class Workouts {
    name;
    excerciseList;
    constructor(name, excerciseList) {
        this.name = name;
        this.excerciseList = excerciseList;
    }
    mssg(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let allExercises;
allExercises = new Workouts("Workout Template 1", [
    new RepBasedStrengthExercise("A1", "Incline Press", 4, 8, 100),
]);
allExercises.mssg("This is");
class AllWorkouts {
    excerciseList;
    static workouts = [];
    constructor(excerciseList) {
        this.excerciseList = excerciseList;
        AllWorkouts.workouts = excerciseList;
    }
    static getList(exerciseList) {
        return new AllWorkouts([...AllWorkouts.workouts, ...exerciseList]);
    }
}
const everyWorkout = AllWorkouts.getList([
    new RepBasedStrengthExercise("A1", "Incline Press", 4, 8, 100),
]);
console.log(everyWorkout);
//# sourceMappingURL=app.js.map