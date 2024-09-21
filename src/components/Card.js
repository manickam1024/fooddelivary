import { IMG_CARD } from '../utils/srcs'
const Card = (props) => {
  const { resdata } = props
  const { name, avgRating, cuisines, cloudinaryImageId } = resdata.info
  const { slaString } = resdata.info.sla

  const imgid =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
    cloudinaryImageId

  return (
    <div className="card">
      <div className="img">
        <img src={imgid} alt="" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <div className="inline">
          <h3>{avgRating}</h3>
        </div>
        <div className="inline">
          <h3>{slaString}</h3>
        </div>
        <h3 className="cuisine">{cuisines.join(',')}</h3>
      </div>
    </div>
  )
}

export default Card
