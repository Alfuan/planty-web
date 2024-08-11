import type { PropsWithChildren } from "react";

function UserChatItem({ children }: PropsWithChildren) {
  return (
    <div>
      <p>{children}</p>
      <img src="" alt="" />
    </div>
  );
}

export default UserChatItem;
