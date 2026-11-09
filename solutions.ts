// problem 01:

const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return 0;
  } else if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));

// problem 02:

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

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

// problem 03

type Tuple = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];

const formatCoordinate = (tuple: Tuple): string => {
  return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// problem 4

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};
// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// problem 5

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

// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true },
// ];
// console.log(getPopularCourses(courses, 80));

// problem 6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const res = [];
  for (const val of items) {
    if (val && typeof val === "object") {
      res.push(val[key]);
    }
  }
  return res;
};

// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" },
// ];

// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));

// problem 8

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

// (async () => {
//   try {
//     console.log(await validateAgeAsync(8));
//   } catch (error) {
//     console.error(error);
//   }
// })();
