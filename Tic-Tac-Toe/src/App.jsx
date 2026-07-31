import Board from "./Board";
import Game from "./Game";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-blue-400 flex flex-col justify-center items-center gap-2">
        <h1 className="text-fuchsia-950 text-5xl mb-10">Tic Tac Toe</h1>
        <Game />
      </div>
    </>
  );
}

export default App;
