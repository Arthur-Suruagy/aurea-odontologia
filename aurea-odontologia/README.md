# Áurea Odontologia Integrada — site institucional (demonstração)

Projeto de portfólio: site institucional premium para clínica odontológica.
**Todo o conteúdo é fictício** (clínica, equipe, endereço, telefones, redes sociais).

Stack: React 18 · TypeScript · Vite · Tailwind CSS 3 · Lucide React.

## Como executar

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # typecheck + build de produção em /dist
npm run preview    # serve o build localmente
```

Requer Node 18+.

## Onde personalizar (um único lugar)

Tudo que é dado do cliente está em `src/data/clinic.ts`:

| O que | Campo |
| --- | --- |
| Número do WhatsApp (só dígitos, com DDI+DDD) | `clinic.whatsappNumber` (hoje é um placeholder inválido) |
| Mensagem pré-preenchida | `clinic.whatsappMessage` |
| Telefone, endereço, horários, redes sociais | `clinic.phoneDisplay`, `address`, `hours`, `social` |
| Fotos | `images` (centralizadas, com fallback) |
| Textos de diferenciais, tratamentos, equipe, FAQ | `differentials`, `treatments`, `team`, `faqs` |
| Faixa "site demonstrativo" | `clinic.demoMode = false` para remover |

## Checklist antes de vender/usar com cliente real

1. Trocar o número do WhatsApp e todos os placeholders.
2. Substituir as fotos do Unsplash por fotos reais da clínica (ou confirmar a licença de cada imagem).
3. Preencher a equipe com nomes, registros (CRO) e textos reais e verificáveis.
4. Substituir o aviso de privacidade por texto elaborado por profissional jurídico (LGPD).
5. Atualizar `<title>`, descrição e Open Graph em `index.html`; adicionar domínio e imagem OG própria.
6. Se houver depoimentos reais e autorizados, trocar a seção `Journey` por avaliações.
7. Se adicionar formulário, conectá-lo a um serviço real (Formspree, backend próprio etc.).

## Estrutura

```
src/
  data/clinic.ts          configuração e conteúdo
  lib/whatsapp.ts         gerador do link wa.me
  hooks/useReveal.ts      animação de entrada na rolagem
  components/
    Header, Hero, Differentials, About, Treatments, Gallery,
    Team, Journey, FAQ, FinalCTA, Footer, WhatsAppButton,
    PrivacyDialog, DemoBanner
    ui/ SmartImage, Reveal, Logo, Icons
```
