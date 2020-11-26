type PlayAgainProps = {
  onClick: () => void;
  gameStatus: string;
};

export function PlayAgain({ onClick, gameStatus }: PlayAgainProps) {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: gameStatus === 'lost' ? 'red' : 'green'}}
      >
        {gameStatus === 'lost' ? 'Game Over...' : 'You Won!'}
      </div>
      <button onClick={onClick}>Play Again</button>
    </div>
  );
}
