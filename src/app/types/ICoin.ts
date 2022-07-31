export interface ICoin {
    id: string;
    image: {
        large: string;
        small: string;
        thumb: string;
    }
    last_updated: string;
    market_data: {
        circulating_supply: string;
        current_price: {
            rub: number;
            usd: number;
            eur: number;
        }
        high_24h: {
            rub: number;
            usd: number;
            eur: number;
        }
        low_24h: {
            rub: number;
            usd: number;
            eur: number;
        }
        market_cap: {
            rub: number;
            usd: number;
            eur: number;
        }
        market_cap_change_percentage_24h: number;
        market_cap_change_percentage_24h_in_currency: {
            rub: number;
            usd: number;
            eur: number;
        }
        market_cap_rank: number;
        price_change_24h: number
        price_change_24h_in_currency: {
            rub: number;
            usd: number;
            eur: number;
        }
        total_supply: string;
    }
    name: string;
    symbol: string;
}

