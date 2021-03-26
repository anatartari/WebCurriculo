import Menina from "../../public/undraw_dev_focus_b9xo.svg";
import Image from "next/image";

export default function Imagem() {
  return (
    <div style={{ marginRight: 80 }}>
      <Image
        src={Menina}
        alt="Imagem da menina no computador"
        width={300}
        height={300}
      />
    </div>
  );
}
