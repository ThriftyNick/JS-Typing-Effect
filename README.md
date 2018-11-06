# JS-Typing-Effect
A typewriter effect to apply to an HTML DOM element.

First include the file using: 
<script src="path/to/typed-text.js"></script>

Then somewhere below the target element do:
<script>
  TextTyper.init(document.getElementById('targetElemId'));
  TextTyper.typeText("Hello World.");
</script>
