import ExploreItem from "./explore-item";
import style from "./style.module.css";
const Explore = () => {
  const exploreItems = [
    {
      id: "1",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Connected Clothing: Raye Padit",
      headerSize: "big",
      content:
        "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      imageName: "c7663a357d9244c46a1e6fa3c99a91133043df2c",
    },
    {
      id: "2",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Kérastase: A Collaboration",
      headerSize: "small",
      content: "",
      imageName: "e2bc90982fb7e7249aa7e2b3a0dcb7947a202eee",
    },
    {
      id: "3",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Remarkable Resilience: Grace Kim",
      headerSize: "small",
      content:
        "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      imageName: "",
    },
    {
      id: "4",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Jaclynn Seah",
      headerSize: "small",
      content:
        "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
      imageName: "",
    },
    {
      id: "5",
      date: "FIELDTESTED.JANUARY 19, 2017",
      headerTitle: "Jaclynn Seah",
      headerSize: "small",
      content: "",
      imageName: "7eeccc1183cfe27c1a9b800c0037999ba9921181",
    },
  ];
  return (
    <div className={style.container}>
      <h1>Explore</h1>
      {exploreItems.map((exploreItem) => {
        const { id, date, headerTitle, headerSize, content, imageName } =
          exploreItem;
        return (
          <>
            <ExploreItem {...exploreItem} />
          </>
        );
      })}
    </div>
  );
};

export default Explore;
