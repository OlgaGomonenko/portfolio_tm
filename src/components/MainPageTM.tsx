import CardTM from "./CardTM";
import { IMainPageTM } from "../interfaces/IMainPageTM";
import { useEffect, useState, useRef } from "react";

function MainPageTM(props: IMainPageTM) {
  const [visibleCards, setVisibleCards] = useState(3);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
 
     <>
     {props.loading === false &&
      <div>
      <div className="title_eqvatoria">Тренеры Eqvanta</div>
      <div className="hello_text">
      Это корпоративные наставники, которые помогают в развитии сотрудников, руководителей и новичков. 
      <br/>Обучение может быть по продуктам компании или по «мягким навыкам» (soft skills).
      <br/>Чтобы узнать больше о тренере, нажимай на карточку и изучай скорее!
      </div>
      </div>
    }

      <div className="block_for_cards_tm">
        {props.arrTms.slice(0, visibleCards).map((tm, index) => (
          <CardTM
            key={tm.tmId}
            tmFullName={tm.tmFullName}
            tmId={tm.tmId}
            tmPosition={tm.tmPosition}
            tmSubdivision={tm.tmSubdivision}
            tmDepertamentName={tm.tmDepertamentName}
            fototmId={tm.fototmId}
            stagetmComment={tm.stagetmComment}
            arrAwardstmSplit={tm.arrAwardstmSplit}
            arrExperttmSplit={tm.arrExperttmSplit}
            arrCompetenstmSplit={tm.arrCompetenstmSplit}
            arrHonortmSplit={tm.arrHonortmSplit}
            citatetmComment={tm.citatetmComment}
            index={index}
          />
        ))}
      </div>
      <div ref={sentinelRef}></div>
      </>
        
        
  );
        
}

export default MainPageTM;
