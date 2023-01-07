/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiData from 'api/model/mongo/types/ApiData.types';
import ApiError from 'api/model/responses/ApiError';
import GenericService from 'api/service/GenericService';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from 'react-query';

const useGetAll = (
  queryKey: string,
  service: GenericService,
  expanded?: boolean,
  payload?: {
    onSuccess?: (response: ApiData[]) => void;
    onError?: (error: ApiError) => void;
    enabled?: boolean;
    cacheTime?: number;
    refetchOnMount?: boolean;
  }
): UseQueryResult<ApiData[]> => {
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      return await service.getAll(expanded);
    },
    cacheTime: payload?.cacheTime ?? undefined,
    enabled: payload?.enabled === undefined || payload?.enabled,
    onSuccess: (response: ApiData[]) => {
      payload?.onSuccess && payload.onSuccess(response);
    },
    onError: (error: ApiError) => {
      console.log(error?.message);
      payload?.onError && payload.onError(error);
    },
    refetchOnMount:
      payload?.refetchOnMount === undefined || payload.refetchOnMount,
  });
};

const useSave = (
  apiObject: string,
  service: GenericService
): UseMutationResult<
  void,
  ApiError,
  {
    data: unknown;
  },
  unknown
> => {
  return useMutation(({ data }: { data: unknown }) => service.save(data), {
    onError: (err: ApiError) =>
      console.log(`Could not create the ${apiObject}`, err?.message),
  });
};

const useUpdate = (
  apiObject: string,
  service: GenericService
): UseMutationResult<
  unknown,
  ApiError,
  {
    id: string;
    data: unknown;
  },
  unknown
> => {
  return useMutation(
    ({ id, data }: { id: string; data: unknown }) => service.update(id, data),
    {
      onError: (err: ApiError) =>
        console.log(`Could not update the ${apiObject}`, err?.message),
    }
  );
};

const useDelete = (
  apiObject: string,
  service: GenericService
): UseMutationResult<
  void,
  ApiError,
  {
    id: string;
  },
  unknown
> => {
  return useMutation(({ id }: { id: string }) => service.delete(id), {
    onError: (err: ApiError) =>
      console.log(`Could not delete the ${apiObject}`, err?.message),
  });
};

export { useGetAll, useSave, useUpdate, useDelete };
