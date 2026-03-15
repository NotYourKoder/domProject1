🚀 Key Features
1. Interactive Friend Request Toggle
Logic: Implemented a state-management toggle that handles both "Add" and "Remove" actions within a single button.
UI/UX: Real-time DOM updates change the status text and button styling instantly to provide immediate feedback.

2. "Double-Tap to Like" Animation
Logic: Utilized the dblclick event listener to trigger a centered heart animation.
Visuals: Combined CSS transform: scale() with JavaScript setTimeout to create a smooth, temporary "pop" effect identical to modern social media apps.

3. Intelligent Custom Cursor
Precision Tracking: Mapped the mouse coordinates (clientX/Y) to a custom div for lag-free movement.
Design: Applied mix-blend-mode: difference, allowing the cursor to dynamically invert colors based on the background elements it passes over.

4. Dynamic Hover Image Follow
Interactivity: Built an animation where hidden images reveal themselves on mouseenter and track the cursor's path across the element.
Application: Perfect for high-end portfolio galleries or product showcases.

5. LEGOgram: Data-Driven Story Engine
Scalability: Used Event Delegation and Array-based data structures to render stories dynamically.
Automation: Integrated a 3-second setTimeout auto-hide feature to mimic the real Instagram Story experience.

🛠️ Technologies Used
HTML5: Semantic structure.
CSS3: Custom animations, flexbox layouts, and blending modes.
JavaScript (DOM): Event listeners, coordinate tracking, and interval management.
