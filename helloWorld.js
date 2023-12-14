const myFunc = (message1, message2) => {
  console.log(message1);
  message2.forEach(element => {
    console.log(element);
  });
}

const jsIntro = "JavaScript is a versatile programming language primarily known for its use in web development. It allows developers to add interactivity and dynamic behavior to websites. JavaScript is an essential part of the web technology stack and is supported by all major web browsers.";

const jsConv = ['1. Using Camelcase for variable and function naming.', '2. Use uppercase for constants.', '3. Use consistent Indentation', '4. Use comments to explain complex code.', '5. Use consistent placement of opening and closing braces.', '6. Use either single or double quotes consistently for strings'];
myFunc(jsIntro, jsConv);
