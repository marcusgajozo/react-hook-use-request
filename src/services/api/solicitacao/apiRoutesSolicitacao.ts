import type { ApiRoutes } from "../api-routes";
import { updateUnidadeConsumidoraSchema } from "./schemas";

export const apiRoutesSolicitacao = {
  "/solicitacao/alterar-unidade-consumidora/:id": {
    methods: {
      patch: {
        formSchema: updateUnidadeConsumidoraSchema,
      },
    },
  },
} as const satisfies Partial<ApiRoutes>;
