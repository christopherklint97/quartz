---
title: Software development principles
description: Learn about different software development principles and how they can be applied in practice.
---

Here are examples that demonstrate different software development principles using functional programming in TypeScript. By focusing on pure functions, immutability, and higher-order functions, we can achieve similar goals as object-oriented approaches but with a functional paradigm.

## 1. **SOLID Principles**

### Single Responsibility Principle (SRP)

**Definition:** A function should have one, and only one, reason to change, meaning that it should perform only one task.

**Example:**

```typescript
type User = {
  name: string
  email: string
}

const createUser = (name: string, email: string): User => ({
  name,
  email,
})

const saveUser = (user: User): void => {
  // Save user to database
  console.log("User saved:", user)
}

const registerUser = (name: string, email: string): void => {
  const user = createUser(name, email)
  saveUser(user)
}

registerUser("John Doe", "john@example.com")
```

### Open/Closed Principle (OCP)

**Definition:** Software entities should be open for extension, but closed for modification.

**Example:**

```typescript
interface Shape {
  area: () => number
}

const createRectangle = (width: number, height: number): Shape => ({
  area: () => width * height,
})

const createCircle = (radius: number): Shape => ({
  area: () => Math.PI * radius * radius,
})

const calculateTotalArea = (shapes: Shape[]): number =>
  shapes.reduce((total, shape) => total + shape.area(), 0)

const shapes = [createRectangle(10, 20), createCircle(15)]
console.log(calculateTotalArea(shapes)) // Output: area of all shapes
```

### Liskov Substitution Principle (LSP)

**Definition:** Objects should be replaceable with instances of their subtypes without altering the correctness of the program.

**Example:**

```typescript
type Bird = {
  fly: () => void
}

const createDuck = (): Bird => ({
  fly: () => console.log("Duck flying"),
})

const createPenguin = (): Bird => ({
  fly: () => {
    throw new Error("Penguins can't fly")
  },
  swim: () => console.log("Penguin swimming"),
})

const makeBirdFly = (bird: Bird) => bird.fly()

const duck = createDuck()
makeBirdFly(duck) // Works fine

const penguin = createPenguin()
try {
  makeBirdFly(penguin) // Throws an error
} catch (error) {
  console.error(error.message)
}
```

### Interface Segregation Principle (ISP)

**Definition:** A client should not be forced to depend on interfaces it does not use.

**Example:**

```typescript
type Printer = {
  print: () => void
}

type Scanner = {
  scan: () => void
}

const createMultiFunctionPrinter = (): Printer & Scanner => ({
  print: () => console.log("Printing"),
  scan: () => console.log("Scanning"),
})

const createSimplePrinter = (): Printer => ({
  print: () => console.log("Printing"),
})
```

### Dependency Inversion Principle (DIP)

**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

**Example:**

```typescript
type Database = {
  save: (data: any) => void
}

const createMySQLDatabase = (): Database => ({
  save: (data: any) => console.log("Saving data in MySQL database", data),
})

const saveUser = (database: Database, user: any): void => {
  database.save(user)
}

const database = createMySQLDatabase()
const user = { name: "John Doe" }
saveUser(database, user)
```

## 2. **DRY (Don't Repeat Yourself)**

**Definition:** DRY is a principle aimed at reducing the repetition of code.

**Example:**

```typescript
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const createUser = (email: string) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email address")
  }
  return { email }
}

const sendEmail = (email: string, message: string): void => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email address")
  }
  // Logic to send email
  console.log(`Email sent to ${email}: ${message}`)
}
```

## 3. **KISS (Keep It Simple, Stupid)**

**Definition:** KISS principle states that systems work best if they are kept simple.

**Example:**

```typescript
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1))

console.log(factorial(5)) // Output: 120
```

## 4. **YAGNI (You Aren't Gonna Need It)**

**Definition:** YAGNI principle states that a developer should not add functionality until it is necessary.

**Example:**

```typescript
type User = {
  name: string
  email: string
}

const createUser = (name: string, email: string): User => ({
  name,
  email,
})

const saveUser = (user: User): void => {
  // Save user to database
  console.log("User saved:", user)
}
```

## 5. **Separation of Concerns**

**Definition:** Separation of concerns is a design principle for separating a computer program into distinct sections.

**Example:**

```typescript
type User = {
  name: string
  email: string
}

const createUser = (name: string, email: string): User => ({
  name,
  email,
})

const saveUser = (user: User): void => {
  // Save user to database
  console.log("User saved:", user)
}

const registerUser = (name: string, email: string): void => {
  const user = createUser(name, email)
  saveUser(user)
}

const userController = (req: any, res: any): void => {
  const { name, email } = req.body
  registerUser(name, email)
  res.send("User registered successfully")
}

const getUserController = (req: any, res: any): void => {
  const userId = req.params.id
  // Simulate fetching user
  const user = createUser("John Doe", "john@example.com")
  res.json(user)
}
```

## 6. **Encapsulation**

**Definition:** Encapsulation is the bundling of data with the methods that operate on that data.

**Example:**

```typescript
type User = {
  name: string
  email: string
}

const createUser = (name: string, email: string): User => {
  let _name = name
  let _email = email

  return {
    getName: () => _name,
    setName: (newName: string) => {
      _name = newName
    },
    getEmail: () => _email,
    setEmail: (newEmail: string) => {
      _email = newEmail
    },
  }
}

const user = createUser("John Doe", "john@example.com")
console.log(user.getName()) // John Doe
user.setName("Jane Doe")
console.log(user.getName()) // Jane Doe
```

## 7. **Polymorphism**

**Definition:** Polymorphism is the ability of different classes to be treated as instances of the same class through a common interface.

**Example:**

```typescript
type Animal = {
  makeSound: () => void
}

const createDog = (): Animal => ({
  makeSound: () => console.log("Bark"),
})

const createCat = (): Animal => ({
  makeSound: () => console.log("Meow"),
})

const makeAnimalSound = (animal: Animal): void => {
  animal.makeSound()
}

const dog = createDog()
const cat = createCat()
makeAnimalSound(dog) // Bark
makeAnimalSound(cat) // Meow
```
