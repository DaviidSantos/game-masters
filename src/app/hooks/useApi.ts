import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    await axios
      .get(url, {
        headers: { "dev-email-address": "daavid.psantos@gmail.com" },
        timeout: 1000 * 5,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
}
