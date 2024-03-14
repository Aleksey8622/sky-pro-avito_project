import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  //   url("./fonts/Roboto/Roboto-Black.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-BlackItalic.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-Bold.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-BoldItalic.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-Italic.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-Light.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-LightItalic.ttf") format("truetype"),
    url("/fonts/Roboto/Roboto-Medium.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-MediumItalic.ttf") format("truetype"),
    url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  //   url("./fonts/Roboto/Roboto-Thin.ttf") format("truetype"),
  //   url("./fonts/Roboto/Roboto-ThinItalic.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

#root {
  height: 100%;
}


html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

div,
button,
a {
  font-family: 'Roboto', sans-serif;

}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #F1F1F1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
}
`;
