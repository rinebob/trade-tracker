
/**
 * open transaction
 * close transaction
 * 
 * symbol
 * price
 * direction
 * timestamp
 * start/end account balance
 * trade size shares/dollars
 * reason
 * stop loss price/percent
 * target price/percent
 * duration
 * notes/discussion
 * 
 * 
 * results
 * profit/loss dollars/percent of trade/percent of account
 * 
 * 
 */

export enum TradeDirection {
    LONG = 'long',
    SHORT = 'short',
}

export interface TradeAmount {
    dollars: number;
    shares: number;
}

export enum TradeScenario {
    TREND = 'trend',
    COUNTER = 'counter',
    TRADING_RANGE = 'trading-range',
    FADE = 'fade',
    SCALP = 'scalp',
    REVERSAL = 'reversal',
}

export interface TransactionMetadata {
    direction: TradeDirection;
    timestamp: string;
    price: number;
    startAccountBalance: number;
    tradeAmount: TradeAmount;
    scenario: TradeScenario;
    notes: string;

}

export interface ChartImageMetadata {
    filename: string;
    symbol: string;
    timestamp: string;
    direction: TradeDirection;
    notes: string;

}

export interface TradeResultMetadata {
    priceChange: number;
    percentReturn: number;
    dollarReturn: number;

}

export interface TradeRecord {
    internalId: string;
    symbol: string;
    openMetadata: TransactionMetadata;
    closeMetadata: TransactionMetadata;
    images: ChartImageMetadata[];
    resultMetadata: TradeResultMetadata;

}

export enum EconomicEvent {
    FED_ANNOUNCEMENT = '',
    EMPLOYMENT_REPORT = '',
    CPI = '',
    PPI = '',
    EARNINGS = '',


}