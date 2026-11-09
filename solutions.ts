const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return 0;
  } else if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

type Input = string | number | boolean;

const processInput = (value: Input): Input => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};

type Tuple = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];

const formatCoordinate = (tuple: Tuple): string => {
  return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (arr: Course[], minStudents: number): Course[] => {
  const res = [];
  for (const val of arr) {
    if (val.students >= minStudents && val.isPublished === true) {
      res.push(val);
    }
  }
  return res;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const res = [];
  for (const val of items) {
    if (val && typeof val === "object") {
      res.push(val[key]);
    }
  }
  return res;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  }
};
