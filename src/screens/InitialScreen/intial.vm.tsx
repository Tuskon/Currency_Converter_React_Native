import { useNavigation } from '@react-navigation/native';
import { RequestContext } from '@contexts/RequestContext';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';
import { useAppDispatch } from '@redux';
import { listCountrysRequest } from '@redux/listCountrys/listCountrys.action';
import { resetGetListCountrysRequest } from '@redux/listCountrys/listCountrys.store';
import { ListCountryInteface } from '@redux/listCountrys/models/listCountrys.models';

export const useInitialScreenViewModel = () => {

    const dispatch = useAppDispatch();
    const { handlerReducer } = useContext(RequestContext)
    const GetListCountrysRequestReducer = useSelector((state: RootState) => state.getListCountrysRequest);
    const [listCountrys,setListCountrys] = useState<ListCountryInteface[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation<any>();

    const goConverter = () => {
        navigation.navigate("ConverterScreen")
    }

    const getList = () => {
        dispatch(listCountrysRequest({}))
        setLoading(true)
    }

    useEffect(() => {
        handlerReducer(
            GetListCountrysRequestReducer,
            (response) => {
                setListCountrys(response)
                setLoading(false)
                dispatch(resetGetListCountrysRequest());
            },
            (statusCode, errorMessage) => {
                setLoading(false)
                dispatch(resetGetListCountrysRequest());
            }, () => { }, false
        );
    }, [GetListCountrysRequestReducer]);

    return {
        goConverter,
        getList,
        loading,
        listCountrys
    };
};