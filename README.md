React.js:
----------------------------
Basics Of React???

Any doubt in yesterday's Session?

Any Inputs??

What is React??

1. It is an Open Source JavaScript Library for building User Interfaces
   It is not a framework , it is a library
   It is used to create only UI and not all the components
2. It created and maintained by Facebook

3. it has more than 100 thousand stars on Github and a huge community behind it.

4. It is becoming increasingly popular amongest the developers and is also very famous technology in the companies now a days.

5. Facebook has more than 30000 components for the React

6. It has a component based architecture:
   It breaks down the complex application into small components, which can be integrated to make a complex UI.

7. react is declarative:
    it will make it painless for creating complex UIs by abstracting the difficult part away.
	
	Declarative                   Impretive
	
	"It should look like this"     "This is what you should do"
8. It will handle efficiently updating and rendering just the right components in our application

9. It uses Virtual DOM(It is able to quickly update and generate the respones)



What are the pre-requisites

HTML, CSS, JavaScript fundamentals
ES6

let, const, arrow functions, template literals, default parameters,
Object literals, 

Features of React:

1. JSX(JavaScript Syntax Extension): Even it is not mandatory to use this, but it is recommended.

2. Components: 

It is all about components. Everything is component. It will help to maintain the code when we work with large applications.

3. It has Unidirectional Data Flow: It implements one-way data flow which makes it easy to maintain the application.

4. Licence: it is licenced under the Facebook Inc documentation.

Advantages:

1. It uses virtual dom which is a javascript object. this will improve application performance, because it is faster then the regular DOM.


2. It can be used on Client side, server side or any other Frameworks.

3. Component and data patterns improve readability, which helps to maintain larger applications.


Limitations:

1. It covers only view layer of the application, hence you still nedd to choose other technologies to get a complete development set.

2. It using inline templating and JSX, which might seem awkward to some developers.

Create a React Application:


1. npm install create-react-app 

2. npx create-react-app hello-world

  cd hello-world

3. npm start


Components:
A Web Page can be divided in a Number of isolated Components

Header, Footer, sidenav, mainBody, } One that contains all these

All the components are .js files.

Conceptually , components are like javascript functions.

These accepts some inputs(called props) and return React elements , which describes what should be appear on the screen.



Type Of components:


1. Stateless Functional components:(rfce):
   1. 
      function Hello(props) {
	  return <h2>This is Functional return</h2> 
	  
	  }
properties(props) ---JavaScript Function --HTML(JSX)

=> It is a Simple function which uses props
=> We have to as many functional components,
=> At beginer level it is easy to handle and manage
=> It is responsible Only for UI
=> stateless, presentational
-------------------------------------------------------------------
2. Stateful Class Components(rce)
   class Hello extends React.Component {
      render() {
	    return <h2>This is Class Component</h2>
	  }
   }
   
  Properties(props) ---ES6 classes --HTML(JSX)
  => It has more function rich because it is a well qualified class 
  => It maintains its own private data
  => It is complex in UI
  => It has lifecycle hooks
  => Stateful, smart, used as a container
  
  
  
  
 JSX - (JavaScript Syntax Extension)
--------------------------------------

1. It is a extension to Java Script language Syntax
2. Write XML- like code for elements and components
3. They have tag name, attributes, and children
4. It is not necessary but it is helpful to write Recat Code
5. It will make our code simpler and elegent

6. It will automatically transpiles to pure javascript which is understood by the Browsers.




Transpilers:{
They are used to transpile one high level language into another high level language.

ES6, ES7 and TypeScript


babel

}

Compilers?
Interpreters?
 



const element = <h1>Hello To React</h1>;

Its a funny code.
this is called JSX code.
Its syntax extension is also .js.

class ---> className
for --> htmlFor

It has Camel case property naming conventions

onclick() --> onClick()


Difference Between props and stateless

props:
======
1. It is will get passed to the component function as a paremeter
2. They are immutable
3. props--> can be accessed by using this.props






state:
1. these are maintained within the component
2. The variables are getting declaired inside function body and the states can be changed

3. It uses setState() method to set the satet of the attributesand state can be accessed by using this.state

How To Change State:
By applying events:

destructuring props



How to Bind Event handlers:

1. bind()

2. Use Arrow Function

3. Binding in the Class constructor(in the Official Documentation)


4. class property as a arrow Function

Conditional Rendering:
==========================
Conditional rendering in React works the same way conditionals work in javaScript. Use JavaScript Operator to create elements for represention the current state and update based on the condition.

1. if/else
2. Element variables
3. Ternary Operators
4. Short circuit Operators (&&, || , !)


If/else:


----------------------------------------

Lists
---------
const numbers = [1,2,3,4,5]

const double = numbers.map((number) => number *2)
[2,4,6,8,10]

React also follw the same strategy


---------------------------------------------
React Styling Components:

1. CSS StyleSheet
2. inline Styling
3. CSS Modules


1. CSS StyleSheet:





------------------------------------------
Controlled Forms:

If a Form is being controlled by React then, the form is called Controlled Form.

1. Create Component State

2. onChange event handler


-----------------------------------------------------------

Life Cycle Methods:(Life Cycle Hooks)
----------------------------------

1. Mounting: When an instance of a component is being created and inserted into the DMO
Methods:
   1. constructor():
     => it is a function that will get called whenever a new component is being created
	 => It initializes the states(Binding the Event Handler)
	 => It contains super(props), and directly override the state
    2. static getDerivedStateFromProps(props,state)
	   => when the state of the component depends on the changes inprops over time
	   => It is being used rarely
	   => It sets the state
	3. render():
	  => This is the only required method
	  => It is used to read props and state and return JSX
	4. componentDidMount():
      => It is being invoked immediately after a component and all its children have been rendered to the DOM	
	
2. Updating: When a Component is being re rendered as a result of changes to either its props or state.

Methods:
   1. static getDerivedStateFromProps
	2. shouldComponentUpdate, 
    3. render
	4. getSnapShotBeforeUpdate
	5. ComponentDidUpdate
	
	 
3. UnMounting: When a component is being removed from the DOM
   1. componentWillMount()

4. Error Handling: When there is an error during re rendering, in a life cycle method, or in the constructor of any component

  1. static getDerivedStateFromError()
  2. componentDidCatch

================================================================
React Router:

React Router is a React routing library. and it is one of the most popular project built on top of React.

It is a very simple library and it does not say about any routing.


Navigation from one component to another component is being achived by React Router.


1. Install react-router-dom

npm install react-router-dom

Types of Routes:

1. BrouserRouter
   http:/localhost:8080/about
   It uses the History API,
   [
      IE9 and below Version
       
   ]
   
   
2. HashRouter
    http:/localhost:8080/#/about 


Components:

It uses 3 components When working with the routs:

1. BrouserRouter
   => It  wraps all the Route Components
2. Link
   => These components are used to generate links to our routes
3. Route	
  => This Component is responsible for showing or hiding the components that it contains

  
 BrouserRouter:
 --------------
 We have to import react-router-dom in our component and the we can use this.

 it also can have only one child
 
 
 2. Link:
 ---------------------
 
 This component is used to trigger new routes. We have to import it from react-router-dom  and link the components to pint different routs with the Attributes
 
 Route: 
 
 <Switch>
