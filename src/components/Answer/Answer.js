import React from "react";

const Answer = ({ question, answer }) => {
  const asnAndQues = [
    {
      id: 1,
      ques: `How react Works?`,
      ans: `React simply maintains track of your tree and does efficient node diff computations. Your HTML code, at least according to how your browser perceives it, is fundamentally a tree. The Document Object Model, or DOM as it's often called, is created by it.
      The HTML DOM is essentially an application programming interface (API) for modifying its nodes. It has a lot of techniques to target each node, such getElementById or the new querySelector, and we use JS to deal with the DOM. This means that we must rewrite the DOM every time we want to change content, which is a time-consuming procedure. Why is it so expensive, you might wonder.
      Although the V.DOM object performs the same functions as a true DOM object, it is faster since it does not cause the screen to change. The V.DOM is a lightweight representation of a DOM that is free of browser-specific implementation details. V.DOM may be thought of as a prototype for the ultimate product.`,
    },
    {
      id: 2,
      ques: `what is the Different  between  props and state?`,
      ans: `Props are variables passed down from a parent component to a React component. State, on the other hand, is still a collection of variables that the component handles directly. Properties should never be changed in a child component, therefore anything that modifies a variable should be part of the component state. To encapsulate information about a component's current state, React uses a simple JavaScript object called state.
      The component takes care of it (just like any variable declared in a function). While a "normal" variable "disappears" as their function ends, state variables are preserved in React.`,
    },
    // {
    //   id: 3,
    //   ques: `How React Work?`,
    //   ans: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quam animi aspernatur? Atque ducimus eaque ipsum autem obcaecati esse quia.`,
    // },
  ];
  return (
    <div>
      <h2> Answer all Questions</h2>
      {asnAndQues.map((ansQues) => (
        <>
          <div className="py-3">
            <h4 key={ansQues.id}>{ansQues.ques}</h4>
            <h6>{ansQues.ans}</h6>
          </div>
        </>
      ))}
    </div>
  );
};

export default Answer;
