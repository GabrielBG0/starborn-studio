import React from "react";

export default function Section(
  props: React.PropsWithChildren<{ title: string; id: string }>
) {
  return (
    <section
      id={props.id}
      className="lg:m-8 my-8 flex flex-col justify-start items-center"
    >
      <h1 className="text-6xl m-8 font-medium">{props.title}</h1>
      <div className=" my-8 lg:mx-16 font-light">{props.children}</div>
    </section>
  );
}
