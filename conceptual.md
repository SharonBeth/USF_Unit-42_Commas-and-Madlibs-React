### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a starter package that sets up everything you need as a master library. The package includes all of the node_modules so all your libraries are readily avaiable. React allows for you to change data without having to reload the page.

- What is Babel?
    Babel is a JS compiler that converts modern JS code into a version compatible with all browsers.

- What is JSX?
    It is a JS extension that is specific syntax that allows for combination of JS syntax with DOM syntax.


- How is a Component created in React?
   A class component mucst include the extends React.Component statement. The statement creates an inheritance.

- What are some difference between state and props?
    State is mutable and can be changed by a componenet while a prop can't. A prop data that is passed through components from parent to child for use.

- What does "downward data flow" refer to in React?
    This means there is inheritance from the parent to children of data. This is likely props because it is passed down through inheritance.

- What is a controlled component?
    a controlleed component is the allowance of the hierarchy being controlled by React components.

- What is an uncontrolled component?
    uncontrolled is overridiing the hierarchy that React has set up by folowing the form data is handled by the DOM .

- What is the purpose of the `key` prop when rendering a list of components?
    A key prop is an identifier that help React identify which items have changed, been added, or removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    An array index is a poor choice because the ability to call out the items in an array may not work if two items in an array are identical. There has to be a unique identifier with each item.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect allows for changing of the item without rerendering the page. There are potentials for side effects with useEffect, and some common uses for this are fetching data, timers, and directly updating the DOM. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is to store information without having to re-render the page. 

- When would you use a ref? When wouldn't you use one?
    It is said that refs are only specifically supposed to be used when managing focus, text selection, or media playback. From my understanding, all other times it is not recommended.

- What is a custom hook in React? When would you want to write one?
    A custom hook is a proecess that you continue to reuse in your code that continues to change data. If you use it more than once throughout react, then it makes sense to write a custome hook for this action becuase this will produce less code. 
