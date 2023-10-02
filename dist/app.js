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
let allExercises;
allExercises = {
    name: "Workout Template 1",
    excerciseList: [
        new RepBasedStrengthExercise("A1", "Incline Press", 4, 8, 100),
    ],
    mssg(phrase) {
        console.log(phrase + " " + this.name);
    },
};
allExercises.mssg("This is");
//# sourceMappingURL=app.js.map