import { useNavigation } from '@react-navigation/native';
import { RequestContext } from '../../contexts/RequestContext';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useAppDispatch } from '../../redux';
import { listCountrysRequest } from '../../redux/listCountrys/listCountrys.action';
import { resetGetListCountrysRequest } from '../../redux/listCountrys/listCountrys.store';

export const useInitialScreenViewModel = () => {

    const dispatch = useAppDispatch();
    const { handlerReducer } = useContext(RequestContext)
    const GetListCountrysRequestReducer = useSelector((state: RootState) => state.getListCountrysRequest);
    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation<any>();

    const goConverter = () => {
        console.log("Log")
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
                console.log(response)
                setLoading(true)
                dispatch(resetGetListCountrysRequest());
            },
            (statusCode, errorMessage) => {
                console.log(errorMessage)
                setLoading(true)
                dispatch(resetGetListCountrysRequest());
            }, () => { }, false
        );
    }, [GetListCountrysRequestReducer]);

    return {
        goConverter,
        getList,
        loading
    };
};