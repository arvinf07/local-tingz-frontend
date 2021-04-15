import React from 'react'

const images = ["https://loving-newyork.com/wp-content/uploads/2019/09/fun-group-activities-in-nyc-160913110735011-1920x960.jpg",
"https://media.timeout.com/images/105721917/image.jpg",
"https://tourscanner.com/blog/wp-content/uploads/2018/03/aire_ancient_bath.jpg",
"https://cdn.traveltripper.io/site-assets/192_680_17421/media/2018-07-16-055254/mts-top-5-summer-activities-nyc-for-kids.png",
"https://citydadsgroup.com/nyc/wp-content/uploads/sites/2/2017/01/kids-winter-activities-nyc.jpg"]


export default function Home(){

  const renderImage = () => {
    let idx = Math.floor(Math.random() * 5)
    return <img src={images[idx]}></img>
  }

  return(
    <div className="background-img">
      {/* {renderImage()} */}
      <h2 id='motto'>Discover hidden gems near you </h2>
    </div>
  )
  
}