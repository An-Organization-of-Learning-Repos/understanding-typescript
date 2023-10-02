abstract class Exercise {
  static exercises: Exercise[] = [];
  constructor(
    // private readonly id: string,
    protected readonly id: string, // protected can be accessed by child classes
    public name: string
  ) {}
  abstract describe(this: Exercise): void;
}

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
    public reps: number | string,
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

class Workouts implements Greetable {
  constructor(public name: string, public excerciseList: ExcerciseTypes[]) {}

  mssg(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let allExercises: Greetable;

allExercises = new Workouts("Workout Template 1", [
  new RepBasedStrengthExercise("A1", "Incline Press", 4, 8, 100),
]);

allExercises.mssg("This is");

class AllWorkouts implements ExerciseList {
  static workouts: ExcerciseTypes[] = [];

  private constructor(public excerciseList: ExcerciseTypes[]) {
    AllWorkouts.workouts = excerciseList;
  }

  static getList(exerciseList: ExcerciseTypes[]) {
    return new AllWorkouts([...AllWorkouts.workouts, ...exerciseList]);
  }
}

const everyWorkout = AllWorkouts.getList([
  new RepBasedStrengthExercise("A1", "Incline Press", 4, 8, 100),
]);

console.log(everyWorkout);
