import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TabList from '../../../components/Tabs/TabList';
import { getMockTabs } from '../../../mocks/tabs';
import { TabVariant } from '../../../types/tabs';

type TabListProps = React.ComponentProps<typeof TabList>

export default {
  component: TabList,
  title: 'Tabs/TabList',
} as Meta<TabListProps>

//const tabs = ['Label 1', 'Label 2', 'Label 3'];


export const Pill: StoryObj<typeof TabList> = {
  args: {
        tabs: [...getMockTabs],
        variant: TabVariant.Pill
    },
};

export const Underline: StoryObj<typeof TabList> = {
    args: {
          tabs: [...getMockTabs],
          variant: TabVariant.Underline
      },
};

/*
export const PillMobile: StoryObj<typeof TabList> = {
    args: {
          tabs,
          variant: 'pill',
          isMobile: true,
      },
};

export const Underline: StoryObj<typeof TabList> = {
    args: {
          tabs,
          variant: 'underline',
          isMobile: false,
      },
  };
  
  export const UnderlinelMobile: StoryObj<typeof TabList> = {
      args: {
            tabs,
            variant: 'underline',
            isMobile: true,
        },
  };
  */