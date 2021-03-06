import React from 'react';
import './Stylesheets/home.css';

function Home() {
    return (
        <div className="container">

            <div className="container-box-1">

                <div className="box1">
                    <h2>So, you want to travel to</h2>
                </div>

                <div className="box1">
                    <h1>Space</h1>
                </div>

                <div className="box1">
                    <p> Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>

             </div>


            <div className="container-box-2">

                <div className="box2">
                    <button>Explore</button>
                </div>

            </div>

        </div>
    )
}

export default Home;
