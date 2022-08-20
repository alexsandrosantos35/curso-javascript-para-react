import PlayerName from "../../components/PlayerName";
import './style.css';
import VsPlayer from "../../components/VsPlayer";

function ScoreBoard() {
return /*html*/` 
<header class="score-board">
${PlayerName("Player1")}
${VsPlayer("vs")}
${PlayerName("Player2")}
</header>
`;
}

export default ScoreBoard;