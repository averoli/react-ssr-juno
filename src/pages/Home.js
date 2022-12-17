import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import Button from "../components/button/Button";
import Image from "../assets/photo/christmas.jpg";
import "./style.css";
import Card from "../components/card/Card";

const month = [
  "Ta del av hela Junoversum som erbjuder dig en värdefull och aktiv vardag",
  "Ta del av exklusiva erbjudanden och inspirerande artiklar från handplockade samarbetspartners och experter!",
  "Träffa likasinnade i Junos gemenskap, både i appen och på hemsidan!",
  "Få tillgång till en marknadsplats anpassad efter dina önskemål!",
  "Betala ditt medlemskap månadsvis med kort!",
  "Betala ditt medlemskap månadsvis med kort!",
];

const year = [
  "Ta del av hela Junoversum som erbjuder dig en värdefull och aktiv vardag!",
  "Ta del av exklusiva erbjudanden och inspirerande artiklar från handplockade samarbetspartners och experter!",
  "Träffa likasinnade i Junos gemenskap, både i appen och på hemsidan!",
  "Få tillgång till en marknadsplats anpassad efter dina önskemål!",
  "Betala ditt medlemskap månadsvis eller årligen med kort!",
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Layout>
          <div className="colContent">
            <h1>
              Juno kopplar
              <br /> samman,
              <br /> aktiverar och
              <br /> inspirerar.
            </h1>
            <p>
              Gå med i vår härliga gemenskap där du träffar likasinnade och
              deltar i olika aktiviteter, utifrån dina intressen. Tillsammans
              skapar vi en värdefull vardag!
            </p>
            <Button>Kom igång</Button>

            <div>
              <p>Ladda ner appen nu och börja idag!</p>{" "}
              <a href="https://apps.apple.com/se/app/still-active-community/id1465625466?l=en">
                <img
                  src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/logo/ios.svg"
                  alt="App Store"
                  width="23%"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.reptilehaus.stillactive.se&utm_source=website&utm_campaign=website_banner&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/logo/android.svg"
                  alt="Google play"
                  width="30%"
                />
              </a>
            </div>
          </div>
          <figure>
            <img src={Image} alt="Christmas" />
          </figure>
        </Layout>
      </div>
      <div className="darkBackground">
        <Layout>
          <div className="colContent text">
            <div>
              <h3>Juno aktiverar</h3>
              <p>
                Leverera lokala evenemang och aktiviteter i realtid med en
                knapptryckning
              </p>
            </div>
            <div>
              <h3>Juno inspirerar</h3>
              <p>
                Det finns en värld av evenemang, hobbyer och sporter där ute som
                du kan utforska
              </p>
            </div>
            <div>
              <h3>Juno ansluter</h3>
              <p>
                Utvidga ditt sociala nätverk genom Juno och bygg långvariga
                relationer
              </p>
            </div>
          </div>
          <figure>
            <img
              src="https://juno-go.com/wp-content/uploads/2022/09/welcome-swedish.png"
              alt="Juno app"
              height="60%"
            />
          </figure>
          <div className="colContent text">
            <div>
              <h3>Juno aktiverar</h3>
              <p>
                Leverera lokala evenemang och aktiviteter i realtid med en
                knapptryckning
              </p>
            </div>
            <div>
              <h3>Juno inspirerar</h3>
              <p>
                Det finns en värld av evenemang, hobbyer och sporter där ute som
                du kan utforska
              </p>
            </div>
            <div>
              <h3>Juno ansluter</h3>
              <p>
                Utvidga ditt sociala nätverk genom Juno och bygg långvariga
                relationer
              </p>
            </div>
          </div>
        </Layout>
      </div>
      <div className="lightBackground">
        <Layout>
          <Card title="99" cardElements={month} />
          <Card title="999" cardElements={year} className="test" />
        </Layout>
      </div>
      <Footer />
    </>
  );
};

export default Home;
