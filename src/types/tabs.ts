
export enum BadgeVariant {
    Positive = 'positive',
    Negative = 'negative',
    Neutral = 'neutral',
}
  
export type BadgeItem = {
    label: string;
    variant: BadgeVariant; 
};

export type TabItem = {
    id: number;
    label: string;
    icon? : string;
    badge? : BadgeItem | null;
    timer? : boolean;
};

export enum TabVariant {
    Pill = 'pill',
    Underline = 'underline',
  }
  
export type TabSet = {
    tabs: TabItem[];      
    variant: TabVariant;  
};