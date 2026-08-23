import { ReactNode } from "react";
import AnimatedContent from "./AnimatedContent";

interface AnimatedItem {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  delay?: number;
  className?: string;
}

const AnimatedItem = (props: AnimatedItem) => {
  const { children, direction, delay, reverse, className } = props;
  return (
    <AnimatedContent
      distance={120}
      direction={direction}
      reverse={reverse}
      duration={2}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedContent>
  );
};

export default AnimatedItem;
