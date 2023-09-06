import React from "react";
import { useParams } from "react-router-dom";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";
import { MailType } from "../type";

export function MailDetail(): JSX.Element {
  const { mailId } = useParams<{ mailId: string }>();

  const { data } = useMail();

  function getMailDetails(mails: MailType[], mailId: string): MailType {
    return mails.find((mail) => mail.mId === mailId);
  }

  const mail = getMailDetails(data, mailId);

  if (!mail) {
    return <p>Mail not found</p>;
  }

  return (
    <>
      <MailCard {...mail} />
    </>
  );
}
