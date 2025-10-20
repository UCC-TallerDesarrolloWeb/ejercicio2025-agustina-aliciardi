import '@styles/Activities.scss';
import { activities } from '../data/activities';
import Card from '../components/Card';

const Activities = () => {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripto en ${nombreActividad}`)
    }

    return (
        <div className="activities-container">
            {activities.map((actividad) => (
                <Card key={actividad.nombre} title={actividad.nombre} subtitle={actividad.descripcion}>
                    <ul>
                        {actividad.horarios.map((horario, i) => (
                            <li key={i}>
                                { diasSemana[horario.dia] }: {horario["hora-inicio"] } - { horario["hora-fin"]}
                            </li>
                        ))}
                    </ul>
                    {
                        isLoggedIn && (
                            <button onClick={() => handleInscribir(actividad.nombre)}>
                                Inscribirse
                            </button>
                        )
                    }
                    
                </Card>
            ))}
        </div>
    )

}

export default Activities;