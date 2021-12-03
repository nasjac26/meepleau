


function Profile( props ) {
    let lookingForGroup = props.user.lfg
    console.log(lookingForGroup)
    let checkIfLookingForGroup = (lookingForGroup) => (lookingForGroup ? "I'm looking for a group to play with!" : null);

    return (
        <div>
            {/* top row container */}
            <div className="container mt-5 ">
                <div className="row">
                    {/* User Profile info card*/}
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={props.user.image} class="card-img-left" alt="user profile picture"></img>
                            <div className="card-body">
                                <p className="card-text">{props.user.username}</p>
                                <p className="card-text">{props.user.location}</p>
                                <p className="card-text">{checkIfLookingForGroup(lookingForGroup)}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col-2">
                        {/* Last Game Night */}
                        <div className="card" style={{width: "13rem"}}>
                            <div className="card-header">
                                My Favorite Game
                            </div>
                            <ul class="list-group">
                                <li className="list-group-item">Game Title</li>
                                <li className="list-group-item">An Image</li>
                                <li className="list-group-item">Total Plays</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom row */}
            
        </div>
    )

};


export default Profile;