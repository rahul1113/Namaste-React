import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h1 className="head">Namaste React 🚀</h1>;

/**
 * Header
 *  -Logo
 *  -Nav Items
 *Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

//component Composition => Component composition is the name for passing components as props to other components, thus creating new components with other components.
const HeadingComponent = () => (
  <div id="container">
    {/* 3 type of way we can declaire the functional component */}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//after putting the react element in render method then it will convert the React object into h1 tag.

root.render(<HeadingComponent />);
