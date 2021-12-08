
function GameCard(props) {
    function showLogASessionButton() {
        return (
            <button type="button" onClick={handleGameSessionClick} className="btn btn-info btn-sm">Log a Play Session</button>
        );
    }

    function showFavoriteAGameButton() {
        return (
            <button type="button" onClick={handleFavoriteGameClick} className="btn btn-info btn-sm m-3">Set as Favorite Game</button>
        );
    }

        //handling logging of play session with POST


    
    function handleGameSessionClick(event){
        event.preventDefault()
        console.log(props)
        const gameNight = {
            user_id: props.user.id,
            game_id: props.id
        }
        fetch('/gamenights',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameNight)
        })
        alert("Enjoy your session! Please Return the game before checking out another.")
    }
            
    //handling favorite game PATCH request

    function handleFavoriteGameClick(event){
        event.preventDefault()
        fetch('/gamenights', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({game_id: props.id})
        }

        )
    }
    


    return (
        <div className="pt-3 ">
            <div className="card card-styling p-3 text-center">
                <h1 className="">{props.title}</h1>
                <img src={props.image} className="game-card-images border " alt="user profile avatar"></img>
                <h4>Playtime: {props.min_playtime}-{props.max_playtime} minutess</h4>
                <h4>Players: {props.min_players}-{props.max_players}</h4>
                <p>Our Price: ${props.cost}.00</p>
                <p>{props.description}</p>
                {!!props.user ? showLogASessionButton() : null}
                {!!props.user ? showFavoriteAGameButton() : null}

            </div>
        </div>
    )
    };


    export default GameCard;
