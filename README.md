# React with TypeScript 


### Why TypeScript
1. Helps us find potential bugs as we are writing the code, rather than heading to the browser and figuring out at runtime
2. It also provides a way to describe the shape of an object hence providing better documentation and autocomplete
3. Makes maintenance and refactoring of large codebases much easier


** Although we may need to write a lot more code and the compiler will keep on complaining
** Refrain from creating jsx files from now on as the app may simply break

** For every video we will setup few components before hand, then we will proceed to infuse TypeScript into those components

### Video 3: Typing Props
We know that React does not exist without Props
If we simply catch the props in an object without destructuring, we will get our first TypeScript error, which says props has implicitly assigned type `any`; basically TS is not happy about not knowing the structure of the prop parameter
Hence we need the inform the type of prop to TS, and we do that using the `type` keyword
We even have to specify the type of the keys passed in the props
To inform TS about this type that we specified, after the props in paranthesis of the component we write a colon and write the type identifier in front of it.

You may notice that this seems like extra code but it gives us two benefits straight away
The first benefit being better intellisense
The second being if we try to pass any other data type apart from string, we will get an error straight away

One more question arise, whether to use types or interfaces, it's better to use types when building application and interfaces when building libraries.

### Video 4: Basic Props
Adding another key in the type and not passing it from where the component is called, or passing a key from where the component is called and specifying it in the type will result in an error

We discuss how we can pass arrays and objects in a the type of

### Video 5: Advanced Props
For our First type lets consider passing a union of strings which acts as an ENUM
For our Second type lets consider passing children's in in the component, simply passing the children will result in an error, we need to specify the children key in the type, if the child is another react component the value passed in the children key will be React.ReactNode; we do not need to import React if our React version is larger than 16
For our Third type we will pass prop key as optional, sometimes the value does not need to be passed, jsu simply add a question mark when defining a key in type, this will tell typescript that the key value pair is not compulsory to be passed 

### Video 6: Event Props
We will be looking at event props
There are a lot of events we can work with and the two most frequently used events is what we will be covering
First will be a button click and second will be input field change
So first what we want is for a button to accept a click event as a prop and pass it on the JSX, we can simply create a key value pair with the value being an arrow function having void return type and if we specify event as parameter we need to tell typescript about the type of that event, and for that we rely on React to provide us with values such as React.MouseEvent<HTMLButtonElement>, and we pass any other parameter we need to specify the of that too.

Secondly we will look into the input element, typically the input element needs two prop values, a default value and a handleChange function.


### Video 7: Style Props
Now we will see how to pass styles as props
We can create a simple Object, where the key is string whereas the value can be string or a number
But we need valid CSS properties passed as keys and also valid values of those properties and hence we will use the React library to help us with that; React.CSSProperties

### Video 8: Prop Types and Tips
1. You can destructure props when defining the component, simply replace the props parameter with curly braces and values similar to what we do in JSX

2. Export types, defining types at the top of the file is good when working with simple components but, when we are working with larger components it would be better to place the types in a separate file and import them wherever they are needed: refer to propsFile.props.ts; we can also give a Custom type to a key of another type


### Video 9: useState hook
When we define a useState hook and give it a default value, TS makes the type of that value the only type allowed to be passed in that state from onward, this is the Type inference in action when writing code in TypeScript

### Video 10: useState hook, but we do not pass any initial value
If we provide the initial value to be null and try to change that in the future, we will encounter an error of we try to assign any other value to that state apart from null.
Hence now we need a way to pacify TS, and this is where we need to explicitly specify the type of the useState hook and not rely on type inference
We do that by adding angle bracket after `useState` and before `(initialValue)`
For example const [user, setUser] = useState<null | customType>(null);

Although now the optional chaining becomes compulsory for compilation as the user object can also not exist

### Video 11: useState Type Assertion