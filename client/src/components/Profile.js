import Search from "./Search"



function Profile( props ) {
    let lookingForGroup = props.user.lfg
    let checkIfLookingForGroup = (lookingForGroup) => (lookingForGroup ? "I'm looking for a group to play with!" : null);

    return (
        <div>
            {/* top row container */}
            <div className="container mt-5 ">
                <div className="row">
                    {/* User Profile info card*/}
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={props.user.image} class="card-img-left" alt="user profile avatar"></img>
                            <div className="card-body">
                                <p className="card-text">{props.user.username}</p>
                                <p className="card-text">{props.user.location}</p>
                                <p className="card-text">{checkIfLookingForGroup(lookingForGroup)}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col-5">
                        {/* Last Game Night */}
                        <div className="card " style={{width: "13rem"}}>
                            <div className="card-header">
                                My Favorite Game
                            </div>
                            <ul class="list-group">
                                <li className="list-group-item">{props.user.favorite_game.title}</li>
                                <img src={props.user.favorite_game.medium_image} class="card-img-left" alt="user profile avatar"></img>
                            </ul>
                        </div>
                    </div>
                    <div className="col-20 pt-5">
                        <div className="container border col">
                            <div><Search boardGameList={props.boardGameList} user={props.user} /></div>

                        </div>
                    </div>
                </div>
            </div>
            {/* bottom row */}
            
        </div>
    )

};


export default Profile;