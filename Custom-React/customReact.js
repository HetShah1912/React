
function customRender(element, container) {

  // Version 1 : Props attributes are not fixed sometimes it could be 1 sometimes 3 now it has only 2 href and target

  // const domElement = document.createElement(element.type);
  // domElement.innerHTML = element.children;
  // domElement.setAttribute('href', element.props.href);
  // domElement.setAttribute('target',element.props.target);
  // container.appendChild(domElement);

  // Version 2 : Modular code for attribute of Props
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  
  for (const prop in element.props) {
    if(prop === element.children) continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);

}
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to Visit Google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);