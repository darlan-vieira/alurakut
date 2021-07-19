import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "dc7e2635f185e3c8032269bb84bd17";
    const client = new SiteClient(TOKEN);
    // validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "972690", // ID do model de 'communities' criado pelo dato
      ...request.body,
      //title: "comunidade teste",
      //imageUrl: "https://github.com/darlan-vieira.png",
    });

    console.log(registroCriado);
    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
