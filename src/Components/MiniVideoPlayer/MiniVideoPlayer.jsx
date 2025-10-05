import React from 'react'
import './MiniVideoPlayer.css'
import { FaPlus } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const MiniVideoPlayer = () => {
    return (
        <div className='MiniVideoPlayer_Div_Component'>
            <div className='videoPoster'>
                <div className='videoMiniPlayer_box1'>
                    <div>
                        <h2>prime</h2>
                        <h1>Top 10 in India</h1>
                    </div>
                    <div>
                        <h1>Tears Of Steel</h1>
                        <h4>Action</h4>
                        <div className="minivideoPlayer-button">
                            <div>
                                <FaPlay size={'20px'} style={{background:'transparent'}}/>
                                <h3 style={{background:'transparent'}}>Play</h3>
                            </div>
                            <div><FaPlus style={{background:'transparent'}} size={'20px'}/></div>
                            <div><IoMdInformationCircle style={{background:'transparent'}} size={'20px'}/></div>
                        </div>
                    </div>
                </div>
                <div className='videoMiniPlayer_box2'>
                    {/* <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" autoPlay muted loop id="myVideo" height={'95%'} width={'100%'}  ></video> */}
                    <video src="https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4" type="video/mp4" autoPlay muted loop id="myVideo" height={'95%'} width={'100%'}  ></video>
                </div>
            </div>
        </div>
    )
}

export default MiniVideoPlayer