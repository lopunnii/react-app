function Card({name, nameJp, type}) {
    return (
<div>
    <div style={{border: "1px solid black", margin: "10px"}}>
    <h2>{name}</h2>
    <p>{nameJp}</p>
    <p>Type: {type}</p>
    </div>
</div>
    );
}

export default function PokemonStarters() {
    return (
<div>
    <Card name="Bulbasaur" nameJp="フシギダネ" type="Grass"></Card>
    <Card name="Charmander" nameJp="ヒトカゲ" type="Fire"></Card>
    <Card name="Squirtle" nameJp="ゼニガメ" type="Water"></Card>
</div>
    );
}