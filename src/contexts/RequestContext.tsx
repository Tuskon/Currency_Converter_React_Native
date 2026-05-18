import React, { createContext, useEffect, useState } from "react";
import { StatusRequestEnum } from "@models/requests-props";

interface RequestContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handlerReducer: (
    reducer: any,
    onSuccess?: (response: any) => void,
    onError?: (statusCode: number, errorMessage: any) => void,
    onLoading?: () => void,
    hasLoading?: boolean
  ) => void;
}

export const RequestContext = createContext<RequestContextProps>({
  loading: false,
  setLoading: () => false,
  handlerReducer: () => null
});

export const RequestContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }, [loading])

  const handlerReducer = (reducer: any, onSuccess = (response: any) => { }, onError = (statusCode: number, errorMessage: string) => { }, onLoading = () => { }, hasLoading: boolean = true) => {
    if (reducer.requestStates === StatusRequestEnum.pending) {
      if (hasLoading) {
        setLoading(true);
      }
      onLoading();
    }
    if (reducer.requestStates === StatusRequestEnum.success) {
      onSuccess(reducer.response)
      setLoading(false);
    }
    if (reducer.requestStates === StatusRequestEnum.error) {
      onError(reducer.statusCode , reducer.errorMessage);
      setLoading(false);
    }
  }

  return (
    <RequestContext.Provider
      value={{ loading, setLoading, handlerReducer }}>
      {children}
    </RequestContext.Provider>
  )
}