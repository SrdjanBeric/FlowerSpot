import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFavorites } from "../redux/favorites/favoritesActions";
import FlowerContainer from "./FlowerContainer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Favorites({ fetchFavorites, favoritesData }) {
    let { page } = useParams();

    useEffect(() => {
        fetchFavorites(page);
    }, []);
    const flowers = favoritesData?.favorites?.map((flower) => {
        return flower.flower;
    });
    return (
        <div>
            <FlowerContainer flowers={flowers} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favoritesData: state.favorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavorites: (page) => dispatch(fetchFavorites(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
