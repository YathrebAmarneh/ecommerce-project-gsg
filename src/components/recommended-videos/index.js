import RecommendedVideosItem from "./recommended-videos-item";
import style from "./style.module.css";
import Button from "../shared-components/button";

const recommendedVideosData = [
  {
    imageName: "635c0a53670aa9b611314996afb28e7cbfb6a4ec.png",
    caption: "Jamdani",
  },
  {
    imageName: "2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png",
    caption: "Lorem ipsum dolor sit amet",
  },
  {
    imageName: "2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png",
    caption: "Lorem ipsum dolor sit amet",
  },
];
const RecommendedVideos = () => {
  return (
    <div className={style.container}>
      <h1>Recommended Videos</h1>
      <div className={style.recommendedVideo}>
        {recommendedVideosData.map((recommendedVideosdata) => {
          const { imageName, caption } = recommendedVideosdata;
          return (
            <>
              <RecommendedVideosItem imageName={imageName} caption={caption} />
            </>
          );
        })}
      </div>

      <Button
        backgroundColor="black"
        height=""
        width="130px"
        padding="2.5rem"
        buttonContent="SHOW MORE"
      />
    </div>
  );
};

export default RecommendedVideos;
