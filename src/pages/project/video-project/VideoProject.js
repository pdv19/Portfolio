import React from 'react'
import ReactPlayer from 'react-player'
import introVideo from './video/Intro.mp4'
import introVideo2 from './video/video2.webm'
import introVideo3 from './video/video3.webm'
import introVideo4 from './video/video4.webm'

const VideoProject = () => {
    console.log('a')
  return (
    <div>
        <section
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            // transition={transition1}
            className="section text-center"
            style={{ backgroundColor: '#F1F2F2' }}
        >
            <div style={{paddingTop: '10rem'}}
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
            //   transition={transition1}
              className="flex flex-col lg:items-start mx-auto mt-auto"
            >
              <h1 className="h1 mx-auto mt-auto">Video</h1>
            </div>

            <div style={{padding: '0px 5rem'}}>
            <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <p>PRESENTED BY FOREVERMOORE FILMS</p>
                    <p>Averi + Josh Gallery</p> 
                    <p>July 8th, 2023 | Saint Mary's Cathedral + Big Buck | Gaylord, MI  </p> 
                </div>
               <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                    <ReactPlayer 
                        url={introVideo}
                        width='800px'
                        playing
                    />   
                    <p>Hightlight</p>
               </div>
            </div>

            <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '10px'}}>
            <div style={{ padding: '10px' }}>
                <ReactPlayer 
                     url={introVideo2}
                     width="800px"
                     height="450px"
                     controls={true}
                />   
                <p>Visit with Grandpa</p>
            </div>

                <div style={{padding: '10px'}}>
                    <ReactPlayer 
                       url={introVideo3}
                       width="800px"
                       height="450px"
                       controls={true}
                    />   
                    <p>Toasts</p>
                </div>
               <div style={{padding: '10px', width: '100%'}}>
                  <ReactPlayer 
                    url={introVideo4}
                    width="100%"
                    height="450px"
                    controls={true} />   
                  <p>Ceremony Film</p>
               </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default VideoProject