import { BadgeVariant } from "../types/tabs";

export const negativeBadge = {
    label: 'Badge',
    variant: BadgeVariant.Negative,
};

export const positiveBadge = {
    label: 'Badge',
    variant: BadgeVariant.Positive
};

export const neutralBadge = {
    label: 'Badge',
    variant: BadgeVariant.Neutral,
};

export const emailTab = {
  id: 1,
  label: 'Emails',
  icon : false,
  badge : negativeBadge,
  timer : false,
};

export const filesTab = {
  id: 2,
  label: 'Files',
  icon : false,
  badge : null,
  timer : false,
};

export const editsTab = {
  id: 3,
  label: 'Edits',
  icon : false,
  badge : positiveBadge,
  timer : false,
}

export const messageTab = {
  id: 5,
  label: 'Message',
  icon : false,
  badge : neutralBadge,
  timer : false,
}

export const getMockTabs = [
  emailTab,
  filesTab,
  editsTab,
  messageTab,
];
