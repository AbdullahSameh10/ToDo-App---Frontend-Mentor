//------------------- Accessbility.js -------------------//
export const isKeyboardClick = (e) => e.key === "Enter" || e.key === " ";

export const toggleCheckboxA11y = (el, isActive) => {
  el.classList.toggle("active");
  el.setAttribute("aria-checked", isActive);
};
//-------------------------------------------------------//