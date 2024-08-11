import type { PropsWithChildren } from "react";

function PlantyChatItem({ children }: PropsWithChildren) {
  return (
    <section>
      <img src="/planty.svg" alt="planty-icon" />
      <p>{children}</p>
    </section>
  );
}

export default PlantyChatItem;
