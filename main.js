import "./style.css";
import react from "react";
import { throttle } from "lodash-es";

export function render() {
  document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">kkkjkjkkk</a>
`;
}

render();

const a = react.createElement("kk");

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render();
  });
}

console.log(throttle);

const globModules = import.meta.glob("./ff/*");

console.log(globModules);

Object.entries(globModules).forEach(([k, v]) => {
  v().then((m) => {
    console.log(k);
    console.log(m);
  });
});
