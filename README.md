# Entregável 2 – Design System com Tailwind (Semana 09)

Biblioteca de componentes reutilizáveis (`Card`, `Button`, `Badge`, `Input` e `Alert`) estilizados com Tailwind CSS e controlados por `props`.

## Parte 4 – Reflexão (Para Pensar)

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React?**

- **Vantagens:**
  1. **Produtividade e velocidade:** Não é necessário alternar entre arquivos `.jsx` e `.css` nem inventar nomes de classes para cada div.
  2. **Escopo seguro nos componentes:** Os estilos ficam colocalizados junto ao JSX de cada componente React, evitando conflitos globais de CSS.
  3. **Consistência visual e pacote final enxuto:** Usa tokens padronizados de espaçamento/cores e remove automaticamente todas as classes não utilizadas no build de produção.
- **Desvantagens:**
  1. **Poluição visual no JSX:** Elementos com muitas classes utilitárias podem deixar o HTML/JSX extenso se não forem bem extraídos em componentes React.
  2. **Curva de aprendizado inicial:** Exige memorizar os nomes utilitários do framework no início.
