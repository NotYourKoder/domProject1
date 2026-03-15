🚀 Key Features
1️⃣ Interactive Friend Request Toggle

A dynamic friend request system that allows users to add or remove a friend using the same button.

Implementation Highlights

State management handled directly through JavaScript

A single button toggles between "Add Friend" and "Remove Friend"

Status text and button styling update instantly

UX Benefits

Real-time DOM updates provide immediate visual feedback

Mimics modern social media interaction patterns

2️⃣ Double-Tap to Like Animation

Implements a double-click like interaction similar to Instagram.

Implementation Highlights

Uses the dblclick event listener

Displays a centered heart animation on double tap

CSS transform: scale() creates a smooth pop effect

Animation Logic

JavaScript setTimeout() hides the heart after the animation completes

Result

A smooth and responsive "like" interaction identical to modern social platforms.

3️⃣ Intelligent Custom Cursor

A fully customized cursor designed to create a high-end interactive browsing experience.

Implementation Highlights

Cursor position mapped using clientX and clientY

A custom div element follows the mouse movement smoothly

Design Technique

Uses mix-blend-mode: difference to dynamically invert colors based on the background element beneath the cursor

Outcome

A smart cursor effect that feels fluid, modern, and visually engaging.

4️⃣ Dynamic Hover Image Follow

An interactive effect where images appear and follow the cursor while hovering over elements.

Implementation Highlights

Images are initially hidden

mouseenter reveals the image

The image tracks the cursor movement across the element

Use Cases

Portfolio galleries

Product showcases

Creative agency websites

This feature enhances visual engagement and storytelling in UI design.

5️⃣ LEGOgram: Data-Driven Story Engine

A scalable system that mimics the Instagram Story feature.

Implementation Highlights

Stories stored using array-based data structures

Rendered dynamically using event delegation

Story preview appears when clicked

Automation

A setTimeout() automatically hides the story after 3 seconds, replicating real social media story behavior

Advantages

Easily scalable

Clean event handling

Minimal DOM manipulation overhead

🛠️ Technologies Used
HTML5

Semantic page structure

Clean and accessible markup

CSS3

Flexbox layouts

Custom animations

Transform effects

mix-blend-mode for advanced visual interactions

JavaScript (DOM Manipulation)

Event listeners

State management

Mouse coordinate tracking

Timers and animation control

🎯 Purpose of the Project

This project demonstrates advanced front-end interaction design using pure JavaScript.

It focuses on:

Interactive UI components

Animation logic

Efficient DOM manipulation

Event delegation patterns

Replicating modern social media UI interactions

📌 Possible Future Improvements

Convert the project into React or Vue component architecture

Add touch gesture support for mobile devices

Implement local storage for friend state persistence

Improve animation performance using requestAnimationFrame()
