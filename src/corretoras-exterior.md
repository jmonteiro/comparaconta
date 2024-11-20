---
title: Corretoras no Exterior
description: |
  Tabela comparativa colaborativa de corretoras no exterior para residentes fiscais brasileiros.
  Compare custos, benefícios, e características de corretoras internacionais.
layout: application
---

<section class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mt-6 mx-4 rounded-md shadow-md">
  <p class="text-md font-semibold">Aviso:</p>
  <p class="text-sm mt-1">
    Esta tabela é apenas informativa. Não nos responsabilizamos por eventuais mudanças nas taxas e condições das corretoras.
    Recomendamos que você verifique diretamente no site da corretora. Se qualquer informação estiver incompleta ou incorreta,
    por favor, abra uma "<a href="<%= site.metadata.github_url %>/issues" target="_blank">Issue</a>" em
    <a href="<%= site.metadata.github_url %>" target="_blank">
      <%= site.metadata.github_repo %>
    </a>.
  </p>
</section>

<main class="py-6 px-4 w-full h-auto overflow-x-auto">
    <div class="w-full">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <tr>
          <th>
            &nbsp;
          </th>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <th class="py-3 px-6 text-center font-medium w-1/5">
              <%= corretora.nome %>
            </th>
          <% end %>
        </tr>
      </thead>
      <tbody class="text-gray-700 text-sm">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Endereço
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.link %>
            </td>
          <% end %>
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="<%= site.data.corretoras_exterior.size + 1 %>">
            Custos
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Depósito mínimo para abertura
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.deposito_min_abertura %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxas de abertura (W-8 e outros)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.abertura %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Corretagem mercado Americano
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.corretagem_eua %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Corretagem mercado Britânico (LSE) em dólar
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.corretagem_lse %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Depósito EUA
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.deposito_eua %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Retirada EUA
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.saque_eua %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa Spread de Depósito/Retirada Brasil
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.spread_brasil %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Custo para transferência para outra corretora (ACATS)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.acats %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Manutenção por inatividade
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.inatividade %>
            </td>
          <% end %>
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="<%= site.data.corretoras_exterior.size + 1 %>">
            Proteção
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            SIPC
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.sipc %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Seguro Adicional por Conta
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.seguro %>
            </td>
          <% end %>
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="<%= site.data.corretoras_exterior.size + 1 %>">
            Atendimento
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Via Telefone
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.telefone %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Via Email
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.email %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Humano via Chat web em tempo real
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.chat_humano %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Horários de Atendimento
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.horarios %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Idiomas de Atendimento
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.idiomas %>
            </td>
          <% end %>
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="<%= site.data.corretoras_exterior.size + 1 %>">
            Produtos Financeiros
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            EUA: Ações, ETFs, REITs, ADRs
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.eua_acoes %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            EUA: Opções, Futuros, Renda Fixa
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.eua_outros %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Fora dos EUA (Internacional): Ações, ETFs, REITs, ADRs
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.intl_acoes %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Fora dos EUA (Internacional): Opções, Futuros, Renda Fixa
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.intl_outros %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Criptomoedas
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.crypto %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Fração de Ações
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.fracoes %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Link com conta bancária americana (com ACH Pull)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.ach_pull %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Cartão de débito americano (dólar) físico entregue no Brasil
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.cartao_debito_fisico %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Cartão de débito americano (dólar) virtual
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.cartao_debito_virtual %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Cartão de crédito americano (dólar) físico entregue no Brasil
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.cartao_credito_fisico %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Exclusiva para residentes do Brasil
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.residentes_fiscais %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Relatório IR brasileiro
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.relatorio_irpf_brasil %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Conta "conjunta" (<em>Joint account</em>)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.joint %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
          Conta margem (alavancagem)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.margin %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Abertura para offshore
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.offshore %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Conta Bancária
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.conta_bancaria %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Juros sobre saldo em conta corrente
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.conta_remunerada %>
            </td>
          <% end %>
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="<%= site.data.corretoras_exterior.size + 1 %>">
            Sobre a Instituição
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Ano de fundação
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.ano_fundacao %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Sede
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.sede %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Número de funcionários (aproximado)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.funcionarios %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            AUM (Patrimônio de clientes sob gerência)
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.aum %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Número de clientes
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.clientes %>
            </td>
          <% end %>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Observações adicionais
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <% corretora.observacoes do |observacao| %>
                <p class="text-xs mb-2">
                  <%= observacao["text"] %>
                  <% if observacao["source"] %>
                    <a href="<%= observacao["source"] %>" rel="noopener noreferrer" target="_blank">Fonte</a>
                  <% end %>
                </p>
              <% end %>
            </td>
          <% end %>
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="<%= site.data.corretoras_exterior.size + 1 %>">
            Indicação
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Código ou link de indicação
          </td>
          <% site.data.corretoras_exterior.each do |corretora| %>
            <td class="py-3 px-6 text-center">
              <%= render "cell", cell: corretora.referral %>
            </td>
          <% end %>
        </tr>
      </tbody>
    </table>
  </div>
</main>
