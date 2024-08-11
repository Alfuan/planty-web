import { ToastContainer } from "react-toastify";

import Footer from "./Footer/Footer";
import styles from "./styles.module.scss";
import UserChatItem from "./Items/UserChatItem";
import PlantyChatItem from "./Items/PlantyChatItem";

import type { ChatItem } from "./types";

import "react-toastify/dist/ReactToastify.css";

function Chat() {
  const defaultMessage: ChatItem = {
    type: "planty",
    message:
      "Hola soy Planty, hazme una foto para ayudarte a encontrar problemas en tus plantas.",
  };
  const messages: ChatItem[] = [defaultMessage];

  return (
    <article className={styles.article}>
      {messages.map((x, index) => {
        if (x.type === "planty") {
          return <PlantyChatItem key={index}>{x.message}</PlantyChatItem>;
        } else {
          return <UserChatItem key={index}>{x.message}</UserChatItem>;
        }
      })}
      <Footer />
      <ToastContainer
        position="top-center"
        toastClassName={styles.toast}
        autoClose={2000}
        closeButton
        hideProgressBar
      />
    </article>
  );
}

export default Chat;
