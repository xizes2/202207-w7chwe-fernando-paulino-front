import AppStyled from "./AppStyled";
import Register from "./components/Register/Register";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled className="main-container">
        <h1 className="main-container__title">SociMonsters</h1>
        <Register />
      </AppStyled>
    </>
  );
};

export default App;
