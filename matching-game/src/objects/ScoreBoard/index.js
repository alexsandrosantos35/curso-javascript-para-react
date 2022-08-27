import PlayerName from "../../components/PlayerName";
import './style.css';
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function ScoreBoard() {
return /*html*/` 
<header class="score-board">
${(ArrowDown(2))}
${PlayerName("Player1")}
${PlayerScore(0)}
${VsPlayer("vs")}
${PlayerScore(1)}
${PlayerName("Player2")}
</header>
`;
}

export default ScoreBoard;