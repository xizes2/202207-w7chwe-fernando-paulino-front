import AppStyled from "./AppStyled";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled className="main-container">
        <h1 className="main-container__title">SociMonsters</h1>
        <Register />
        <Login />
      </AppStyled>
    </>
  );
};

export default App;
