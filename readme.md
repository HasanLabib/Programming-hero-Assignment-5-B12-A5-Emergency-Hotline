1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: (I.) getElementById accepts an id as a string and, if the id is present in the DOM, returns null; if not, it returns a single element. It is similar to going to a store to buy a certain thing and taking it with you if you find it, and going back empty-handed if you don't.

(II.) The getElementsByClassName accepts a classname as a string, finds all items that have the specified classname and returns an array like live HTMLCollection.and returns it as an array like live HTMLCollection, and if it finds nothing, it returns empty HTMLCollection. A straightforward comparison would be if you had a list of items you needed to purchase. With a bag in hand, you head to the market, buy what you want, put it in the bag, and head back to your residence. HTMLCollection is similar to that bag. HTMLCollection is called "array-like" because you can traverse it with a for loop although it lacks true array-like properties. And HTMLCollection is referred to as "live" because if any modifications are made to the DOM, then the modifications automatically reflect in the HTMLCollection.

(III.) querySelector takes a CSS selector (ex. .class, #id, tag), a string, and finds the first element that has the given CSS selector, and if it doesn't find it, then it will return null. It functions essentially in the same way as getElementById. Thus, we may use the same analogy to explain it.

(IV.) querySelectorAll it takes is a CSS selector (ex., .class, #id, or tag) and a string, and it finds all elements that have the given CSS selector and returns it as an array-like static node list. A nodelist is a collection of nodes, and every element of a DOM tree is called a node. Static meaning if the DOM changes, then it doesn't automatically update the node list.

getElementById and getElementsByClassName are much older ways of accessing the DOM than querySelector / querySelectorAll. getElementById and getElementsByClassName are faster than querySelector / querySelectorAll. Because in querySelector / querySelectorAll, JavaScript first needs to transpile the CSS selector before accessing the DOM. But querySelector / querySelectorAll is more powerful than getElementById and getElementsByClassName, as it can be used to query complex CSS selectors.

2. How do you **create and insert a new element into the DOM**?

Ans: (I.) At first we take a variable and create a tag using document.createElement("tagName"). Using this command the tag is created in the memory. we assign it to the variable.

example: const div = document.createElement("div"); //We are creating Div tag

(II.) secondly we add content inside the tag using the variable.we can use innerText,innerHTML, textContent.

example:

-- div.innerText='Hello';

-- div.innerHTML = `<p class="text-lg">Hello World</p>` **_ Setting HTML like this is dangerous because it has a very high security problem like Cross site scripting. So we shoud avoid it_**

(III.) Optionally we can add class list . This helps to dynamically add style when using tailwindCSS. we use classList.add() method.

example:

-- div.classList.add("flex","justify-between","items-center","bg-[#FAFAFA]","p-4","rounded-lg","mb-4");

(IV.) We append this element to a existing element in the DOM. We use appendChild() method.

Example: document.querySelector("div").appendChild(div); **Here the querySelector is taking the tag name as a string**

thus we can create and element and insert it in the DOM.

3. What is **Event Bubbling** and how does it work?

Answer: Event bubbling is a process where if an event occurs on an element then after execution of that event it goes up to the dom tree and execute event on ancestor nodes until the whole DOM is traversed upward. Lest us suppost we have a button and we are listening for a event (such as click event) using addEventListner() . When the button is clicked then addEventLister is executed and this execute all the instructions given through javascript.After the execution of the event the event goes up to the parent node and checks if any event listener is present there.If there is the event listner then the event bubbling effect fires that event listener automatically and the again goes up.This event bubbling event goes on until it reaches the root element.

example:

--- <div class='parentClick'><button class='click'>Click Me</button></div>

--- document.querySelector(".click").addEventListner((e)=>console.log("click button is clicked"))

--- document.querySelector(".parentClick").addEventListner((e)=>console.log("click parent div is clicked"))

**When the click button is clicked then it console logs `click button is clicked` .Then event bubbling occurs and i execute the parent event listener automatically and automatically console logs `click parent div is clicked`**

this can be stopped using stopPropagation() method.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event delegation is nothing but convenient coding practice where instead of adding event listener to every element we add event listener to only the parent element. It is useful because it saves memory,makes coding cleaner and dynamic and it improves efficiency.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:

preventDefault() stops default event of element set by the browser. For example if we take an anchor tag (<a></a>) .The default behavior of anchor tag is when we click on it, it goes to another link defined through href. But if we use preventDefault then even after clicking on the anchor tag we can't navigate to the link

Example:

--- <a href="https://www.google.com" class="link">Google</a>

--- const a = document.querySelector("a .link"); **selecting a tag with classname link**

--- a.addEventListener("click",(e)=> e.preventDefault()) **when clicking we can't navigate to google.com**

stopPropagation() stops event from reaching ancenstor elements. It indecates javascript that this events journey stops here.

example:
--- <div class='parentClick'><button class='click'>Click Me</button></div>

--- document.querySelector(".click").addEventListner((e)=>{  
 console.log("click button is clicked");**This will execute**
e.stopPropagation();**This will stop event from reaching parent div**
})

--- document.querySelector(".parentClick").addEventListner((e)=>{
console.log("click parent div is clicked");**This will not execute**
})
