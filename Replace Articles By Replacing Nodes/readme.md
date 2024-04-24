# Replacing Nodes

I will not be explaining what nodes are in this folder, but I will explain what happens.

## What is Happening?

What I'm doing is creating an array of objects, where each object has a title and description about a cat breed.

I'm manually adding nodes to the DOM (HTML elements, of course), by:

1. Firstly, creating an HTML element using a method called `.createElement()`, which is part of the `document` object (which is the head of a tree of nodes) provided by the DOM (a browser's API, in case you didn't know).
2. When calling this method, I get a reference to the created element (a node of type Element, `HTMLElement` to be exact), which I save in an array for later use.
3. To add the element to the document, we first need to locate its parent. Then, append it using the method `.appendChild()` that adds it as a child of that element.

First, we create all the card elements that we will be showing, since there's nothing that the user can change.

- Keep in mind that each card is a separate element (node) with its own reference.

Then, we append the first card as a child, which will be later modified by triggering a click event of a button.

- Created the button that will listen to the click event.
- We used the `addEventListener` method to attach a custom click event handler that will replace the current card with the next card when clicked!
- And lastly, added the button as the next child to the cards parent (we simply used the `appendChild()` method).
