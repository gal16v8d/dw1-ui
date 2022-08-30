/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiData from 'api/model/mongo/types/ApiData.types';
import ApiDataRequest from 'api/model/requests/types/ApiDataRequest.types';
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
  lvl?: number,
  payload?: {
    onSuccess?: (response: ApiData[]) => void;
    onError?: (error: { message: string }) => void;
    enabled?: boolean;
    cacheTime?: number;
    refetchOnMount?: boolean;
  }
): UseQueryResult<ApiData[]> => {
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      return await service.getAll(lvl);
    },
    cacheTime: payload?.cacheTime ?? undefined,
    enabled: payload?.enabled === undefined || payload?.enabled,
    onSuccess: (response: ApiData[]) => {
      payload?.onSuccess && payload.onSuccess(response);
    },
    onError: (error: { message: string }) => {
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
  { message: string },
  any,
  {
    data: ApiDataRequest;
  },
  unknown
> => {
  return useMutation(
    ({ data }: { data: ApiDataRequest }) => service.save(data),
    {
      onError: (err: any) =>
        console.log(`Could not create the ${apiObject}`, err?.response),
    }
  );
};

const useUpdate = (
  apiObject: string,
  service: GenericService
): UseMutationResult<
  { message: string },
  any,
  {
    id: string;
    data: ApiDataRequest;
  },
  unknown
> => {
  return useMutation(
    ({ id, data }: { id: string; data: ApiDataRequest }) =>
      service.update(id, data),
    {
      onError: (err: any) =>
        console.log(`Could not update the ${apiObject}`, err?.response),
    }
  );
};

const useDelete = (
  apiObject: string,
  service: GenericService
): UseMutationResult<
  void,
  any,
  {
    id: string;
  },
  unknown
> => {
  return useMutation(({ id }: { id: string }) => service.delete(id), {
    onError: (err: any) =>
      console.log(`Could not delete the ${apiObject}`, err?.response),
  });
};

export { useGetAll, useSave, useUpdate, useDelete };
