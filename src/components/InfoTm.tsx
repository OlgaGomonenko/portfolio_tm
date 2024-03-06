import { Link} from "react-router-dom";
import { IInfoTm } from "../interfaces/IInfoTm";
import { useEffect, useRef, useState } from "react";

function InfoTm(props:IInfoTm) {

    const [showFullPhoto, setShowFullPhoto] = useState<boolean>(false);
    const photoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (photoRef.current && !photoRef.current.contains(event.target as Node)) {
                setShowFullPhoto(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handlePhotoClick = () => {
        setShowFullPhoto(!showFullPhoto);
    };

    return (
        <>
       <div className="block_for_title">
    <Link to={`/_wt/tm_all`}>
    <div className="btn_back">
        <svg id="btn_back" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" transform="matrix(-1 0 0 1 24 0)" fill="#EBEBEB"/>
            <path d="M13 8L9 12.5L13 17" stroke="#9E9E9E" stroke-linecap="round"/>
        </svg>
    </div>
    </Link>
    <div className="title_eqvatoria">{props.tmFullName}</div>
</div>

<div className="block_for_info">
    <div className="block_for_foto" onClick={handlePhotoClick}>
        <img className="foto_tm" src={`/download_file.html?file_id=${props.fototmId}`} alt="" />
        {showFullPhoto && (
                        <div className="full_photo">
                            <img src={`/download_file.html?file_id=${props.fototmId}`} alt="" />
                        </div>
                    )}
    </div>
    <div className="info_tm">

        <div className="all_info">
            <div className="title_info_TM">Общая информация</div>
            <div className="text_all_info">
                <div className="title_info_gray">Должность:</div>
                <div className="info_tm">{props.tmPosition}</div>
                <div className="title_info_gray">Подразделение:</div>
                <div className="info_tm"> <a href={`https://eqvatoria.bistrodengi.ru/_wt/${props.tmSubdivisionId}`} id="link_departament" target="_blank" rel="noreferrer">{props.tmSubdivision}</a></div>
                <div className="title_info_gray">Департамент:</div>
                <div className="info_tm"> <a href={`https://eqvatoria.bistrodengi.ru/_wt/${props.tmDepertamentId}`} id="link_departament" target="_blank" rel="noreferrer">{props.tmDepertamentName}</a></div>
                <div className="title_info_gray">Стаж тренера:</div>
                <div className="info_tm">{props.stagetmComment}</div>
            </div>
        </div>
        <div className="all_awards">
            <div className="title_info_TM">Профессиональные регалии</div>
            <div className="text_all_awards">
                <ul className="punkts_tm">
                        {Array.isArray(props.arrAwardstmSplit) ? (
                            props.arrAwardstmSplit.length > 0 ? (
                        // Если массив не пустой, выводим элементы в теги <li>
                                props.arrAwardstmSplit.map((award) => (
                                    <li key={award}>{award}</li>
                                ))
                            ) : (
                        // Если массив пустой, не выводим элементы
                                <li> </li>
                    )
                ) : (
                    // Если props.arrAwardstmSplit не является массивом, выводим его в тег <li>
                    <li>{props.arrAwardstmSplit}</li>
                )}
                </ul>
            </div>
        </div>

        <div className="all_awards">
            <div className="title_info_TM">Экспертиза</div>
            <div className="text_all_awards">
                <ul className="punkts_tm">
                   
                    {Array.isArray(props.arrExperttmSplit) ? (
                            props.arrExperttmSplit.length > 0 ? (
                        // Если массив не пустой, выводим элементы в теги <li>
                                props.arrExperttmSplit.map((expertize) => (
                                    <li key={expertize}>{expertize}</li>
                                ))
                            ) : (
                        // Если массив пустой, не выводим элементы
                                <li> </li>
                    )
                ) : (
                    // Если props.arrAwardstmSplit не является массивом, выводим его в тег <li>
                    <li>{props.arrExperttmSplit}</li>
                )}

                </ul>
            </div>
        </div>

        <div className="all_awards">
            <div className="title_info_TM">Ключевые компетенции</div>
            <div className="text_all_awards">
                <ul className="punkts_tm">
                    {Array.isArray(props.arrCompetenstmSplit) ? (
                            props.arrCompetenstmSplit.length > 0 ? (
                        // Если массив не пустой, выводим элементы в теги <li>
                                props.arrCompetenstmSplit.map((competence) => (
                                    <li key={competence}>{competence}</li>
                                ))
                            ) : (
                        // Если массив пустой, не выводим элементы
                                <li> </li>
                    )
                ) : (
                    // Если props.arrAwardstmSplit не является массивом, выводим его в тег <li>
                    <li>{props.arrCompetenstmSplit}</li>
                )}
                </ul>
            </div>
        </div>

        <div className="all_awards">
            <div className="title_info_TM">Поводы для гордости</div>
            <div className="text_all_awards">
                <ul className="punkts_tm">
                    {Array.isArray(props.arrHonortmSplit) ? (
                            props.arrHonortmSplit.length > 0 ? (
                        // Если массив не пустой, выводим элементы в теги <li>
                                props.arrHonortmSplit.map((honor) => (
                                    <li key={honor}>{honor}</li>
                                ))
                            ) : (
                        // Если массив пустой, не выводим элементы
                                <li> </li>
                    )
                ) : (
                    // Если props.arrAwardstmSplit не является массивом, выводим его в тег <li>
                    <li>{props.arrHonortmSplit}</li>
                )}
                </ul>
            </div>
        </div>

        <div className="all_awards">
            <div className="title_info_TM">Любимая цитата</div>
            <div className="text_all_awards">
               <div className="text_info_tm">{props.citatetmComment}</div>
            </div>
        </div>


    </div>
</div>
        </>
    )
  }
  
  export default InfoTm;