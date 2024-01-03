import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Controls } from "../components/Controls";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Weather Checker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Controls />
      </IonContent>
    </IonPage>
  );
};

export default Home;
