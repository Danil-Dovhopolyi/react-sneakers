function Card(){
    return (
        <div className="card">
        <div className = "favourite">
            <img src="/img/heart-unliked.svg" alt="Unliked"/>
        </div>
    <img width={133} heigth={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
        </div>

    <button className="button">
        <img width={11} heigth={11} src="/img/plus.svg" alt="Plus" />
    </button>
    </div>
    </div>
    );
}
export default Card;