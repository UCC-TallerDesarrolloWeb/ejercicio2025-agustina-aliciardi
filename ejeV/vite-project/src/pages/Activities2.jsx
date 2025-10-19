import "@styles/Activities.scss"

const Activities2 = () => {
    const activities = [
    {
        nombre: "taekwondo",
        descripcion: "Arte marcial coreana",
        horarios: [
        { dia: 2, "hora-inicio": "18:30", "hora-fin": "20:00" },
        { dia: 4, "hora-inicio": "18:30", "hora-fin": "20:00" },
        ]
    },
    {
        nombre: "zumba",
        descripcion: "ritmos latinos",
        horarios: [
        { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
        { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" },
        ]
    },
    {
        nombre: "yoga",
        descripcion: "ritmos latinos",
        horarios: [
        { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
        { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" },
        ]
    },
    {
        nombre: "funcional",
        descripcion: "ritmos latinos",
        horarios: [
        { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
        { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" },
        ]
    }
    ];

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const isLogginIn = localStorage.getItem("isLoggedIn") === "true";

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripto en ${nombreActividad}`);
    }

    return(
        <div className="activities-container">
            {activities.map((activity, index) => (
                <div className="activity-card" key={index}>
                    <h3>{activity.nombre}</h3>
                    <p>{activity.descripcion}</p>
                    <ul>
                        {activity.horarios.map((horario, i) => (
                            <li key={i}> {diasSemana[horario.dia]}: {horario["hora-inicio"]} - {horario["hora-fin"]} </li>
                        ))}
                    </ul>
                    {   isLogginIn && 
                        (<button onClick={() => handleInscribir(activity.nombre)}>
                            Inscribir
                        </button>)
                    }
                    
                </div>
            ))}
        </div>
    )
};

export default Activities2;

