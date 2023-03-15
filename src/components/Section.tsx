import React from "react";

export default function Section(
  props: React.PropsWithChildren<{ title: string; id: string }>
) {
  return (
    <section
      id={props.id}
      className="m-8 flex flex-col justify-start items-center"
    >
      <h1 className="text-8xl m-8 font-medium">{props.title}</h1>
      <div className=" my-8 mx-16">{props.children}</div>
    </section>
  );
}
