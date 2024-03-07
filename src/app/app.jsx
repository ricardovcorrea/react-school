import { Button } from "./components/button";

export const App = () => {
  console.log("aqui");

  return (
    <div className="app">
      <Button onClick={() => alert(1)}>Click 11</Button>
      <Button onClick={() => alert(2)}>Click 12</Button>
      <Button onClick={() => alert(3)}>Click 13</Button>
    </div>
  );
};
