import React from "react";
import { useParams } from "react-router-dom";
import flowerProfile from "../images/flower-profile.png";
import flowerBackground from "../images/flower-detail-background.png";
import bookmark from "../images/bookmark.png";
import "./style/FlowerDetails.css";
function FlowerDetails() {
    let { id } = useParams();
    return (
        <div className="flower-details-content">
            <div className="flower-details-upper-content">
                <img className="flower-details-cover" src={flowerBackground} />
                <div className="flower-detail-header">
                    <div className="flower-detail-left-align">
                        <div>
                            <img
                                className="flower-profile-picture"
                                src={flowerProfile}
                            />
                        </div>
                        <div className="flower-detail-cover-info">
                            <div className="flower-detail-bookmark-sighting">
                                <img
                                    className="flower-detail-bookmark-icon"
                                    src={bookmark}
                                />
                                <button className="flower-detail-sighting-button">
                                    127 sightings
                                </button>
                            </div>
                            <p className="flower-detail-name">Ballon Flower</p>
                            <p className="flower-detail-latin">
                                Platycodoon grandiflorus
                            </p>
                        </div>
                    </div>
                    <div className="flower-detail-right-align">
                        <button className="flower-detail-add-new-sighting-button">
                            + Add New Sighting
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flex: "3",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flex: "2",
                    }}
                >
                    <p className="flower-detail-feature">
                        Kingdom: Plantae <br />
                        Order: Asterales <br />
                        Family: Campanulaceae <br />
                        Species: P. grandiflorus
                    </p>
                </div>
                <div className="flower-detail-long-description">
                    <p className="flower-detail-long-description-text">
                        Platycodon grandiflorus (from Ancient Greek πλατύς
                        "wide" and κώδων "bell") is a species of herbaceous
                        flowering perennial plant of the family Campanulaceae,
                        and the only member of the genus Platycodon. It is
                        native to East Asia (China, Korea, Japan, and the
                        Russian Far East).[1] It is commonly known as balloon
                        flower[2][3] (referring to the balloon-shaped flower
                        buds), Chinese bellflower,[2] or platycodon.[2] Growing
                        to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an
                        herbaceous perennial with dark green leaves and blue
                        flowers in late summer. A notable feature of the plant
                        is the flower bud which swells like a balloon before
                        fully opening.[4] The five petals are fused together
                        into a bell shape at the base, like its relatives, the
                        campanulas. There are varieties with white, pink and
                        purple blooms in cultivation.[5] In Korea, white flowers
                        are more common. This plant[6] together with its
                        cultivars 'Apoyama group'[7] and 'Mariesii'[8] have
                        gained the Royal Horticultural Society's Award of Garden
                        Merit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FlowerDetails;
