import type { ApiError } from '@/api/model/responses/ApiError';
import GenericService from '@/api/service/GenericService';
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';

const useGetAll = (
  queryKey: string,
  service: GenericService,
  expanded?: boolean,
  payload?: {
    onSuccess?: (response: Array<unknown>) => void;
    onError?: (error: ApiError) => void;
    enabled?: boolean;
    gcTime?: number;
    staleTime?: number;
    refetchOnMount?: boolean;
  }
): UseQueryResult<Array<unknown>, ApiError> =>
  useQuery({
    queryKey: [queryKey],
    queryFn: async () => service.getAll(expanded),
    ...{
      gcTime: payload?.gcTime ?? undefined,
      staleTime: payload?.staleTime ?? undefined,
      enabled: payload?.enabled === undefined || payload?.enabled,
      onSuccess: (response: Array<unknown>) => payload?.onSuccess?.(response),
      onError: (error: ApiError) => {
        console.warn(error?.message);
        payload?.onError?.(error);
      },
      refetchOnMount:
        payload?.refetchOnMount === undefined || payload.refetchOnMount,
    },
  });

const useSave = (
  apiObject: string,
  service: GenericService,
  payload?: {
    onSuccess?: () => void;
    onError?: (error: ApiError) => void;
  }
): UseMutationResult<
  void,
  ApiError,
  {
    data: unknown;
  },
  unknown
> =>
  useMutation({
    mutationFn: ({ data }: { data: unknown }) => service.save(data),
    onSuccess: () => payload?.onSuccess?.(),
    onError: (err: ApiError) => {
      console.warn(`Could not create the ${apiObject}`, err?.message);
      return payload?.onError?.(err);
    },
  });

const useUpdate = (
  apiObject: string,
  service: GenericService,
  payload?: {
    onSuccess?: () => void;
    onError?: (error: ApiError) => void;
  }
): UseMutationResult<
  unknown,
  ApiError,
  {
    id: string;
    data: unknown;
  },
  unknown
> =>
  useMutation({
    mutationFn: ({ id, data }: { id: string; data: unknown }) =>
      service.update(id, data),
    onSuccess: () => payload?.onSuccess?.(),
    onError: (err: ApiError) => {
      console.warn(`Could not update the ${apiObject}`, err?.message);
      return payload?.onError?.(err);
    },
  });

const useDelete = (
  apiObject: string,
  service: GenericService,
  payload?: {
    onSuccess?: () => void;
    onError?: (error: ApiError) => void;
  }
): UseMutationResult<
  void,
  ApiError,
  {
    id: string;
  },
  unknown
> =>
  useMutation({
    mutationFn: ({ id }: { id: string }) => service.delete(id),
    onSuccess: () => payload?.onSuccess?.(),
    onError: (err: ApiError) => {
      console.warn(`Could not delete the ${apiObject}`, err?.message);
      return payload?.onError?.(err);
    },
  });

export { useDelete, useGetAll, useSave, useUpdate };
