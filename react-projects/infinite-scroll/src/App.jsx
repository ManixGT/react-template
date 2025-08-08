import Virtualised from "./Virtualised.jsx";

const App = () => {
  const List = Array.from({ length: 10000000 }, (_, index) => index);
  return <Virtualised list={List} />;
};

export default App;