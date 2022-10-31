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

  // useEffect(() => {
  //   fetch("https://whats-that-fish.up.railway.app/fishes/pics")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setFishData(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  if (!loading) {
    return (
      <div>
        {fishData.map((fish, i) => {
          return (
            <div className="fishCard" key={i}>
              <img
                src={fish?.imgUrl}
                alt={fish.speciesName}
                width="150"
                height="100"
              />
              <div className="fishCard-name">{fish.speciesName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FishCard;
