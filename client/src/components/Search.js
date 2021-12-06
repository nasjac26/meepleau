import GameCard from "./GameCard";
import { useState } from "react"

function Search(props) {
    let filteredBoardGameList = [];

    const filterBoardGameList = props.boardGameList.filter(boardGame => {
        if (boardGame.title.toLowerCase().includes(props.searchFormData.toLowerCase())) {
            return filteredBoardGameList.push(boardGame);
        }
    });

    const gamesToDisplay = filteredBoardGameList.map(
        (singleGame) => {
            return(
                <div>
                    <GameCard
                        key={singleGame.id}
                        title={singleGame.title}
                        image={singleGame.medium_image}
                        year_published={singleGame.year_published}
                        min_players={singleGame.min_players}
                        max_players={singleGame.max_players}
                        cost={singleGame.msrp}
                        description={singleGame.description_preview}
                        min_playtime={singleGame.min_playtime}
                        max_playtime={singleGame.max_playtime}
                        user={props.user}
                    />
                </div>
            );
        });




    return(
        <div className="container text-center">
            <div className="container text-center">
                <form>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search our games"
                    name="search games"
                    onChange={props.handleChange}
                    value={props.searchFormData}
                />
                <button type="submit">Search</button>
                    </form>
            </div>
            <div>
            <div className="container">
                <div>{gamesToDisplay}</div>
            </div>
            </div>
        </div>
    )

}

export default Search;