<script >
export default {
	props: {
		cantAsignaturas: {
			type: Number,
			required: true
		},
		promedioAcumulado: {
			type: Number,
			required: true
		}
	}
};
</script>
<template>
    <table border="1">
    <caption>Estadisticas Academicas</caption>
    <thead>
        <tr>
        <th>Asignaturas Aprobadas</th>
        <th>PROMEDIO ACUMULADO </th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{{cantAsignaturas}}</td>
        </tr>
        <tr>
        <td>{{ promedioAcumulado }}</td>
        </tr>
    </tbody>
    </table>

</template>