import "./Level8.scss";

export default function Level8() {
  return (
    <div className="level8__container">
      <div className="level8__puzzle">
        <div className="level8__file">
          <p className="level8__letter">A</p>
          <div className="level8__clue red"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">B</p>
          <div className="level8__clue grey"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">C</p>
          <div className="level8__clue green"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">D</p>
          <div className="level8__clue pink"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">E</p>
          <div className="level8__clue light-blue"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">G</p>
          <div className="level8__clue beige"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">H</p>
          <div className="level8__clue gold"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">I</p>
          <div className="level8__clue violet"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">J</p>
          <div className="level8__clue blue"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">L</p>
          <div className="level8__clue dark-gray"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">M</p>
          <div className="level8__clue burgundy"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">O</p>
          <div className="level8__clue orange"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">R</p>
          <div className="level8__clue yellow"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">S</p>
          <div className="level8__clue brown"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">T</p>
          <div className="level8__clue dark-blue"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">U</p>
          <div className="level8__clue black"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">X</p>
          <div className="level8__clue dark-green"></div>
        </div>
        <div className="level8__file">
          <p className="level8__letter">Y</p>
          <div className="level8__clue white"></div>
        </div>
      </div>

      <div className="level8__guess-container">
        <div className="level8__guess">
          <div className="red"></div>
          <div className="yellow"></div>
          <span>R + J</span>
          <div className="orange"></div>
          <span>J + A</span>
          <div className="blue"></div>
          <span>J + A</span>
          <div className="brown"></div>
        </div>
      </div>
    </div>
  );
}
