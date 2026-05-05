import { ZodType } from "zod";

import { apiRoutesSolicitacao } from "./solicitacao/apiRoutesSolicitacao";
import { apiRoutesSolicitacaoMotivo } from "./solicitacao-motivo/apiRoutesSolicitacaoMotivo";

const routes = [
  "/solicitacao-motivos",
  "/endereco/:id",
  "/solicitacao/alterar-unidade-consumidora/:id",
] as const;

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export type ApiRoutes<T = unknown> = Record<
  (typeof routes)[number],
  {
    methods: Partial<
      Record<
        HttpMethod,
        {
          formSchema?: ZodType<T>;
          responseSchema?: ZodType<T>;
        }
      >
    >;
  }
>;

export const apiRoutes = {
  ...apiRoutesSolicitacaoMotivo,
  ...apiRoutesSolicitacao,
} as const satisfies ApiRoutes;
