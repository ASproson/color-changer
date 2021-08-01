# Color Changer

This is a project that I made from scratch to test my JavaScript skills, so it focuses on generating a random HEX color value when a button click event is triggered. 

## Initial Idea

- Create a webpage that changes background color on button click
- Create a title box that displays color name/hex value on color change
- Create a button animation
- Create a css trigger to transition the colour rather than a snap change

### Comments & Thought Process

When I started this project I thought that the animation side of things would be all JavaScript but as I started to Google around to get an idea of what that would require I found out that a lot of it is actually done in CSS! By trying to do it in JavaScript I was over complicating things and thinking too far ahead.

JavaScript just needed to be used to change the DOM elements (body background color via Math.random function and the innerHTML to inform the user what color is currently being shown). CSS could handle the animation elements, such as creating a gentle transition from color to color. I wanted to do this because I didn't want to 'flash' the screen when going from a darker color to a brighter one. 

I also wanted a button animation to let the user know that the button will respond to their input, rather than just having a static button that said 'click me' I wanted it inform the user in a more intuitive way that says 'interact with me!' rather than just '... you can interact with me, I guess'.

I was actually kind of surprised how easy it was to introduce animations in CSS. Knowing a little about animation in general I thought there be a huge thing about setting up keyframes and creating 'before' and 'after' states, and whilst I know that is a thing in CSS, I thought that was the standard for CSS animation - but it turns that's the advanced side of things!

Just goes to show, sometimes things are easier than they seem. This was actually an exciting project, I hit all my goals and found them easier than expected. I'm looking forward to doing more animations and interactions in my projects going forward.
