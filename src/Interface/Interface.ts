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
    newInner: number | null;
    newOuter: number | null;
    newInnerColor: String | null;
    newOuterColor: String | null;
    pastInner: number;
    pastOuter: number;
  }

export interface RouletteHistory {
    initialArray: HistoryItem[] | null;
}

export interface HistoryItem {
    colorOuter: string;
    colorInner: string;
  }