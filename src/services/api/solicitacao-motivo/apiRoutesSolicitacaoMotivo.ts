import type { ApiRoutes } from "../api-routes";
import { getSolicitacaoMotivoSchema } from "./schemas";

export const apiRoutesSolicitacaoMotivo = {
  "/solicitacao-motivos": {
    methods: {
      get: {
        responseSchema: getSolicitacaoMotivoSchema,
      },
    },
  },
} as const satisfies Partial<ApiRoutes>;
