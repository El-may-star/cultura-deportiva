/* ========== Datos de los quizzes ========== */
/*
Estructura:
quizzes = {
  "futbol": {
     "5-10": { questions:[{q,options,answer,explain}, ...], qCount:4 },
     "11-16": {...}, ...
  }, ...
}
*/
const quizzes = {
  futbol: {
    "5-10": {
      qCount: 4,
      questions: [
        { q: "¿Cuántos jugadores tiene un equipo en el fútbol?", options: ["9","10","11","12"], answer: 2,
          explain: "Un equipo de fútbol está formado por 11 jugadores en cancha (incluye al arquero)." },
        { q: "¿Qué se intenta hacer en el fútbol?", options: ["Encestar","Marcar goles","Atrapar la pelota","Saltar la red"], answer: 1,
          explain: "En fútbol el objetivo es meter el balón en la portería rival: marcar goles." },
        { q: "¿Cuál de estas partes NO se usa para tocar el balón en fútbol (jugadores de campo)?", options: ["Pie","Cabeza","Mano","Muslo"], answer: 2,
          explain: "Excepto el arquero, los jugadores de campo no pueden usar las manos." },
        { q: "¿Dónde se juega el fútbol normalmente?", options: ["Piscina","Cancha de tierra o césped","Pista de atletismo","Gimnasio"], answer: 1,
          explain: "El fútbol se juega en una cancha, comúnmente de césped o sintética." }
      ]
    },
    "11-16": {
      qCount: 6,
      questions: [
        { q: "¿Cuánto dura un partido profesional (minutos)?", options:["60","80","90","120"], answer:2,
          explain:"Un partido profesional suele durar 90 minutos (dos tiempos de 45 minutos)." },
        { q: "¿Qué hace el árbitro principal?", options:["Marcar goles","Dirigir el partido","Tirar la pelota","Entrenar"], answer:1,
          explain:"El árbitro dirige el partido y aplica las reglas." },
        { q: "¿Qué es fuera de juego?", options:["Cuando no hay juez","Una falta","Una infracción de posición","Un pase"], answer:2,
          explain:"Fuera de juego es una infracción sobre la posición del jugador al recibir el balón." },
        { q: "¿Quién puede usar las manos dentro del área?", options:["Cualquier jugador","El arquero","El entrenador","El árbitro"], answer:1,
          explain:"Solo el arquero puede manipular el balón con las manos dentro de su área." },
        { q: "¿Qué significa 'tarjeta roja'?", options:["Fin del partido","Amarilla secundaria","Expulsión","Cambio inmediato"], answer:2,
          explain:"Tarjeta roja significa expulsión del jugador." },
        { q: "¿Cuál es la función de los defensas?", options:["Marcar goles","Proteger la portería","Dirigir el equipo","Sustituir al arquero"], answer:1,
          explain:"Los defensas se ocupan de proteger su área y evitar goles rivales." }
      ]
    },
    "17+": {
      qCount: 8,
      questions: [
        { q: "¿Qué es un penalti?", options:["Saque de esquina","Tiro directo desde 11 m","Saque lateral","Cambio de jugadores"], answer:1,
          explain:"Un penalti es un tiro directo desde los 11 metros por una falta dentro del área." },
        { q: "¿Qué es el fuera de juego?", options:["Falta de respeto","Infracción posicional","Gol válido","Saque de banda"], answer:1,
          explain:"Es una infracción por la posición de un atacante cuando recibe el balón." },
        { q: "¿Cuántos árbitros hay en un partido profesional normal?", options:["1","2","3","4"], answer:2,
          explain:"Suelen ser 3 árbitros principales: uno central y dos asistentes (más cuarto árbitro en torneos grandes)." },
        { q: "¿Qué es la tarjeta amarilla?", options:["Advertencia","Expulsión","Gol","Saque"], answer:0,
          explain:"La tarjeta amarilla es una amonestación; acumulando dos puede ser expulsión." },
        { q: "¿Qué posición tiene como misión marcar goles?", options:["Defensa","Mediocampista","Delantero","Portero"], answer:2,
          explain:"Los delanteros están enfocados en atacar y marcar goles." },
        { q: "¿Qué es entrenador?", options:["Jugador suplente","Director técnico","Árbitro","Fanático"], answer:1,
          explain:"El entrenador o director técnico organiza entrenamientos y estrategias." },
        { q: "¿Qué es un córner?", options:["Saque de esquina","Expulsión","Falta","Saque neutral"], answer:0,
          explain:"El córner o saque de esquina se concede cuando el balón sale por la línea de fondo y fue tocado por el defensor." },
        { q: "¿Cuál es la distancia en metros del punto de penalti al arco?", options:["9 m","10 m","11 m","12 m"], answer:2,
          explain:"El punto penal está a 11 metros del arco." }
      ]
    }
  },

  baloncesto: {
    "5-10": {
      qCount: 4,
      questions: [
        { q: "¿Cuántos jugadores hay en cancha por equipo en baloncesto normal?", options:["3","5","7","11"], answer:1,
          explain:"En baloncesto se juegan 5 jugadores por equipo en cancha." },
        { q: "¿Cómo se anotan puntos más comúnmente?", options:["Pateando","Encestando en el aro","Tirando a puerta","Golpeando el balón"], answer:1,
          explain:"Se anotan puntos encestando el balón en el aro." },
        { q: "¿Qué objeto es imprescindible en baloncesto?", options:["Raqueta","Bate","Balón","Palo"], answer:2,
          explain:"El balón es el objeto fundamental del juego." },
        { q: "¿Dónde está el aro?", options:["En el suelo","A la altura de la cabeza","Colgado en un tablero","En la pared"], answer:2,
          explain:"El aro está colgado en un tablero a cierta altura para encestar." }
      ]
    },
    "11-16": {
      qCount: 6,
      questions: [
        { q: "¿Cuánto dura un cuarto profesional (aprox)?", options:["8 min","10 min","12 min","15 min"], answer:2,
          explain:"En la NBA cada cuarto dura 12 minutos (otras ligas pueden variar)." },
        { q: "¿Qué es un triple?", options:["3 puntos","3 faltas","3 jugadores","3 tiempos"], answer:0,
          explain:"Un triple es una canasta desde fuera de la línea de tres puntos y vale 3 puntos." },
        { q: "¿Qué es rebote?", options:["Pasar el balón","Recoger una pelota fallada","Sacar de fondo","Saltar"], answer:1,
          explain:"El rebote ocurre cuando un jugador recupera el balón tras un intento fallido." },
        { q: "¿Cuántos puntos vale una canasta normal?", options:["1","2","3","4"], answer:1,
          explain:"Una canasta dentro de la línea de triple normalmente vale 2 puntos." },
        { q: "¿Qué jugador suele encestar más desde lejos?", options:["Base","Ala","Pivot","Escolta"], answer:3,
          explain:"El escolta o tirador suele lanzar desde media y larga distancia." },
        { q: "¿Qué es falta personal?", options:["Regla de equipo","Contacto prohibido","Cambio de balón","Tipo de pase"], answer:1,
          explain:"La falta personal es una infracción por contacto ilegal con un oponente." }
      ]
    },
    "17+": {
      qCount: 8,
      questions: [
        { q: "¿Cuántos tiempos tiene un partido NBA?", options:["2","3","4","5"], answer:2,
          explain:"Un partido tiene cuatro cuartos (tiempos)." },
        { q: "¿Qué ocurre en tiempo extra?", options:["Partido vuelve a inicio","Se añade tiempo por empate","Se anulan puntos","Se cambia cancha"], answer:1,
          explain:"Se juega tiempo extra cuando el partido termina empatado para definir un ganador." },
        { q: "¿Qué es una asistencia?", options:["Encestar solo","Pase que lleva a canasta","Falta intencional","Tipo de defensa"], answer:1,
          explain:"Una asistencia es el pase que conduce directamente a la canasta." },
        { q: "¿Qué es driblear?", options:["Saltar","Correr sin balón","Botar el balón mientras te mueves","Sacar de banda"], answer:2,
          explain:"Driblear es botar el balón con el fin de avanzar o crear jugadas." },
        { q: "¿Qué es un mate?", options:["Pasar alto","Encestar violentamente cerca del aro","Sacar del banco","Tipo de defensa"], answer:1,
          explain:"Un mate es una encestada en la que el jugador introduce el balón con fuerza sobre el aro." },
        { q: "¿Qué es zona defensiva?", options:["Lugar del tercer cuarto","Un sistema de defensa por zonas","Tipo de falta","Regla para suplentes"], answer:1,
          explain:"Es una defensa en la que cada jugador cubre una zona del campo, no a un atacante concreto." },
        { q: "¿Cuántos segundos para pasar la mitad de cancha en algunas reglas?", options:["5","8","10","24"], answer:1,
          explain:"En varias categorías hay un tiempo límite para cruzar la mitad de cancha (p.ej. 8s o 10s según la liga)." },
        { q: "¿Qué es violation 24s?", options:["Falta","No lanzar en 24s","Saque de esquina","Tipo de pase"], answer:1,
          explain:"Violation 24s ocurre cuando el equipo ofensivo no tira a canasta dentro del reloj de 24 segundos." }
      ]
    }
  },

  voleibol: {
    "5-10": {
      qCount: 4,
      questions: [
        { q: "¿Cuántos jugadores por equipo en voleibol tradicional?", options:["4","5","6","8"], answer:2,
          explain:"El voleibol se juega con 6 jugadores por equipo." },
        { q: "¿Qué no debe tocar la pelota?", options:["La red","El piso en tu campo","El aire","Las manos"], answer:1,
          explain:"El balón no debe tocar el piso del campo propio para mantener el punto." },
        { q: "¿Con qué manos pasas la pelota en voleibol generalmente?", options:["Pie","Cabeza","Manos","Codo"], answer:2,
          explain:"Se usan las manos (brazos) para pasar y lanzar el balón." },
        { q: "¿Cómo ganas un punto?", options:["Marcando más goles","Si pasa al otro lado y no lo devuelven","Encestando","Tocando la red"], answer:1,
          explain:"Se gana un punto si el equipo contrario no devuelve la pelota antes de que toque el piso o cometa faltas." }
      ]
    },
    "11-16": {
      qCount: 6,
      questions: [
        { q: "¿Qué es un saque?", options:["Inicio de punto","Fin del partido","Tipo de falta","Silla del juez"], answer:0,
          explain:"El saque es la acción que inicia el punto enviando la pelota al campo contrario." },
        { q: "¿Cuántos toques por equipo están permitidos antes de pasar al otro lado?", options:["1","2","3","4"], answer:2,
          explain:"Se permiten hasta 3 toques antes de enviar la pelota al otro lado." },
        { q: "¿Qué es bloqueo?", options:["Saltar para impedir un remate","Sugerencia técnica","Tiempo muerto","Cambio de jugador"], answer:0,
          explain:"El bloqueo es saltar cerca de la red para detener o desviar el remate rival." },
        { q: "¿Qué es rotación?", options:["Cambiar balón","Mover jugadores de posición","Regla de faltas","Contar puntos"], answer:1,
          explain:"Rotación es el movimiento de posiciones de los jugadores al recuperar el saque." },
        { q: "¿Qué parte no se debe tocar en el saque?", options:["El balón","La red","El árbitro","La red y la línea de saque"], answer:3,
          explain:"Incumplir líneas o tocar la red en el saque es falta." },
        { q: "¿Qué es remate (spike)?", options:["Saque corto","Un golpe fuerte hacia abajo","Sustitución","Falta"], answer:1,
          explain:"Remate es un ataque potente hacia el campo rival." }
      ]
    },
    "17+": {
      qCount: 8,
      questions: [
        { q: "¿Cuántos sets suele tener un partido profesional?", options:["3","5","7","1"], answer:1,
          explain:"Suele jugarse al mejor de 5 sets (primero en 3 o 5 según la competición)." },
        { q: "¿Qué es el libero?", options:["Jugador que defiende mucho","Árbitro","Entrenador","Sustituto del balón"], answer:0,
          explain:"El líbero es un especialista defensivo que usa uniforme distinto y tiene reglas de cambio." },
        { q: "¿Qué es toques limitados?", options:["1 por jugador","2 por equipo","3 por equipo","No hay límite"], answer:2,
          explain:"Existen hasta 3 toques por equipo antes de pasar el balón." },
        { q: "¿Qué significa punto de set?", options:["Empieza el set","Punto que decide el set","Saque especial","Descanso"], answer:1,
          explain:"Es el punto que, si se gana, decide el set (p. ej. 25º punto en set a 25)." },
        { q: "¿Qué es saque flotante?", options:["Saque sin efecto","Saque con mucho efecto","Saque imposible","Saque de costado"], answer:0,
          explain:"Saque flotante es un servicio con poco efecto que dificulta la recepción." },
        { q: "¿Qué se prohíbe tocar en la red?", options:["El balón","La red","La pista","El árbitro"], answer:1,
          explain:"Tocar la red con el cuerpo durante la jugada es falta." },
        { q: "¿Qué es contrataque?", options:["Defensa pasiva","Ataque después de bloqueo","Tiempo muerto","Cambio de lado"], answer:1,
          explain:"Es un ataque inmediato tras recuperar el balón en defensa." },
        { q: "¿Cuántos jugadores saltan para bloqueo normalmente?", options:["1","2","3","4"], answer:2,
          explain:"Normalmente 2 o 3 jugadores realizan bloqueo juntos según la jugada." }
      ]
    }
  },

  /* Puedes agregar más deportes aquí (natacion, atletismo, tenis, etc.) */
  natacion: {
    "5-10": {
      qCount:4,
      questions:[
        { q:"¿Dónde se practica la natación principalmente?", options:["En pista","En piscina","En cancha","En bosque"], answer:1,
          explain:"La natación se practica en piscinas o en cuerpos de agua." },
        { q:"¿Qué se busca en una carrera de natación?", options:["Hacer muchas vueltas","Nadar más rápido","Hacer más ruido","Celebrar"], answer:1,
          explain:"Se busca completar la distancia en el menor tiempo posible." },
        { q:"¿Qué ayuda a flotar?", options:["Zapatos","Brazos y técnica","Sartén","Cuerda"], answer:1,
          explain:"La técnica y movimientos ayudan a mantenerse a flote." },
        { q:"¿Es importante la supervisión de un adulto?", options:["Sí","No","Solo a veces","Nunca"], answer:0,
          explain:"Siempre es importante la vigilancia de un adulto por seguridad." }
      ]
    },
    "11-16": {
      qCount:6,
      questions:[
        { q:"¿Qué estilos existen en natación? (ejemplo)", options:["Crol, espalda, braza, mariposa","Boxeo, lucha, karate","Fútbol, tenis, golf","Ciclismo, atletismo, tiro"], answer:0,
          explain:"Los estilos principales son crol, espalda, braza y mariposa." },
        { q:"¿Qué significa 'tiempo de reacción'?", options:["Tiempo para arrancar tras sonido","Tiempo de descanso","Tiempo de viaje","Tiempo de dormir"], answer:0,
          explain:"Es el tiempo desde la señal hasta que el nadador inicia la carrera." },
        { q:"¿Qué es un viraje?", options:["Cambio de estilo","Giro en el final de la calle","Cambio de entrenador","Cambio de piscina"], answer:1,
          explain:"Es la maniobra al final de la calle para dar vuelta y continuar." },
        { q:"¿Por qué es importante calentar?", options:["Para descansar","Para preparar músculos","Para nadar lento","Para divertirse"], answer:1,
          explain:"El calentamiento prepara el cuerpo y reduce riesgo de lesión." },
        { q:"¿Qué ayuda a mejorar velocidad?", options:["Técnica y entrenamiento","Comer mucho antes","Dormir menos","No practicar"], answer:0,
          explain:"La técnica adecuada y el entrenamiento mejoran la velocidad." },
        { q:"¿Se mide la distancia en metros?", options:["Sí","No","En litros","En kilos"], answer:0,
          explain:"Las carreras se miden generalmente en metros." }
      ]
    }
  }
}; // end quizzes object

/* ========== UTILIDADES Y NAVEGACIÓN ========== */
function setSelectedAge(age){
  localStorage.setItem("selectedAge", age);
}
function getSelectedAge(){ return localStorage.getItem("selectedAge"); }

function setSelectedSport(sport){
  localStorage.setItem("selectedSport", sport);
}
function getSelectedSport(){ return localStorage.getItem("selectedSport"); }

function clearQuizState(){
  localStorage.removeItem("currentAnswers");
  localStorage.removeItem("quizMeta");
  localStorage.removeItem("selectedSport");
}

/* ========== INDEX PAGE: seleccionar edad ========== */
document.addEventListener("click", (e) => {
  // botones de edad en index.html
  if(e.target.matches(".age-btn")){
    const age = e.target.dataset.age;
    setSelectedAge(age);
    // ir a aprendizaje
    location.href = "aprendizaje.html";
  }
});

/* ========== APRENDIZAJE PAGE ========== */
document.addEventListener("DOMContentLoaded", () => {
  // Si estamos en aprendizaje.html: llenar datos
  if(location.pathname.endsWith("aprendizaje.html")){
    const age = getSelectedAge();
    if(!age){
      alert("Por favor selecciona una edad desde la página inicio.");
      location.href = "index.html";
      return;
    }

    const title = document.getElementById("page-title");
    title.textContent = `Aprendizaje para ${age}`;

    // Texto contextual para edades
    const infoArea = document.getElementById("info-area");
    let intro = "";
    if(age === "5-10"){
      intro = "<h3>¡Hola! Información rápida y fácil para niños.</h3><p>Le presentamos datos cortos y claros: cuántos jugadores, dónde se juega y qué se debe hacer. Luego podrás responder un pequeño quiz de 4 preguntas.</p>";
    } else if(age === "11-16"){
      intro = "<h3>¡Perfecto! Datos un poco más amplios.</h3><p>Encontrarás más detalles y un quiz con 6 preguntas para practicar.</p>";
    } else {
      intro = "<h3>Datos completos y preguntas más técnicas.</h3><p>Ideal para jóvenes y adultos. El quiz tendrá entre 6 y 10 preguntas según el deporte.</p>";
    }
    infoArea.innerHTML = intro;

    // Generar las tarjetas de deportes disponibles en quizzes
    const cards = document.getElementById("cards");
    cards.innerHTML = ""; // limpiar

    // tomamos la lista de deportes del objeto quizzes
    const sports = Object.keys(quizzes);
    sports.forEach(sport => {
      // Intentamos extraer un texto legible
      const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);
      // breve descripción: tomamos la primera pregunta como resumen si existe
      const qset = quizzes[sport][age] || quizzes[sport]["5-10"];
      const short = qset && qset.questions && qset.questions[0] ? qset.questions[0].q : "Información básica del deporte.";

      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="icon">
          <img src="img/${sport}.png" alt="${sportName}" loading="lazy" onerror="this.style.display='none'">
          <div class="emoji" style="font-size:36px">${getEmojiForSport(sport)}</div>
        </div>
        <h3>${sportName}</h3>
        <p class="small">${short}</p>
        <div style="display:flex;gap:8px;justify-content:center;margin-top:10px">
          <button class="btn-choose" data-sport="${sport}">Elegir</button>
          <button class="btn-secondary" onclick="mostrarMasInfo('${sport}','${age}')">Ver más</button>
        </div>
      `;
      cards.appendChild(card);
    });

    // Elegir deporte (delegación)
    cards.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".btn-choose");
      if(!btn) return;
      const sport = btn.dataset.sport;
      setSelectedSport(sport);
      // preparar quiz: guardamos meta (sport, age, qcount)
      const qset = quizzes[sport][age] || quizzes[sport]["5-10"];
      const qCount = qset.qCount || (age === "5-10" ? 4 : 6);
      const meta = {sport, age, qCount};
      localStorage.setItem("quizMeta", JSON.stringify(meta));
      // limpiar respuestas previas
      localStorage.removeItem("currentAnswers");
      alert("Has elegido: " + sport.toUpperCase() + ". Ahora presiona Ir al Quiz.");
    });

    // Ir al quiz
    const goBtn = document.getElementById("go-quiz");
    goBtn.addEventListener("click", () => {
      const chosen = getSelectedSport();
      if(!chosen){
        alert("Por favor elige un deporte primero.");
        return;
      }
      location.href = "quiz.html";
    });
  }

  /* ========== QUIZ PAGE ========== */
  if(location.pathname.endsWith("quiz.html")){
    const metaRaw = localStorage.getItem("quizMeta");
    if(!metaRaw){
      alert("No hay quiz seleccionado. Elige un deporte primero.");
      location.href = "aprendizaje.html";
      return;
    }
    const meta = JSON.parse(metaRaw);
    const sport = meta.sport;
    const age = meta.age;
    const qCount = meta.qCount;

    document.getElementById("quiz-title").textContent = `Quiz - ${capitalize(sport)} (${age})`;

    // obtener banco de preguntas del objeto (si no hay para esa edad, usar 5-10 u otra)
    const bank = (quizzes[sport] && (quizzes[sport][age] || quizzes[sport]["5-10"])) || null;
    if(!bank){
      alert("No hay preguntas definidas para este deporte.");
      location.href = "aprendizaje.html";
      return;
    }
    // tomar las primeras qCount preguntas (si hay más, podrías mezclar)
    const questions = bank.questions.slice(0, qCount);

    const quizArea = document.getElementById("quiz-area");
    quizArea.innerHTML = "";

    // cargar respuestas previas si existen
    let currentAnswers = JSON.parse(localStorage.getItem("currentAnswers") || "[]");

    questions.forEach((qq, idx) => {
      const card = document.createElement("div");
      card.className = "question";
      card.dataset.index = idx;
      // crear opciones
      const optsHtml = qq.options.map((opt,i) => {
        const selected = currentAnswers[idx] === i ? "selected" : "";
        return `<div class="option ${selected}" data-index="${i}">${opt}</div>`;
      }).join("");
      card.innerHTML = `<h4>Pregunta ${idx+1}: ${qq.q}</h4><div class="options">${optsHtml}</div>`;
      quizArea.appendChild(card);
    });

    // Delegación para selección de opción
    quizArea.addEventListener("click", (ev) => {
      const opt = ev.target.closest(".option");
      if(!opt) return;
      const qCard = opt.closest(".question");
      const qIdx = Number(qCard.dataset.index);
      // quitar selected en las otras opciones de la misma pregunta
      qCard.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      // guardar en currentAnswers
      currentAnswers[qIdx] = Number(opt.dataset.index);
      localStorage.setItem("currentAnswers", JSON.stringify(currentAnswers));
    });

    // boton enviar
    const controls = document.getElementById("quiz-controls");
    controls.innerHTML = `<button id="submit-quiz" class="btn-primary">Enviar respuestas</button>`;
    document.getElementById("submit-quiz").addEventListener("click", () => {
      // validar que todas las preguntas tengan respuesta
      if(currentAnswers.length < questions.length || currentAnswers.some(a=>a===undefined)){
        if(!confirm("No has respondido todas las preguntas. ¿Deseas enviar de todas formas?")) return;
      }
      // Evaluar
      const evaluation = questions.map((qq, i) => {
        const chosen = currentAnswers[i] !== undefined ? currentAnswers[i] : null;
        const correct = qq.answer;
        const ok = chosen === correct;
        return {
          question: qq.q,
          options: qq.options,
          chosen,
          correct,
          ok,
          explain: qq.explain
        };
      });
      // Guardar evaluación en localStorage y redirigir a resultados
      localStorage.setItem("evaluation", JSON.stringify(evaluation));
      location.href = "resultados.html";
    });
  }

  /* ========== RESULTADOS PAGE ========== */
  if(location.pathname.endsWith("resultados.html")){
    const evalRaw = localStorage.getItem("evaluation");
    if(!evalRaw){
      alert("No hay resultados para mostrar.");
      location.href = "index.html";
      return;
    }
    const evaluation = JSON.parse(evalRaw);
    const summary = document.getElementById("summary");
    summary.innerHTML = `<h3>Resumen del Quiz</h3>`;

    // Calcular aciertos
    const total = evaluation.length;
    const corrects = evaluation.filter(e => e.ok).length;

    const scoreHtml = `<p class="small">Respondiste ${corrects} de ${total} preguntas correctamente.</p>`;
    summary.innerHTML += scoreHtml;

    // Tabla de preguntas y respuestas
    let table = `<div class="results"><table><thead><tr><th>#</th><th>Pregunta</th><th>Tu respuesta</th><th>Correcta</th><th>Estado</th></tr></thead><tbody>`;
    evaluation.forEach((ev, idx) => {
      const tuResp = ev.chosen !== null ? ev.options[ev.chosen] : "<em>No respondió</em>";
      const correcta = ev.options[ev.correct];
      const estado = ev.ok ? "Correcta" : "Incorrecta";
      table += `<tr>
        <td>${idx+1}</td>
        <td>${ev.question}</td>
        <td>${tuResp}</td>
        <td>${correcta}</td>
        <td>${estado}</td>
      </tr>`;
    });
    table += "</tbody></table></div>";
    summary.innerHTML += table;

    // Explicaciones
    let expl = "<h4>Explicaciones</h4>";
    evaluation.forEach((ev, idx) => {
      expl += `<p><strong>Pregunta ${idx+1}:</strong> ${ev.explain}</p>`;
    });
    summary.innerHTML += expl;

    // limpiar estado para no reusar sin intención
    clearQuizState();
    localStorage.removeItem("evaluation");
  }
});

/* ====== FUNCIONES ADICIONALES ====== */
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

function mostrarMasInfo(sport, age){
  // muestra un alert con información ampliada breve y amigable según edad
  const bank = quizzes[sport] && (quizzes[sport][age] || quizzes[sport]["5-10"]);
  const desc = bank && bank.questions && bank.questions[0] ? bank.questions[0].q : "Información básica del deporte.";
  alert(`${capitalize(sport)}\n\nDescripción corta: ${desc}\n\nQuiz ideal para la edad ${age}.`);
}

function getEmojiForSport(s){
  const map = {
    futbol:"⚽", baloncesto:"🏀", voleibol:"🏐", natacion:"🏊‍♂️", atletismo:"🏃‍♂️", tenis:"🎾", ciclismo:"🚴‍♂️"
  };
  return map[s] || "🏅";
}
