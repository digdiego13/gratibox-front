import {
  GenericButton,
  MensagesStyled,
  SubscriptionCard,
} from "../shared/sharedStyles/sharedStyles";
import subscriptionImgWeek from "../shared/images/image04.jpg";
import subscriptionImgMonth from "../shared/images/image02.jpg";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router";
import { getSubscription } from "../service";

export default function SubscriptionPage() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    getSubscription(user.token)
      .then((res) => {
        Object.keys(res.data).length > 0
          ? history.push("/details")
          : console.log("ok");
      })
      .catch((err) => {
        alert(err.response.status);
      });
  }, []);
  return (
    <>
      <h1>Bom te ver aqui, {user.name}</h1>
      <MensagesStyled>
        Você ainda não assinou um plano, que tal começar agora?
      </MensagesStyled>
      <SubscriptionCard>
        <img src={subscriptionImgWeek} alt={"Week subscription"}></img>
        <p>
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão
          todos os dias.
        </p>
        <GenericButton>Assinar</GenericButton>
      </SubscriptionCard>
      <SubscriptionCard>
        <img src={subscriptionImgMonth} alt={"Month subscription"}></img>
        <p>Você recebe um box por mês.</p>
        <br />
        <p>Ideal para quem está começando agora.</p>
        <GenericButton>Assinar</GenericButton>
      </SubscriptionCard>
    </>
  );
}
