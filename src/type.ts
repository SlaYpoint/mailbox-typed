import React, { ReactNode } from "react";

interface MailType {
  mId: string;
  subject: string;
  content: string;
  isStarred: boolean;
  unread: boolean;
}
//types for reducer actions
interface StarMailAction {
  type: "STAR_MAIL";
  payload: string;
}

interface DeleteMailAction {
  type: "DELETE_MAIL";
  payload: MailType;
}

interface DeleteForeverAction {
  type: "DELETE_FOREVER";
  payload: MailType;
}

interface UnreadMailAction {
  type: "UNREAD_MAIL";
  payload: string;
}

interface MarkReadAction {
  type: "MARK_AS_READ";
  payload: string;
}

interface AddSpamAction {
  type: "ADD_TO_SPAM";
  payload: MailType;
}

interface RemoveSpamAction {
  type: "REMOVE_FROM_SPAM";
  payload: MailType;
}

interface ToggleUnreadAction {
  type: "TOGGLE_UNREAD";
}

interface ToggleStarAction {
  type: "TOGGLE_STARRED";
}

type MailAction =
  | StarMailAction
  | DeleteMailAction
  | DeleteForeverAction
  | UnreadMailAction
  | MarkReadAction
  | AddSpamAction
  | RemoveSpamAction
  | ToggleUnreadAction
  | ToggleStarAction;
//type for State
interface MailState {
  data: MailType[];
  showStarred: boolean;
  showUnread: boolean;
  spam: MailType[];
  trash: MailType[];
}
//type for Context Value
interface MailContextValue extends MailState {
  dispatch: React.Dispatch<MailAction>;
}
//type for Context provider
interface MailProviderProps {
  children: ReactNode;
}

export { MailType, MailAction, MailProviderProps, MailContextValue, MailState };
