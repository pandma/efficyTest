## DESCRIPTION


# Functional requirements
Page dynamics

Load the <select> options with the contents of the global oppoStatus array.

When status is changed, set the associated value of success (e.g. status 4 sets success=75)
On form submit, output the form element values as JSON string. We want to see the values, not the text.
{"status":3,"success":50}
Basic styling

Right align the success value
Display the Submit button in it's own box. Add some spacing around the element.
Set a mono-space font on the output <div> so we have a better view on the generated JSON output.
How it should look (more or less) with styles applied and when the form is submitted:

# Output

3.3 The rules of the game
This is a personal test, don't share this page with friends or online
You cannot modify the HTML source
Use CSS, SCSS or Sass for styling
Use only pure JS, external frameworks or libraries (e.g. jQuery) are not allowed.
You don't have to support old browsers, ECMA 2019 is allowed!

3.4 What we appreciate
Just like you, we appreciate clean and readable code. We aim for quality and maintainability!
Show us how well you can follow given instructions, have attention to details 