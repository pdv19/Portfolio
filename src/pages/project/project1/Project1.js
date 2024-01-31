import React from 'react'
import LazyImage from '../../../components/LazyImage/LazyImage'
import {data} from '../../../components/LazyImage/data'
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div style={{padding: '10rem 10px'}}>
        <h1>
        🚀 Optimized Image Loading: Enhancing Performance with Intersection
        Observe 💨
      </h1>
      <p>
        Incorporate the power of Intersection Observer into your web projects to
        optimize image loading and elevate performance. With Intersection
        Observer, images are fetched dynamically as they come into the viewport,
        eliminating the need to load all images upfront. This technique improves
        page load speed and reduces unnecessary network requests, resulting in a
        smoother browsing experience for users. By intelligently loading images
        only when needed, we achieve faster load times, conserve bandwidth, and
        create a more efficient and enjoyable user experience. Learn how to
        implement this performance-enhancing feature in your projects and unlock
        the full potential of optimized image loading.
      </p>
      <Link to={"/contact"} className="btn mb-[30px] mx-auto mx-auto mt-auto" style={{width: 300, marginTop: 10}}>
          Contact me
      </Link>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <LazyImage src={item.src} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Project1