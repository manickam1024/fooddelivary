import { IMG_CARD } from '../utils/srcs'
const Card = (props) => {
  const { resdata } = props
  const { name, avgRating, cuisines } = resdata.info
  const { slaString } = resdata.info.sla

  return (
    <div className="card">
      <div className="img">
        <img src={IMG_CARD} alt="" />
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
