import { useAccordionContext } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem";


const AccordionContent = ({className, children}) => {
  const id= useAccordionItemContext();
  const {openItemId}=useAccordionContext();
  const isOpen=openItemId===id;
  
  
  return (
   <div className= {isOpen? `${className?? ''} open`: `${className?? ''} close`}
   /* {isOpen? 'accordion-item-content open': 'accordion-item-content'} */>{children}</div>
  )
}

export default AccordionContent