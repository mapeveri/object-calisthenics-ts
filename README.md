# Object calisthenics Typescript

The idea of this project is to implement the Object Calisthenics rules to improve the code following the 10 rules:


1. Only One Level Of Indentation Per Method: Methods should not have more than one level of indentation. This helps keep methods focused and easier to understand.

2. Don't Use The Else Keyword: Avoid using the else keyword. This can often lead to complex code that is harder to read and understand. Instead, try to use early returns or polymorphism to handle different cases.

3. Wrap All Primitives And Strings: Wrap all primitive types and strings in classes. This can help clarify the intent of the code and make it more self-explanatory.

4. First Class Collections: Use collections (such as lists or arrays) as first-class citizens in your code. Avoid primitive obsession and create classes to represent collections of related data.

5. One Dot Per Line: Avoid chaining multiple method calls together with the dot operator (.). Instead, break them up into separate lines. This can make the code easier to read and understand.

6. Don't Abbreviate: Avoid using abbreviations and acronyms in variable names. Use descriptive and meaningful names that clearly convey the purpose of the variable.

7. Keep All Entities Small: Keep classes and methods small. Aim for classes that are no longer than 50 lines and methods that are no longer than 10 lines. This helps maintain a clear and understandable codebase.

8. No Classes With More Than Two Instance Variables: Limit classes to no more than two instance variables. This helps keep classes focused and prevents them from becoming too complex.

9. No Getters/Setters/Properties: Avoid using getters, setters, or properties to access or modify instance variables. Instead, use methods with meaningful names that clearly convey the intent of the operation.

10. Use Only One Argument Per Method: Limit methods to no more than one argument. This helps keep methods focused and reduces complexity.


## Execute the inventory project

```
 npm run inventory:start
```

## Execute the employee project

```
 npm run employee:start
```

## Execute all tests

```
 npm run tests
```

## Execute inventory tests

```
npm run inventory:tests
```

## Execute employee tests

```
npm run employee:tests
```
