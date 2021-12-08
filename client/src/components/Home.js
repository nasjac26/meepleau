import Search from './Search';



function Home(props) {
    function welcomeAlertLoggedIn() {
    return (
            <div class="alert alert-success m-5" role="alert">
            <h4 class="alert-heading">Welcome to Meepleau, {props.user.username}!</h4>
            <p class="mb-0">Please ask a staff member if you have any questions about our games or starting a play session</p>
        </div>
        )
    }

    function welcomeGuest() {
        return (
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Welcome to our Board Game Library!</h4>
            <p class="mb-0">Please login to checkout a game and let us know what games you are enjoying.</p>
        </div>
        )
    }
    return (
        <div className="text-center">
            {!props.user ? welcomeGuest() : welcomeAlertLoggedIn()}
            <Search user={props.user} handleChange={props.handleChange} searchFormData={props.searchFormData} boardGameList={props.boardGameList} boardGamesToDisplay={props.boardGamesToDisplay} />
        </div>
    )
    };


    export default Home;
