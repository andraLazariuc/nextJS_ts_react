import useSWR from 'swr';
import fetcher from '@/lib/fetch';

export function useContract(id: string) {
  const { data } = useSWR(`/api/contract/${id}`, fetcher, { revalidateOnFocus: false });

  return data;
}

export function useContracts() {
  const { data } = useSWR(`/api/contracts`, fetcher, { revalidateOnFocus: false });

  return data;
}