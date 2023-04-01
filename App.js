const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "kfsdfds" },
  "Hello world"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);
console.log(heading); // it will create the Object
const root = ReactDOM.createRoot(document.getElementById("root"));
//after putting the react element in render method then it will convert the React object into h1 tag.

root.render(parent);
