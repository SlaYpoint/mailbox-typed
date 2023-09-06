import React from "react";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";
import { MailType } from "../type";

export function Spam(): JSX.Element {
  const { spam } = useMail();

  return (
    <div style={{ padding: "3rem" }}>
      {spam.map((mail: MailType) => {
        return <MailCard {...mail} key={mail.mId} noDetail isInSpam />;
      })}
      {spam.length <= 0 ? <p>No spam mails available.</p> : null}
    </div>
  );
}
