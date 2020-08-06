import React, { useEffect } from "react";
import { ReviewOfferBtn } from "../Buttons";
import { NotificationManager } from "react-notifications";

function MyListingItem(props) {
  console.log(props.data);
  let isOffer = true;

  useEffect(() => {
    NotificationManager.success("Here are all your listings:");
  }, []);


  return (
    <div>
      {props.data
        .filter((x) => x.Item !== undefined)
        .map((item) => {
          return (
            <div className="card" id="listing-item" key={item.id}>
              <div className="card-body" id="listing-item">
                <h5 className="card-title">{item.Item.name}</h5>
                <div>
                  <p>
                    <span className="badge badge-pill badge-dark">
                      {item.Item.platform}
                    </span>{" "}
                    <span className="badge badge-pill badge-primary">
                      Adventure
                    </span>
                  </p>
                  <p>Games you want:</p>
                  <ul>
                    {item.request.map((x, index) => {
                      return (
                        <li key={index}>
                          {x.title} on {x.platform}{" "}
                        </li>
                      );
                    })}
                  </ul>
                  {/* <span className="badge badge-pill badge-dark">{item.request.platform}</span>{" "} */}
                  {parseInt(item.offer) === 1 ? <ReviewOfferBtn data={item} reviewOffer={props.reviewOffer}/> : <></>}
                  <button type="button" className="btn cancel-btn">
                    Cancel Listing
                  </button>
                </div>
                <br />
                <hr />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MyListingItem;
