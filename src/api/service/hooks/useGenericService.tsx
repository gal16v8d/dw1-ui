/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from 'react-query';
import ApiData from '../../model/types/ApiData.types';
import GenericService from '../GenericService';

const useGetAll = (
  queryKey: string,
  service: GenericService,
  payload?: {
    onSuccess?: (response: ApiData[]) => void;
    onError?: (error: any) => void;
    enabled?: boolean;
    cacheTime?: number;
    refetchOnMount?: boolean;
  }
): UseQueryResult<ApiData[]> => {
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      return await service.getAll();
    },
    cacheTime: payload?.cacheTime ?? undefined,
    enabled: payload?.enabled === undefined || payload?.enabled,
    onSuccess: (response: ApiData[]) => {
      payload?.onSuccess && payload.onSuccess(response);
    },
    onError: (error: any) => {
      console.log(error?.response);
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
  string,
  any,
  {
    data: ApiData;
  },
  unknown
> => {
  return useMutation(({ data }: { data: ApiData }) => service.save(data), {
    onError: (err: any) =>
      console.log(`Could not create the ${apiObject}`, err?.response),
  });
};

const useUpdate = (
  apiObject: string,
  service: GenericService
): UseMutationResult<
  string,
  any,
  {
    id: string;
    data: ApiData;
  },
  unknown
> => {
  return useMutation(
    ({ id, data }: { id: string; data: ApiData }) => service.update(id, data),
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
