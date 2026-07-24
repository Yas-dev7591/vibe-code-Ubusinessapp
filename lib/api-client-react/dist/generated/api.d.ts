import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AnthropicConversation, AnthropicConversationInput, AnthropicConversationWithMessages, AnthropicError, AnthropicMessage, AnthropicMessageInput, ApiError, HealthStatus, MarketAnalysis, MarketAnalysisInput, MarketStats, Niche, Region } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAnalyzeMarketUrl: () => string;
/**
 * @summary Analyze market opportunity for a region and niche
 */
export declare const analyzeMarket: (marketAnalysisInput: MarketAnalysisInput, options?: RequestInit) => Promise<unknown>;
export declare const getAnalyzeMarketMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof analyzeMarket>>, TError, {
        data: BodyType<MarketAnalysisInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof analyzeMarket>>, TError, {
    data: BodyType<MarketAnalysisInput>;
}, TContext>;
export type AnalyzeMarketMutationResult = NonNullable<Awaited<ReturnType<typeof analyzeMarket>>>;
export type AnalyzeMarketMutationBody = BodyType<MarketAnalysisInput>;
export type AnalyzeMarketMutationError = ErrorType<ApiError>;
/**
* @summary Analyze market opportunity for a region and niche
*/
export declare const useAnalyzeMarket: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof analyzeMarket>>, TError, {
        data: BodyType<MarketAnalysisInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof analyzeMarket>>, TError, {
    data: BodyType<MarketAnalysisInput>;
}, TContext>;
export declare const getListAnalysisHistoryUrl: () => string;
/**
 * @summary List past market analyses
 */
export declare const listAnalysisHistory: (options?: RequestInit) => Promise<MarketAnalysis[]>;
export declare const getListAnalysisHistoryQueryKey: () => readonly ["/api/market/history"];
export declare const getListAnalysisHistoryQueryOptions: <TData = Awaited<ReturnType<typeof listAnalysisHistory>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnalysisHistory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAnalysisHistory>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAnalysisHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof listAnalysisHistory>>>;
export type ListAnalysisHistoryQueryError = ErrorType<unknown>;
/**
 * @summary List past market analyses
 */
export declare function useListAnalysisHistory<TData = Awaited<ReturnType<typeof listAnalysisHistory>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnalysisHistory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAnalysisUrl: (id: number) => string;
/**
 * @summary Get a specific analysis result
 */
export declare const getAnalysis: (id: number, options?: RequestInit) => Promise<MarketAnalysis>;
export declare const getGetAnalysisQueryKey: (id: number) => readonly [`/api/market/history/${number}`];
export declare const getGetAnalysisQueryOptions: <TData = Awaited<ReturnType<typeof getAnalysis>>, TError = ErrorType<ApiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnalysis>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAnalysis>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAnalysisQueryResult = NonNullable<Awaited<ReturnType<typeof getAnalysis>>>;
export type GetAnalysisQueryError = ErrorType<ApiError>;
/**
 * @summary Get a specific analysis result
 */
export declare function useGetAnalysis<TData = Awaited<ReturnType<typeof getAnalysis>>, TError = ErrorType<ApiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnalysis>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteAnalysisUrl: (id: number) => string;
/**
 * @summary Delete an analysis
 */
export declare const deleteAnalysis: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteAnalysisMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnalysis>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAnalysis>>, TError, {
    id: number;
}, TContext>;
export type DeleteAnalysisMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAnalysis>>>;
export type DeleteAnalysisMutationError = ErrorType<ApiError>;
/**
* @summary Delete an analysis
*/
export declare const useDeleteAnalysis: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnalysis>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAnalysis>>, TError, {
    id: number;
}, TContext>;
export declare const getListRegionsUrl: () => string;
/**
 * @summary List supported regions with macro data summaries
 */
export declare const listRegions: (options?: RequestInit) => Promise<Region[]>;
export declare const getListRegionsQueryKey: () => readonly ["/api/market/regions"];
export declare const getListRegionsQueryOptions: <TData = Awaited<ReturnType<typeof listRegions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRegions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listRegions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListRegionsQueryResult = NonNullable<Awaited<ReturnType<typeof listRegions>>>;
export type ListRegionsQueryError = ErrorType<unknown>;
/**
 * @summary List supported regions with macro data summaries
 */
export declare function useListRegions<TData = Awaited<ReturnType<typeof listRegions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRegions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListNichesUrl: () => string;
/**
 * @summary List popular business niches
 */
export declare const listNiches: (options?: RequestInit) => Promise<Niche[]>;
export declare const getListNichesQueryKey: () => readonly ["/api/market/niches"];
export declare const getListNichesQueryOptions: <TData = Awaited<ReturnType<typeof listNiches>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNiches>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listNiches>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListNichesQueryResult = NonNullable<Awaited<ReturnType<typeof listNiches>>>;
export type ListNichesQueryError = ErrorType<unknown>;
/**
 * @summary List popular business niches
 */
export declare function useListNiches<TData = Awaited<ReturnType<typeof listNiches>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNiches>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetMarketStatsUrl: () => string;
/**
 * @summary Get dashboard stats (total analyses, top regions, top niches)
 */
export declare const getMarketStats: (options?: RequestInit) => Promise<MarketStats>;
export declare const getGetMarketStatsQueryKey: () => readonly ["/api/market/stats"];
export declare const getGetMarketStatsQueryOptions: <TData = Awaited<ReturnType<typeof getMarketStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMarketStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMarketStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMarketStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getMarketStats>>>;
export type GetMarketStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard stats (total analyses, top regions, top niches)
 */
export declare function useGetMarketStats<TData = Awaited<ReturnType<typeof getMarketStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMarketStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListAnthropicConversationsUrl: () => string;
/**
 * @summary List all conversations
 */
export declare const listAnthropicConversations: (options?: RequestInit) => Promise<AnthropicConversation[]>;
export declare const getListAnthropicConversationsQueryKey: () => readonly ["/api/anthropic/conversations"];
export declare const getListAnthropicConversationsQueryOptions: <TData = Awaited<ReturnType<typeof listAnthropicConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnthropicConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAnthropicConversations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAnthropicConversationsQueryResult = NonNullable<Awaited<ReturnType<typeof listAnthropicConversations>>>;
export type ListAnthropicConversationsQueryError = ErrorType<unknown>;
/**
 * @summary List all conversations
 */
export declare function useListAnthropicConversations<TData = Awaited<ReturnType<typeof listAnthropicConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnthropicConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateAnthropicConversationUrl: () => string;
/**
 * @summary Create a new conversation
 */
export declare const createAnthropicConversation: (anthropicConversationInput: AnthropicConversationInput, options?: RequestInit) => Promise<AnthropicConversation>;
export declare const getCreateAnthropicConversationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAnthropicConversation>>, TError, {
        data: BodyType<AnthropicConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAnthropicConversation>>, TError, {
    data: BodyType<AnthropicConversationInput>;
}, TContext>;
export type CreateAnthropicConversationMutationResult = NonNullable<Awaited<ReturnType<typeof createAnthropicConversation>>>;
export type CreateAnthropicConversationMutationBody = BodyType<AnthropicConversationInput>;
export type CreateAnthropicConversationMutationError = ErrorType<unknown>;
/**
* @summary Create a new conversation
*/
export declare const useCreateAnthropicConversation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAnthropicConversation>>, TError, {
        data: BodyType<AnthropicConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAnthropicConversation>>, TError, {
    data: BodyType<AnthropicConversationInput>;
}, TContext>;
export declare const getGetAnthropicConversationUrl: (id: number) => string;
/**
 * @summary Get conversation with messages
 */
export declare const getAnthropicConversation: (id: number, options?: RequestInit) => Promise<AnthropicConversationWithMessages>;
export declare const getGetAnthropicConversationQueryKey: (id: number) => readonly [`/api/anthropic/conversations/${number}`];
export declare const getGetAnthropicConversationQueryOptions: <TData = Awaited<ReturnType<typeof getAnthropicConversation>>, TError = ErrorType<AnthropicError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnthropicConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAnthropicConversation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAnthropicConversationQueryResult = NonNullable<Awaited<ReturnType<typeof getAnthropicConversation>>>;
export type GetAnthropicConversationQueryError = ErrorType<AnthropicError>;
/**
 * @summary Get conversation with messages
 */
export declare function useGetAnthropicConversation<TData = Awaited<ReturnType<typeof getAnthropicConversation>>, TError = ErrorType<AnthropicError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnthropicConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteAnthropicConversationUrl: (id: number) => string;
/**
 * @summary Delete a conversation
 */
export declare const deleteAnthropicConversation: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteAnthropicConversationMutationOptions: <TError = ErrorType<AnthropicError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnthropicConversation>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAnthropicConversation>>, TError, {
    id: number;
}, TContext>;
export type DeleteAnthropicConversationMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAnthropicConversation>>>;
export type DeleteAnthropicConversationMutationError = ErrorType<AnthropicError>;
/**
* @summary Delete a conversation
*/
export declare const useDeleteAnthropicConversation: <TError = ErrorType<AnthropicError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnthropicConversation>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAnthropicConversation>>, TError, {
    id: number;
}, TContext>;
export declare const getListAnthropicMessagesUrl: (id: number) => string;
/**
 * @summary List messages in a conversation
 */
export declare const listAnthropicMessages: (id: number, options?: RequestInit) => Promise<AnthropicMessage[]>;
export declare const getListAnthropicMessagesQueryKey: (id: number) => readonly [`/api/anthropic/conversations/${number}/messages`];
export declare const getListAnthropicMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listAnthropicMessages>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnthropicMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAnthropicMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAnthropicMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listAnthropicMessages>>>;
export type ListAnthropicMessagesQueryError = ErrorType<unknown>;
/**
 * @summary List messages in a conversation
 */
export declare function useListAnthropicMessages<TData = Awaited<ReturnType<typeof listAnthropicMessages>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnthropicMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendAnthropicMessageUrl: (id: number) => string;
/**
 * @summary Send a message and receive an AI response (SSE stream)
 */
export declare const sendAnthropicMessage: (id: number, anthropicMessageInput: AnthropicMessageInput, options?: RequestInit) => Promise<unknown>;
export declare const getSendAnthropicMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendAnthropicMessage>>, TError, {
        id: number;
        data: BodyType<AnthropicMessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendAnthropicMessage>>, TError, {
    id: number;
    data: BodyType<AnthropicMessageInput>;
}, TContext>;
export type SendAnthropicMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendAnthropicMessage>>>;
export type SendAnthropicMessageMutationBody = BodyType<AnthropicMessageInput>;
export type SendAnthropicMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a message and receive an AI response (SSE stream)
*/
export declare const useSendAnthropicMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendAnthropicMessage>>, TError, {
        id: number;
        data: BodyType<AnthropicMessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendAnthropicMessage>>, TError, {
    id: number;
    data: BodyType<AnthropicMessageInput>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map