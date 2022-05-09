import styled from "styled-components";

const presentations = [
  {
    id: 1,
    title: "Köszöntő",
    startTime: "09:00",
    presenter: {
      name: "Dalos Ottó",
      company: "Cisco Magyarország",
      title: "ügyvezető igazgató",
      photo: "https://www.datocms-assets.com/63196/1644788738-dalos_otto.png",
    },
  },
  {
    id: 2,
    title: "A digitális evolúció és az oktatás",
    startTime: "09:20",
    presenter: {
      name: "Gonda Gábor",
      company: "T-Systems Magyarország Zrt.",
      title: " vezérigazgató",
      photo: "https://www.datocms-assets.com/63196/1647423382-gonda_gabor_2.png",
    },
  },
  {
    id: 1,
    title: "Befektetés az IT oktatásba",
    startTime: "09:45",
    presenter: {
      name: "Balogh Péter",
      company: "Baconsult Kft.",
      title: "angyalbefektető, ügyvezető",
      photo: "https://www.datocms-assets.com/63196/1646229711-balogh_peter_2.png",
    },
  },
];

const Presentations = () => {
  return (
    <Container>
      <h1>Előadások</h1>
      {presentations.map((presentation, index) => (
        <Presentation presentation={presentation} key={index} />
      ))}
    </Container>
  );
};

export default Presentations;

const Container = styled.div`
  padding: 15px;
  background-color: rgb(214, 244, 245);
  height: calc(100vh - 58px - 58px);
`;

const Presentation = (props) => {
  const { presentation } = props;
  return (
    <PresentationWrapper>
      <Time> {presentation.startTime} </Time>
      <Title> {presentation.title} </Title>
      <Presenter>
        {presentation.presenter.name}, {presentation.presenter.company}, {presentation.presenter.title}
        <div>
          <img src={presentation.presenter.photo} alt={presentation.presenter.name}/>
        </div>
      </Presenter>
      
    </PresentationWrapper>
  );
};

const PresentationWrapper = styled.div`
  padding: 15px;
`;

const Time = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(150, 150, 150);
`;


const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Presenter = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgb(150, 150, 150);
    img {
        width: 80px;
        border-radius: 50%;
        padding-top:10px
    }
`