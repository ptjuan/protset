import { DataHandler } from '@/app/utils/DataHandler';
import {createContext, useState, useEffect} from 'react';

export const PamContext = createContext({});

export function PamContextProvider () {

    const [rInfo, setrInfo] = useState({});
    const [rNtrans, setrNtrans] = useState();
    const [rTrans, setrTrans] = useState();
    const [rservice,setrService] = useState();
    const [rfeedback, setRFeedback] = useState();

   useEffect(()  => {
        const reqI = DataHandler(1);
        console.log(reqI);
   })

}


