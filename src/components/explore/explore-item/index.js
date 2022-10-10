
const ExploreItem = ({id, date, headerTitle, headerSize, content, imageName}) => {
  return (
    <div>
      <hr/>
        <p>{date}</p>
        {headerSize==="big"?<h3>{headerTitle}</h3>:<h4>{headerTitle}</h4>}
        <p>{content}</p>
        {imageName.length?<img alt="exploreimages" src={`assets/images/${imageName}.png`}/>:""}
    </div>
  )
}

export default ExploreItem