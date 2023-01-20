/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
export default function removeUnusedClasses(element, classes) {
  if (classes) {
    const classesArray = Array.of(classes);
    for (const className of classesArray) {
      element.classList.remove(className);
    }
  }
}
