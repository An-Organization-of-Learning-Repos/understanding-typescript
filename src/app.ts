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

interface Greetable {
  name: string;
  excerciseList: Exercise[];

  mssg(phrase: string): void;
}

let allExercises: Greetable;

allExercises = {
  name: "Workout Template 1",
  excerciseList: [
    new RepBasedStrengthExercise("A1", "Incline Press", 4, 8, 100),
  ],
  mssg(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

allExercises.mssg("This is");
