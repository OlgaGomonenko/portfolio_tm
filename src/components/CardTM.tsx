import { Link } from "react-router-dom";
import { ICardTM } from "../interfaces/ICardTM";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";


function CardTM(props: ICardTM) {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [isVisible, controls]);

  const isVisibleInitially = props.index < 3; // Проверяем, является ли текущая карточка одной из первых трех

  useEffect(() => {
    if (isVisibleInitially) {
      setIsVisible(true); // Если карточка одна из первых трех, показываем ее сразу
    } else {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true); // Показываем карточку, если пользователь проскроллил на определенную высоту
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isVisibleInitially]);

  return (
    <Link to={`/_wt/tm_all/${props.tmId}`}>
      <motion.div
        className="block_card_tm"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        <div className="foto_tm">
          <img
            className="img_foto_tm"
            src={`/download_file.html?file_id=${props.fototmId}`}
            alt=""
          />
        </div>
        <div className="block_info_tm">
          <div className="text_info_tm">
            <div className="tm_name">{props.tmFullName}</div>
            <div className="tm_stage">
              Тренерский стаж <span>{props.stagetmComment}</span>
            </div>
            {props.index <= 2 &&
            <div className="tm_position_ruk">{props.tmPosition}</div>
            }
            {props.index > 2 &&
            <div className="tm_position">{props.tmPosition}</div>
            }
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default CardTM;
