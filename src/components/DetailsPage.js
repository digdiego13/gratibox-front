import {
  GenericButtonStyled,
  MensagesStyled,
  DetailCardStyled,
  ContainerCenterStyled,
} from "../shared/sharedStyles/sharedStyles";
import detailImg from "../shared/images/image03.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router";
import { getSubscription } from "../service";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DatesComponent from "../shared/sharedComponents/DatesComponent";

export default function DetailsPage() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [subscriptionInfo, setSubscriptInfo] = useState({});

  useEffect(() => {
    getSubscription(user.token)
      .then((res) => {
        setSubscriptInfo(res.data);
      })
      .catch((err) => {
        alert(err.response.status);
      });
  }, []);

  if (Object.keys(subscriptionInfo).length === 0) {
    return "";
  }
  return (
    <ContainerCenterStyled>
      <h1>Bom te ver aqui, {user.name}</h1>
      <MensagesStyled>“Agradecer é arte de atrair coisas boas”</MensagesStyled>
      <DetailCardStyled>
        <img src={detailImg} alt={"detail img"}></img>
        <CardInfoStyled>
          <p>
            Plano: <ColorRedStyled>{subscriptionInfo.type}</ColorRedStyled>
          </p>
          <p>
            Data da assinatura{" "}
            <ColorRedStyled>{subscriptionInfo.subscriptionDate}</ColorRedStyled>
          </p>
          <p>Proximas entregas:</p>
          <DatesComponent
            date={subscriptionInfo.chosenDate}
            type={subscriptionInfo.type}
          ></DatesComponent>
        </CardInfoStyled>
      </DetailCardStyled>
      <GenericButtonStyled>Avaliar entregas</GenericButtonStyled>
    </ContainerCenterStyled>
  );
}

const ColorRedStyled = styled.span`
  color: red;
`;

const CardInfoStyled = styled.div`
  width: 100%;
`;
