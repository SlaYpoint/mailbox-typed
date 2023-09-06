import React from "react";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";
import { MailType } from "../type";

export function Trash(): JSX.Element {
  const { trash } = useMail();

  return (
    <div style={{ padding: "3rem" }}>
      {trash.map((mail: MailType) => {
        return <MailCard {...mail} key={mail.mId} noDetail isInTrash />;
      })}
      {trash.length <= 0 ? <p>No conversations in Trash.</p> : null}
    </div>
  );
}
