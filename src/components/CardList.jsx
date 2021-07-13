import './CardList.css';

const CardList = ({ cards }) => {
    return (
    <div id="container">
        {cards.map((card) => (
            <img key={card.id} className="card" src={card.imageUrl} alt="Pokemon Card"></img>
    
        ))}
    </div>
    );
};

export default CardList;