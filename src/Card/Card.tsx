import "./Card.css";
import EthIcon from "../assets/images/icon-ethereum.svg";
import ClockIcon from "../assets/images/icon-clock.svg";
import ViewIcon from "../assets/images/icon-view.svg";

export function Card() {
  return (
    <>
      <div className="card">
        <div className="card_image--wrapper">
          <div className="card__image--view">
            <img src={ViewIcon} alt="icon-view" />
          </div>
          <img
            className="card__image"
            src="../images/image-equilibrium.jpg"
            alt="img-equilibrium"
          />
        </div>
        <h1>Equilibrium #3429</h1>
        <p> Our Equilibrium collection promotes balance and calm.</p>
        <div className="card__info">
          <div className="card__info--price">
            <img src={EthIcon} alt="icon-ethereum" />
            <span>0.041 ETH</span>
          </div>
          <div className="card__info--time">
            <img src={ClockIcon} alt="icon-clock" />
            <span>3 days left</span>
          </div>
        </div>
        <hr />
        <div className="card__footer">
          <img src="../images/image-avatar.png" alt="img-avatar" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </>
  );
}
