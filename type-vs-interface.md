# Type vs. Interface in TypeScript: What Is the Difference?

## Introduction

When I work with TypeScript, I often use both `type` and `interface` to describe the shape of data. They look similar, but they have some important differences that affect how I organize my code.

## Main Differences

An `interface` is mainly used to describe the structure of an object. For example:

```ts
interface User {
  name: string;
  age: number;
}
```

A `type` alias can describe an object too, but it can also represent other types, such as unions, tuples, and primitive values.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

One key difference is that interfaces can be reopened and extended through declaration merging. This means TypeScript combines multiple declarations with the same interface name. Type aliases cannot be redeclared in this way. Both can be extended: an interface can use `extends`, while a type alias can combine types with an intersection (`&`).

```ts
interface Admin extends User {
  role: string;
}

type AdminUser = User & { role: string };
```

## When Should I Choose Each One?

I usually choose an interface when defining object shapes, especially public APIs or class contracts that may need to be extended. I choose a type alias when I need a union, a tuple, or a more flexible combination of types. For ordinary object definitions, either option works, so consistency within a project also matters.

## Conclusion

In the end, neither `type` nor `interface` is always better. Understanding what each one supports helps me choose the clearest option for the situation and keep my TypeScript code easier to maintain.
