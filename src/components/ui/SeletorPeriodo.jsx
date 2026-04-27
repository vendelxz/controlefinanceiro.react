import { MESES, ANOS } from "../../utils/filtroDados";

export function SeletorPeriodo({ mes, ano, onMesChange, onAnoChange }) {
    return (
        <div className="seletor-periodo">
            <select
                className="card-select"
                value={mes}
                onChange={e => onMesChange(Number(e.target.value))}
            >
                {MESES.map(m => (
                    <option key={m.valor} value={m.valor}>{m.label}</option>
                ))}
            </select>

            <select
                className="card-select"
                value={ano}
                onChange={e => onAnoChange(Number(e.target.value))}
            >
                {ANOS.map(a => (
                    <option key={a} value={a}>{a}</option>
                ))}
            </select>
        </div>
    );
}