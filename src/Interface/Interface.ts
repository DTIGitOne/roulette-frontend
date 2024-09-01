export interface DateState {
    day: string;
    month: string;
    year: string;
}

export interface DateDataState {
    day: string | null;
    month: string | null;
    year: string | null;
}

export interface RootState {
    dateData: DateDataState; 
}

export interface RouletteWheelProps {
    currentTimer: number;
    newInner: number;
    newOuter: number;
    pastInner: number;
    pastOuter: number;
  }