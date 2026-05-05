import { z } from "zod";

export const getSolicitacaoMotivoSchema = z.object({
  data: z.array(z.object({ id: z.number(), descricao: z.string() })),
});
