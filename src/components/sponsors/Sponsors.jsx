import React from 'react';

const Sponsors = () => {
    return (
        <div className="sponsors content">
            <h3 className="heading">Sponzori i partneri</h3>
            <div className="sponsors-strip">
                <a href="http://www.austronet.ba/">
                    <img src="./images/sponsors/austronet.png" alt="Austronet" />
                </a>
                <a href="https://www.uci.org/">
                    <img src="./images/sponsors/uci.png" alt="UCI" />
                </a>
                <a href="http://3ww.papajoe.rs.ba/">
                    <img src="./images/sponsors/papa-joe.png" alt="Papa Joe" />
                </a>
                <a href="https://www.prijedorgrad.org/">
                    <img src="./images/sponsors/prijedor.png" alt="Grad Prijedor" />
                </a>
                <a href="https://www.uniqa.ba/">
                    <img src="./images/sponsors/uniqua.png" alt="Uniqua" />
                </a>
                <a href="https://www.facebook.com/LD-BIKE-351160814996780/">
                    <img src="./images/sponsors/ld-bike.png" alt="LD Bike" />
                </a>
            </div>
        </div>
    )
}

export default Sponsors;