import React, {useState, useEffect} from "react";
import axios from "axios";

function FishCard() {
  const [fishData, setFishData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendGetRequest = async () => {
    try {
      const resp = await axios(
        "https://whats-that-fish.up.railway.app/fishes/pics"
      );
      setFishData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
    setLoading(false);
  }, []);
  console.log(fishData);


  
  let scrollUp = () => {
    document.querySelectorAll(".fishCard").style.transform =
      "translateY(-1000px)";
  };

  let scrollDown = () => {
    document.querySelectorAll(".fishCard").style.transform =
      "translateY(1000px)";
  };

  if (!loading) {
    return (
      <>
        {fishData.map((fish, i) => {
          return (
            <div className="fishCard" key={i}>
              <img
                src={fish?.imgUrl}
                alt={fish.speciesName}
                width="280"
                height="180"
              />
              <div className="fishCard-name">{fish.speciesName}</div>
              <div>{fish.altName}</div>
              <div>{fish.color}</div>
              <div>{fish.taste}</div>
              <div>{fish.calories}</div>
              <div>{fish.protein}</div>
              <div>{fish.totalFat}</div>
            </div>
          );
        })}
        <button className="upBtn" onClick={scrollUp}>
          U
        </button>
        <button className="downBtn" onClick={scrollDown}>
          D
        </button>
      </>
    );
  }
}

export default FishCard;
