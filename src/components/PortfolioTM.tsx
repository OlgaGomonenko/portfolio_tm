import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InfoTm from "./InfoTm";
import axios from "axios";
import { IInfoTm } from "../interfaces/IInfoTm";
import SkeletonPortfolio from "./SkeletonPortfolio";;

function PortfolioTM() {

    const location = useLocation();
    const [tmInfo, setTmInfo] = useState<IInfoTm | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [linkAll, setLinkAll] = useState<boolean>(false);
  

    useEffect(() => {
        const pathArr = location.pathname.split("/");
        const tmId = pathArr[pathArr.length-1];
            if (tmId !== 'tm_all') {
                setLinkAll(true);
            }
        axios.get('custom_web_template.html?object_code=get_TM_profile', {
            params: {
                id_tm: tmId,
            }
        })
        .then ((result) => {
            setTmInfo (result.data);
            setLoading(false);
        })
        .catch(console.log);
    }, [location.pathname]);


    return (
        <>
        {loading && linkAll &&
            <SkeletonPortfolio />
        }
        {tmInfo && (
            <InfoTm 
                    key={tmInfo.tmId}
                    tmFullName={tmInfo.tmFullName}
                    tmId={tmInfo.tmId}
                    tmPosition={tmInfo.tmPosition}
                    tmSubdivision={tmInfo.tmSubdivision}
                    tmDepertamentName={tmInfo.tmDepertamentName}
                    fototmId={tmInfo.fototmId}
                    stagetmComment={tmInfo.stagetmComment}
                    arrAwardstmSplit={tmInfo.arrAwardstmSplit}
                    arrExperttmSplit={tmInfo.arrExperttmSplit}
                    arrCompetenstmSplit={tmInfo.arrCompetenstmSplit}
                    arrHonortmSplit={tmInfo.arrHonortmSplit}
                    citatetmComment={tmInfo.citatetmComment} 
                    tmSubdivisionId={tmInfo.tmSubdivisionId} 
                    tmDepertamentId={tmInfo.tmDepertamentId}            />
        )}
        </>
    )
}
  
export default PortfolioTM;
