import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section";
};

export function Container({
  children,
  className = "",
  id,
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
