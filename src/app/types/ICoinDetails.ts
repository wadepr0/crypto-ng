export type DeepNullable<T> = {
    [K in keyof T]: DeepNullable<T[K]> | null;
};

export interface ICoinDetails {

    id: string;
    symbol: string;
    name: string;
    categories: string[];
    description: {
        en: string;
    }
    links: {
        homepage: string[];
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url: string[];
        announcement_url: string[];
        twitter_screen_name: string;
        telegram_channel_identifier: string;
        subreddit_url: string;
        repos_url: {
            github: string[]
        }
    }
    image: {
        thumb?: string;
        small?: string;
        large?: string;
    }
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;

    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    market_data: {
        current_price: {
            usd: number;
            eur: number;
            rub: number;
        },
        ath: {
            usd: number;
            eur: number;
            rub: number;
        },
        ath_change_percentage: {
            usd: number;
            eur: number;
            rub: number;
        },
        ath_date: {
            usd: number;
            eur: number;
            rub: number;
        },
        market_cap: {
            usd: number;
            eur: number;
            rub: number;
        }
        market_cap_rank: number;
        total_volume: {
            usd: number;
            eur: number;
            rub: number;
        },
        high_24h: {
            usd: number;
            eur: number;
            rub: number;
        },
        low_24h: {
            usd: number;
            eur: number;
            rub: number;
        },
        price_change_24h: number,
        price_change_percentage_24h: number,
        price_change_percentage_7d: number,
        price_change_percentage_14d: number,
        price_change_percentage_30d: number,
        price_change_percentage_60d: number,
        price_change_percentage_200d: number,
        price_change_percentage_1y: number,
        market_cap_change_24h: number,
        market_cap_change_percentage_24h: number,
        price_change_24h_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        }
        price_change_percentage_1h_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        price_change_percentage_24h_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        price_change_percentage_7d_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        price_change_percentage_30d_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        price_change_percentage_1y_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        market_cap_change_24h_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        market_cap_change_percentage_24h_in_currency: {
            usd: number;
            eur: number;
            rub: number;
        },
        total_supply: number;
        circulating_supply: number;
        last_updated: string;
    },
    last_updated: string;
}