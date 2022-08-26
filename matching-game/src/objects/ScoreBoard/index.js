import PlayerName from "../../components/PlayerName";
import './style.css';
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";

function ScoreBoard() {
return /*html*/` 
<header class="score-board">
${PlayerName("Player1")}
${PlayerScore(0)}
${VsPlayer("vs")}
${PlayerScore(1)}
${PlayerName("Player2")}
</header>
`;
}

export default ScoreBoard;