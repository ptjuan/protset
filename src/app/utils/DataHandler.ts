
export const DataHandler = async(id: any, sect: any) => {

switch (sect) {
    case 'informative':
        const registryI = await fetch(`http://localhost:3000/api/informative/${id}`);
        const dataI = await registryI.json();
        return dataI;
        break;

    case 'nTransactional':
        const registryNT = await fetch(`http://localhost:3000/api/nonmtts/${id}`);
        const dataNT = await registryNT.json();
        return dataNT;

    case 'mTransactional': 
        const registryMT = await fetch(`http://localhost:3000/api/mtts/${id}`);
        const dataMT = await registryMT.json();
        return dataMT;

    case 'Service': 
        const registryS = await fetch(`http://localhost:3000/api/cservice/${id}`);
        const dataS = await registryS.json();
        return dataS;

    case 'Feedback': 
        const registryF = await fetch(`http://localhost:3000/api/feedback/${id}`); 
        const dataF = await registryF.json();
        return dataF;
        break;

    default:
      
    
}




}