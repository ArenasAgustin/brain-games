import "./Level7.scss";

export default function Level7() {
  return (
    <div className="level7__container">
      <div className="level7__puzzle">
        <div className="level7__file">
          <p className="level7__letters">
            A, B, C, D, E. . . = 1, 2, 3, 4, 5. . .
          </p>
        </div>
      </div>

      <div className="level7__guess-container">
        <span className="level7__guess">10 21 5 7 15 19</span>
      </div>
    </div>
  );
}
