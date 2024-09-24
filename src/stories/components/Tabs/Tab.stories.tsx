import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tab from '../../../components/Tabs/Tab';
import { emailTab } from '../../../mocks/tabs';
import { TabVariant } from '../../../types/tabs';

type TabProps = React.ComponentProps<typeof Tab>

export default {
  component: Tab,
  title: 'Tabs/Tab',
} as Meta<TabProps>



export const Pill: StoryObj<typeof Tab> = {
    args: {
        tab: emailTab,
        variant: TabVariant.Pill,
        selected: true,
        onClick: ()=>{},
    },
};

export const Underline: StoryObj<typeof Tab> = {
    args: {
        tab: emailTab,
        variant: TabVariant.Underline,
        selected: true,
        onClick: ()=>{},
    },
};