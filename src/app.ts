class Workout {
  constructor(
    // private readonly id: string,
    protected readonly id: string, // protected can be accessed by child classes
    public name: string
  ) {}
}

// const workout = new Workout("A1", "Bent over row");
// workout.addRep(4);
// workout.addSet(2);
// workout.describe();
// workout.printRepInformation();
// workout.reps = 4; // now private
// workout.printRepInformation;

// const workoutCopy = { describe: workout.describe }; // these are private funtions so they cant be copied

// workoutCopy.describe(); // this err menas we are tryin to call this on a Workout class

// const workingWorkoutCopy = workout; // can only pass by ref

// workingWorkoutCopy.describe()

// const workoutCopy = {
//   name: "Deconstructed into another world",
//   describe: workout.describe,
// }; // only works by deconstructiong with fields of constructor

// workoutCopy.describe();

class Sets extends Workout {
  protected completedSets: boolean[];

  constructor(id: string, name: string, public sets: number) {
    super(id, name);
    this.completedSets = new Array(sets).fill(false);
  }

  describe() {
    console.log(`\nWorkout ${this.id}: ${this.name}`);
    console.log("Sets is", this.sets);
  }

  set markSetComplete(setNumber: number) {
    if (!setNumber) {
      throw new Error("No set number provided");
    }
    this.completedSets[setNumber] = true;
  }
}

class RepBasedStrengthWorkout extends Sets {
  constructor(
    id: string,
    name: string,
    sets: number,
    public reps: number | string,
    public weight: number
  ) {
    super(id, name, sets);
  }

  describe() {
    console.log(`\nWorkout ${this.id}: ${this.name} is rep based`);
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

const repBasedStrengthWorkout = new RepBasedStrengthWorkout(
  "A1",
  "Incline Press",
  4,
  8,
  100
);
repBasedStrengthWorkout.describe();

class TimeBasedStrengthWorkout extends Sets {
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
    console.log(`\nWorkout ${this.id}: ${this.name} is time based`);
    console.log("Weight is", this.weight);
    console.log("Duration is", this.duration);
  }
}

const timeBasedStrengthWorkout = new TimeBasedStrengthWorkout(
  "A2",
  "Plank",
  4,
  60,
  0
);
timeBasedStrengthWorkout.describe();

class CardioWorkout extends Workout {
  constructor(
    id: string,
    name: string,
    public distance: number,
    public duration: number
  ) {
    super(id, name);
  }

  describe() {
    console.log(`\nWorkout ${this.id}: ${this.name} is cardio based`);
    console.log("Distance is", this.distance);
    console.log("Duration is", this.duration);
  }
}

const cardioWorkout = new CardioWorkout("A3", "biking", 1000, 240);
cardioWorkout.describe();
