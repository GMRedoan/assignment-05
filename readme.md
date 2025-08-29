1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Well, there are some difference between this method firstly, getElementById can choose an element by an unique id, secondly getElementsByClassName can select all elements which has a common class name and finally querySelectorAll, it's select all elements thats matches a css selectors.


2. How do you **create and insert a new element into the DOM**?
For creating a new element into the DOM we need to write document.createElement()
and for inserting a new element into the DOM we need to write appendChild() 


3. What is **Event Bubbling** and how does it work?
Event Bubbling is a process where an event start and continue upward through its documentation programme.
If i click a button form any div, then the bubbles up to the div and continuously upward like body, html, document. 


4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a process where we apply an eventListener in a parent element for controlling the child elements. It is useful because we use fewer eventListener and manage the event in one place.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
This two method has difference such as preventDefault() method block the normal behavior of browser and stopPropagation() method stop the event thats bubbling up.

