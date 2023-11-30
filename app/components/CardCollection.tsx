import Card from "./Card";

const CardCollection = () => {
  return (
    <div className="cards_full">
      <Card
        id="1"
        title={"PIETRACOLATA"}
        link="/pietracolata"
        img_src="https://storage.googleapis.com/lavastone/uvod/uvod_pietracolata.jpg"
      />
      <Card
        id="2"
        title={"FUCINA"}
        link="/fucina"
        img_src="https://storage.googleapis.com/lavastone/uvod/uvod_fucina.jpg"
      />
      <Card
        id="3"
        title={"SANSONE"}
        link="/sansone"
        img_src="https://storage.googleapis.com/lavastone/uvod/uvod_sansone.jpg"
      />
    </div>
  );
};

export default CardCollection;
