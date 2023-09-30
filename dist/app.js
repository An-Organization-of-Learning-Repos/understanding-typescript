"use strict";
class Workout {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Sets extends Workout {
    sets;
    completedSets;
    constructor(id, name, sets) {
        super(id, name);
        this.sets = sets;
        this.completedSets = new Array(sets).fill(false);
    }
    describe() {
        console.log(`\nWorkout ${this.id}: ${this.name}`);
        console.log("Sets is", this.sets);
    }
    set markSetComplete(setNumber) {
        if (!setNumber) {
            throw new Error("No set number provided");
        }
        this.completedSets[setNumber] = true;
    }
}
class RepBasedStrengthWorkout extends Sets {
    reps;
    weight;
    constructor(id, name, sets, reps, weight) {
        super(id, name, sets);
        this.reps = reps;
        this.weight = weight;
    }
    describe() {
        console.log(`\nWorkout ${this.id}: ${this.name} is rep based`);
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
const repBasedStrengthWorkout = new RepBasedStrengthWorkout("A1", "Incline Press", 4, 8, 100);
repBasedStrengthWorkout.describe();
class TimeBasedStrengthWorkout extends Sets {
    duration;
    weight;
    constructor(id, name, sets, duration, weight) {
        super(id, name, sets);
        this.duration = duration;
        this.weight = weight;
    }
    describe() {
        console.log(`\nWorkout ${this.id}: ${this.name} is time based`);
        console.log("Weight is", this.weight);
        console.log("Duration is", this.duration);
    }
}
const timeBasedStrengthWorkout = new TimeBasedStrengthWorkout("A2", "Plank", 4, 60, 0);
timeBasedStrengthWorkout.describe();
class CardioWorkout extends Workout {
    distance;
    duration;
    constructor(id, name, distance, duration) {
        super(id, name);
        this.distance = distance;
        this.duration = duration;
    }
    describe() {
        console.log(`\nWorkout ${this.id}: ${this.name} is cardio based`);
        console.log("Distance is", this.distance);
        console.log("Duration is", this.duration);
    }
}
const cardioWorkout = new CardioWorkout("A3", "biking", 1000, 240);
cardioWorkout.describe();
//# sourceMappingURL=app.js.map