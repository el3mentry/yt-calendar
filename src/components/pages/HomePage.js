import { DATERANGEPAGE } from "../../variables";

export default function HomePage({ setPage }) {
    return <div onClick={() => setPage(DATERANGEPAGE)}>This is Homepage.</div>
}