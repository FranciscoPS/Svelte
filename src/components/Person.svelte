<script>
  //Siempre que sean variables que vienen de otro componente debe ser let

  //Aqui extraemos los valores manualmente en caso de que del otro lado se manden como <Person {data} />
  //   export let data;
  //   const { name, lastName, age } = data;

  //En caso de que nos lo manen como  <Person {...data} /> ya nos llega desestructurado, entonces solo declaramos las variables
  export let name;
  export let lastName;
  export let age;
</script>

<div class="Person">
  <p>{name} {lastName} {age}</p>
</div>
