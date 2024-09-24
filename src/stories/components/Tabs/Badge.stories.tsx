import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../../../components/Tabs/Badge';
import { negativeBadge } from '../../../mocks/tabs';
import { BadgeVariant } from '../../../types/tabs';

type BadgeProps = React.ComponentProps<typeof Badge>

export default {
  component: Badge,
  title: 'Tabs/Badge',
} as Meta<BadgeProps>


export const Positive: StoryObj<typeof Badge> = {
    args: {
        label: negativeBadge.label,
        variant: BadgeVariant.Positive,
    },
};

export const Negative: StoryObj<typeof Badge> = {
  args: {
      label: negativeBadge.label,
      variant: BadgeVariant.Negative,
  },
};

export const Neutral: StoryObj<typeof Badge> = {
  args: {
      label: negativeBadge.label,
      variant: BadgeVariant.Neutral,
  },
};