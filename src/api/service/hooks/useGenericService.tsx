import ApiError from '@/api/model/responses/ApiError';
import GenericService from '@/api/service/GenericService';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

const useGetAll = (
  queryKey: string,
  service: GenericService,
  expanded?: boolean,
  payload?: {
    onSuccess?: (response: unknown[]) => void;
    onError?: (error: ApiError) => void;
    enabled?: boolean;
    cacheTime?: number;
    staleTime?: number;
    refetchOnMount?: boolean;
  }
): UseQueryResult<unknown[], ApiError> =>
  useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return await service.getAll(expanded);
    },
    cacheTime: payload?.cacheTime ?? undefined,
    staleTime: payload?.cacheTime ?? undefined,
    enabled: payload?.enabled === undefined || payload?.enabled,
    onSuccess: (response: unknown[]) => {
      payload?.onSuccess && payload.onSuccess(response);
    },
    onError: (error: ApiError) => {
      console.warn(error?.message);
      payload?.onError && payload.onError(error);
    },
    refetchOnMount:
      payload?.refetchOnMount === undefined || payload.refetchOnMount,
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
    onSuccess: () => payload?.onSuccess && payload?.onSuccess(),
    onError: (err: ApiError) => {
      console.warn(`Could not create the ${apiObject}`, err?.message);
      return payload?.onError && payload?.onError(err);
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
    onSuccess: () => payload?.onSuccess && payload?.onSuccess(),
    onError: (err: ApiError) => {
      console.warn(`Could not update the ${apiObject}`, err?.message);
      return payload?.onError && payload?.onError(err);
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
    onSuccess: () => payload?.onSuccess && payload?.onSuccess(),
    onError: (err: ApiError) => {
      console.warn(`Could not delete the ${apiObject}`, err?.message);
      return payload?.onError && payload?.onError(err);
    },
  });

export { useGetAll, useSave, useUpdate, useDelete };
