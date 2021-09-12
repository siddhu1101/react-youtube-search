import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
    state = {videos: [], selectedVideo:""};
    componentDidMount() {
        this.onTermSubmit("buildings");
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    selectedItem = (video) => {
        this.setState({selectedVideo: video}    );
        // console.log("From App", video);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} selectedVideo={this.selectedItem}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;