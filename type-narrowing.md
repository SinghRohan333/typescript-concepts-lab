# What Is Type Narrowing in TypeScript?

## Introduction

Type narrowing is a feature in TypeScript that helps me work safely with values that can have more than one type. It means checking a value before using it so TypeScript can understand its more specific type. This makes code easier to manage and helps prevent runtime errors.

## Practical Examples

One common way to narrow a type is with `typeof`. It is useful when a variable may contain a string or a number.

```ts
function showValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, TypeScript knows that `value` is a string inside the first block and a number in the second block.

Another method is `instanceof`, which checks whether an object comes from a particular class. For example:

```ts
function printDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.toDateString());
  } else {
    console.log(value.toUpperCase());
  }
}
```

The `in` operator checks whether an object has a particular property. It is helpful when working with different object shapes.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

## Conclusion

In conclusion, type narrowing helps TypeScript identify the exact type of a value in different situations. I can use `typeof` for basic types, `instanceof` for class instances, and `in` for checking object properties. Using these checks makes my TypeScript code safer, clearer, and easier to maintain.
