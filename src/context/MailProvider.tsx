import React, { createContext, useContext, useReducer } from "react";

import { MailContextValue, MailProviderProps, MailType } from "../type";
import { mailReducer, initialState } from "../reducer/mailReducer";

const MailContext = createContext<MailContextValue | null>(null);

const useMail = (): MailContextValue => {
  const context = useContext(MailContext);
  if (!context) {
    throw new Error("useMail must be used within MailProvider");
  }
  return context;
};

function getFilteredData(
  mailList: MailType[],
  { showStarred, showUnread }: { showStarred: boolean; showUnread: boolean }
): MailType[] {
  return mailList
    .filter(({ isStarred }) => (showStarred ? isStarred : true))
    .filter(({ unread }) => (showUnread ? unread : true));
}

const MailProvider: React.FC<MailProviderProps> = ({
  children
}): JSX.Element => {
  const [{ data, showStarred, showUnread, spam, trash }, dispatch] = useReducer(
    mailReducer,
    initialState
  );

  const filteredData = getFilteredData(data, {
    showStarred: showStarred,
    showUnread: showUnread
  });

  return (
    <MailContext.Provider
      value={{
        data: filteredData,
        dispatch,
        spam,
        trash,
        showStarred,
        showUnread
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider, useMail };
