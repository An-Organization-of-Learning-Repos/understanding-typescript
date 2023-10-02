abstract class Exercise {
  static exercises: Exercise[] = [];
  constructor(
    // private readonly id: string,
    protected readonly id: string, // protected can be accessed by child classes
    public name: string
  ) {}
  abstract describe(this: Exercise): void;
}

// const exercise = new Exercise("A1", "Bent over row");
// exercise.addRep(4);
// exercise.addSet(2);
// exercise.describe();
// exercise.printRepInformation();
// exercise.reps = 4; // now private
// exercise.printRepInformation;

// const exerciseCopy = { describe: exercise.describe }; // these are private funtions so they cant be copied

// exerciseCopy.describe(); // this err menas we are tryin to call this on a Exercise class

// const workingExerciseCopy = exercise; // can only pass by ref

// workingExerciseCopy.describe()

// const exerciseCopy = {
//   name: "Deconstructed into another world",
//   describe: exercise.describe,
// }; // only works by deconstructiong with fields of constructor

// exerciseCopy.describe();

abstract class Sets extends Exercise {
  protected completedSets: boolean[];

  constructor(id: string, name: string, public sets: number) {
    super(id, name);
    this.completedSets = new Array(sets).fill(false);
  }

  abstract describe(this: Sets): void; // abstract methods must be implemented in child classes

  set markSetComplete(setNumber: number) {
    if (!setNumber) {
      throw new Error("No set number provided");
    }
    this.completedSets[setNumber] = true;
  }
}

class RepBasedStrengthExercise extends Sets {
  constructor(
    id: string,
    name: string,
    sets: number,
    protected reps: number | string,
    public weight: number
  ) {
    super(id, name, sets);
  }

  describe() {
    console.log(`\nExercise ${this.id}: ${this.name} is rep based`);
    console.log("Weight is", this.weight);
    console.log("Reps is", this.reps);
  }

  get getReps(): string | number {
    if (typeof this.reps === "string") {
      return this.reps;
    }
    return this.reps;
  }
}

const repBasedStrengthExercise = new RepBasedStrengthExercise(
  "A1",
  "Incline Press",
  4,
  8,
  100
);
repBasedStrengthExercise.describe();

class TimeBasedStrengthExercise extends Sets {
  constructor(
    id: string,
    name: string,
    sets: number,
    public duration: number,
    public weight: number
  ) {
    super(id, name, sets);
  }

  describe() {
    console.log(`\nExercise ${this.id}: ${this.name} is time based`);
    console.log("Weight is", this.weight);
    console.log("Duration is", this.duration);
  }
}

const timeBasedStrengthExercise = new TimeBasedStrengthExercise(
  "A2",
  "Plank",
  4,
  60,
  0
);
timeBasedStrengthExercise.describe();

class CardioExercise extends Exercise {
  constructor(
    id: string,
    name: string,
    public distance: number,
    public duration: number
  ) {
    super(id, name);
  }

  describe() {
    console.log(`\nExercise ${this.id}: ${this.name} is cardio based`);
    console.log("Distance is", this.distance);
    console.log("Duration is", this.duration);
  }
}

const cardioExercise = new CardioExercise("A3", "biking", 1000, 240);
cardioExercise.describe();

const exerciseTemplate = Exercise.exercises.push(
  cardioExercise,
  timeBasedStrengthExercise,
  repBasedStrengthExercise
);

// singleton pattern - can use private constructorsa to ensure only one class can be created
class Singleton {
  private static instance: Singleton;
  private constructor(public name: string) {}

  static getInstance() {
    if (Singleton.instance) {
      return this.instance;
    }
    this.instance = new Singleton("\nThe only one");
    return this.instance;
  }
}

// const singleton = new Singleton // cant do this

const singleton = Singleton.getInstance();
console.log(singleton.name);

// private constructors and singletons are useful for things like logging
// where you only want one instance of the logger
// and you dont want to have to pass it around to every file
// you can just import it and use it
// and you can use it in other classes
