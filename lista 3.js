`use strict`

let tareasAgregadas = [];
actualizarContador();

function agregarTarea() {
    const tarea = document.getElementById("actividad").value
    tareasAgregadas.push(tarea);
    renderizarTareas();
}

function renderizarTareas() {
    let html = "";
    tareasAgregadas.forEach((tarea, indice) => {
        html +=
        `<li>
            ${tarea}
            <button class="btn" onclick="eliminarTarea('${tarea}')">X</button>
            <button class="btn-edit" id="boton-${indice}" onclick="activarEditar('${indice}')"><img src="./icons/editar.png"/></button>
            <div id="editar-${indice}" style="display: none" class="prueba">
                <input class="input-edit" placeholder="Edita tu tarea" id="input-${indice}"/>
                <button class="btn-guardar" onclick="editarTarea('${tarea}', '${indice}')">Guardar</button>
            </div>
        </li>`
    })
    document.getElementById("lista").innerHTML = html
    actualizarContador();
}
function actualizarContador() {
    const html = tareasAgregadas.length > 0 ? `Tienes ${tareasAgregadas.length} tareas agregadas` : `No tienes tareas agregadas.`
    document.getElementById("contador").innerHTML = html
}

function eliminarTarea(tareaAEliminar) {
    tareasAgregadas = tareasAgregadas.filter(tarea => tarea !== tareaAEliminar)
    renderizarTareas();
}

function activarEditar(indice) {
    document.getElementById(`editar-${indice}`).style ="display: inline";
    document.getElementById(`boton-${indice}`).style ="display: none";
}

function editarTarea(tareaEditada, indice) {
    let tareaAEditar = document.getElementById(`input-${indice}`).value
    tareasAgregadas = tareasAgregadas.map(tarea => tarea === tareaEditada ? tareaAEditar : tareaEditada)
    renderizarTareas();
}