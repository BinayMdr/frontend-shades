import { useState } from 'react';
import { useEffect } from 'react';

type DataItem = { id: number; /* define your data structure */ };

const useApi = (url: string) => {

  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData(); 
  }, []); 

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData: DataItem[] = await response.json();
      setData(responseData);
      setError(null);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const createData = async (newData: any) => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error('Failed to create data');
      }
      await fetchData();
    } catch (error) {
      setError(error as Error);
    }
  };

  return { data, error,isLoading, fetchData, createData};
};

export default useApi;
