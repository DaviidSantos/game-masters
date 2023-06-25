import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export class FetchingError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default function useApi<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => {
    await axios
      .get(url, {
        headers: { "dev-email-address": "daavid.psantos@gmail.com" },
        timeout: 5000,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);

        if (err instanceof AxiosError) {
          if ((err.code = "ECONNABORTED")) {
            setErrorMessage(
              "O servidor demorou para responder, tente mais tarde"
            );
          } else if (
            err.status === 500 ||
            err.status === 502 ||
            err.status === 503 ||
            err.status === 504 ||
            err.status === 507 ||
            err.status === 508 ||
            err.status === 509
          ) {
            setErrorMessage(
              "O servidor fahou em responder, tente recarregar a página"
            );
          } else {
            setErrorMessage(
              "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
            );
          }

          console.log(errorMessage);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, errorMessage };
}
