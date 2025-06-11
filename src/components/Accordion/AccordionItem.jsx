import { createContext, useContext } from "react";

const AccordionItemContext= createContext();

export function useAccordionItemContext() {
  const ctx= useContext(AccordionItemContext);
  if(!ctx) {
    throw new Error ('AccordionItem-related components should be wrapped by <Accordion.Item></Accordion.Item> ')
  }
  return ctx;
}


export const AccordionItem = ({ id, className, children }) => {
  return <AccordionItemContext.Provider value={id}><li className={className}>{children}</li></AccordionItemContext.Provider>
};
