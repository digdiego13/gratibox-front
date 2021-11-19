
import { useHistory, useParams } from "react-router";


export default function NewSubscriptionPage() {
  const { subscriptionType } = useParams();

  return <h1>New Subscription</h1>;
}
