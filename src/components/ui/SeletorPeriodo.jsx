import { MESES, ANOS } from "../../utils/filtroDados";
import {usePeriodo} from '../../contexts/PeriodoContext'

export default function SeletorPeriodo() {

    const {mes, setMes, ano, setAno} = usePeriodo();

    return (
       <div className="seletor-periodo">
            <select
                className="card-select"
                value={mes}
                onChange={e => setMes(Number(e.target.value))}
            >
                {MESES.map(m => (
                    <option key={m.valor} value={m.valor}>{m.label}</option>
                ))}
            </select>

            <select
                className="card-select"
                value={ano}
                onChange={e => setAno(Number(e.target.value))}
            >
                {ANOS.map(a => (
                    <option key={a} value={a}>{a}</option>
                ))}
            </select>
        </div>
    );
}