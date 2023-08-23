import './NextPage.css';


function NextPage() {
    return(
        <div className="next-page">
            <div className="next-page-icons">
                <button className="num num1">1</button>
                <button className="num">2</button>
                <button className="num">3</button>
                <button className="dots">...</button>
                <button className="arrow">{'>'}</button>
            </div>
        </div>
    );
}

export default NextPage;