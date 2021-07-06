
// Create HTML element of given type and add classes, attributes and textContent (where applicable)
function createElement(elementType, classNames = '', attributes = {}, innerHTML = '') {
    const elementObject = document.createElement(elementType);
    if (classNames) elementObject.classList.add(...(classNames.split(' ')));
    Object.keys(attributes).forEach((attribute) => {
      elementObject.setAttribute(attribute, attributes[attribute]);
    });
    elementObject.innerHTML = innerHTML;
    return elementObject;
  }
  