import {
  IonButton,
  IonGrid,
  IonIcon,
  IonItem,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Controls.css";
import { useWeatherApi } from "../hooks/useWeatherApi";

type Props = {};

export const Controls = (props: Props) => {
  const { fetchWeatherData } = useWeatherApi();
  return (
    <>
      <IonListHeader>Click to check weather</IonListHeader>
      <IonList>
        <IonItem>
          <IonButton role="button" onClick={() => fetchWeatherData()}>
            <IonIcon slot="start" icon={star} />
            Weather
          </IonButton>
        </IonItem>
      </IonList>
    </>
  );
};
