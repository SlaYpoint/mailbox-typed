import React from "react";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";
import { MailType } from "../type";

const calculateUnread = (data: MailType[]): number => {
  return data.reduce((acc: number, value: MailType) => {
    return value.unread ? acc + 1 : acc;
  }, 0);
};

export function Home(): JSX.Element {
  const { showUnread, showStarred, data, dispatch } = useMail();

  return (
    <div>
      <fieldset style={{ marginTop: "1rem" }}>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
            checked={showUnread}
            onChange={() => dispatch({ type: "TOGGLE_UNREAD" })}
          />
          Show unread mails
        </label>

        <label>
          <input
            type="checkbox"
            checked={showStarred}
            onChange={() => dispatch({ type: "TOGGLE_STARRED" })}
          />
          Show starred mails
        </label>
      </fieldset>
      <h3>Unread: {calculateUnread(data)}</h3>
      <div className="mail-list">
        {data.map((mail: MailType) => (
          <MailCard {...mail} key={mail.mId} noDetail />
        ))}
      </div>
    </div>
  );
}
