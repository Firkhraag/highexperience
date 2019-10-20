import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LiveStreams.scss';
import config from '../../server/config/default';


const LiveStreams = () => {

    const [liveStreams, setLiveStreams] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams')
        .then(res => {
            const streams = res.data;
            if (typeof (streams['live'] !== 'undefined')) {
                getStreamsInfo(streams['live']);
            }
        })
        .catch(err => {
            console.log('Error');
        })
    });

    const getStreamsInfo = (liveStreams) => {
        fetch('/streams/info', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                streams: liveStreams,
            })
        })
        .then(res => {
            setLiveStreams(res.data)
        })
        .catch(err => console.log("Error"));
    }
    
    const streams = liveStreams.map((stream, index) => {
        return (
            <div className="stream col-xs-12 col-sm-12 col-md-3 col-lg-4" key={index}>
                <span className="live-label">LIVE</span>
                <Link to={'/stream/' + stream.username}>
                    <div className="stream-thumbnail">
                        <img align="center" src={'/thumbnails/' + stream.stream_key + '.png'}/>
                    </div>
                </Link>

                <span className="username">
                    <Link to={'/stream/' + stream.username}>
                        {stream.username}
                    </Link>
                </span>
            </div>
        );
    });

    return (
        <div className="container mt-5">
            <h4>Live Streams</h4>
            <hr className="my-4"/>

            <div className="streams row">
                {streams}
            </div>
        </div>
    );
        
}

export default LiveStreams;