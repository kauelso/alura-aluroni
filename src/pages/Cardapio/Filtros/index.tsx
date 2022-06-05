import filtros from "./filtros.json"
import styles from "./Filtros.module.scss";

interface IOpcao{
    id: number;
    label: string;
}

export default function Filtros(){

    function selecionarFiltro(opcao: IOpcao){

    }

    return <div className={styles.filtros}>
        {filtros.map((opcao) => (
            <button key={opcao.id} onClick={()=> selecionarFiltro(opcao)} className={styles.filtros__filtro}>
                {opcao.label}
            </button>
        ))}
    </div>;
}