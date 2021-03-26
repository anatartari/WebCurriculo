import Menina from "../../public/undraw_dev_focus_b9xo.svg";
import Image from "next/image";
import style from "./style.module.css";

export default function Imagem() {
  return (
    <div>
      <Image
        id={style.imagem}
        src={Menina}
        alt="Imagem da menina no computador"
        width={250}
        height={250}
      />
    </div>
  );
}
