import React from "react";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <section className="sidebar">
      <MenuItem texto={"Inicio"} />
      <MenuItem texto={"Contato"} />
      <MenuItem texto={"Em alta"} />
      <hr />
      <MenuItem texto={"Inscricoes"} />
      <MenuItem texto={"Enviar novo"} />
    </section>
  );
};
