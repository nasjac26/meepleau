import Search from './Search';


function Home(props) {
    return (
        <div className="text-center">
            <p className="pt-5">Welcome to our store!</p>
            <p>Please login to checkout a game and let us know what games you are enjoying.</p>
            <Search user={props.user} handleChange={props.handleChange} searchFormData={props.searchFormData} boardGameList={props.boardGameList} boardGamesToDisplay={props.boardGamesToDisplay} />
        </div>
    )
    };


    export default Home;
