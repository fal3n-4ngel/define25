import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import ChevronDown from "./ChevronDown";
import { accordianItems } from "../../data/accordianItems";

export default function Accordian() {
  return (
    <div className="mt-10 flex w-full justify-center px-5 lg:px-40">
      <Root
        className="w-[600px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        collapsible
      >
        {accordianItems.flatMap((item, i) => (
          <Item
            className="rounded-[3px] bg-gradient-to-b from-white/5 to-white/0 p-4"
            value={"item-"+i}
          >
            <Header>
              <Trigger className="group text-md flex w-full cursor-pointer justify-between py-2">
                <p>{item.triggerText}</p>
                <ChevronDown className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
              </Trigger>
            </Header>
            <Content className="overflow-hidden text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">{item.content}</Content>
          </Item>
        ))}
      </Root>
    </div>
  );
}
