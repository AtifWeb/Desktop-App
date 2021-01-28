import { Query } from "../HelpingFunctions.js";
export const DisplayTaskDetails = (e, PreivousTaskDetails) => {
  const Element = e.target;
  Element.classList.toggle("rotate");
  PreivousTaskDetails = Query(`.${Element.id}`);
  PreivousTaskDetails.classList.toggle("show-details");
};
