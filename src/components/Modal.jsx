import './css/Modal.css';

export function Modal({ isOpen, onClose, titulo, children }) {
  if (!isOpen) return null; // Se não estiver aberto, não renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button onClick={onClose} className="btn-fechar">&times;</button>
        </div>
        <div className="modal-body">
          {children} {/* Aqui entra o formulário ou a mensagem de erro */}
        </div>
      </div>
    </div>
  );
}