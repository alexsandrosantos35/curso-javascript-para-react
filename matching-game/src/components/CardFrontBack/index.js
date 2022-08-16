import CardGame from "../CardGame";

function CardFrontBack() {
return /*html*/`
<article>
${CardGame()}
${CardGame("javascript", "Logo do javascript")}
</article>
`;
}

export default CardFrontBack;