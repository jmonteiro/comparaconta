---
title: Corretoras no Exterior
description: |
  Tabela comparativa colaborativa de corretoras no exterior para residentes fiscais brasileiros.
  Compare custos, benefícios, e características de corretoras internacionais.
layout: application
redirect_from:
- /ce
- /corretora-estrangeira
- /corretora-exterior
- /corretoras-estrangeiras
---
<section class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mt-6 mx-4 rounded-md shadow-md">
  <p class="text-md font-semibold">Aviso:</p>
  <p class="text-sm mt-1">
    Esta tabela é apenas informativa. Não nos responsabilizamos por eventuais mudanças nas taxas e condições das corretoras.
    Recomendamos que você verifique diretamente no site da corretora. Se qualquer informação estiver incompleta ou incorreta,
    por favor, abra uma "<a href="{{site.github_url}}/issues" target="_blank">Issue</a>" em
    <a href="{{site.github_url}}" target="_blank">{{site.github_repository}}</a>.
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
          {% for corretora in site.data.corretoras-exterior %}
            <th class="py-3 px-6 text-center font-medium w-1/5">
              {{corretora.nome}}
            </th>
          {% endfor %}
        </tr>
      </thead>
      <tbody class="text-gray-700 text-sm">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Endereço
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.link %}
            </td>
          {% endfor %}
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="{{site.data.corretoras-exterior.size | plus: 1}}">
            Custos
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Depósito mínimo para abertura
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.deposito_min_abertura %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxas de abertura (W-8 e outros)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.abertura %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Corretagem mercado Americano
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.corretagem_eua %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Corretagem mercado Britânico (LSE) em dólar
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.corretagem_lse %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Depósito EUA
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.deposito_eua %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa de Retirada EUA
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.saque_eua %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Taxa Spread de Depósito/Retirada Brasil
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.spread_brasil %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Custo para transferência para outra corretora (ACATS)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.acats %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Manutenção por inatividade
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.inatividade %}
            </td>
          {% endfor %}
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="{{site.data.corretoras-exterior.size | plus: 1}}">
            Proteção
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            SIPC
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.sipc %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Seguro Adicional por Conta
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.seguro %}
            </td>
          {% endfor %}
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="{{site.data.corretoras-exterior.size | plus: 1}}">
            Atendimento
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Via Telefone
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.telefone %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Via Email
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.email %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Humano via Chat web em tempo real
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.chat_humano %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Horários de Atendimento
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.horarios %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Idiomas de Atendimento
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.idiomas %}
            </td>
          {% endfor %}
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="{{site.data.corretoras-exterior.size | plus: 1}}">
            Produtos Financeiros
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            EUA: Ações, ETFs, REITs, ADRs
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.eua_acoes %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            EUA: Opções, Futuros, Renda Fixa
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.eua_outros %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Fora dos EUA (Internacional): Ações, ETFs, REITs, ADRs
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.intl_acoes %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Fora dos EUA (Internacional): Opções, Futuros, Renda Fixa
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.intl_outros %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Criptomoedas
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.crypto %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Fração de Ações
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.fracoes %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Link com conta bancária americana (com ACH Pull)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.ach_pull %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Cartão de débito americano (dólar) físico entregue no Brasil
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.cartao_debito_fisico %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Cartão de débito americano (dólar) virtual
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.cartao_debito_virtual %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Cartão de crédito americano (dólar) físico entregue no Brasil
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.cartao_credito_fisico %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Exclusiva para residentes do Brasil
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.residentes_fiscais %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Relatório IR brasileiro
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.relatorio_irpf_brasil %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Conta "conjunta" (<em>Joint account</em>)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.joint %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
          Conta margem (alavancagem)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.margin %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Abertura para offshore
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.offshore %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Conta Bancária
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.conta_bancaria %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Juros sobre saldo em conta corrente
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.conta_remunerada %}
            </td>
          {% endfor %}
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="{{site.data.corretoras-exterior.size | plus: 1}}">
            Sobre a Instituição
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Ano de fundação
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.ano_fundacao %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Sede
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.sede %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Número de funcionários (aproximado)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.funcionarios %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            AUM (Patrimônio de clientes sob gerência)
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.aum %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Número de clientes
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.clientes %}
            </td>
          {% endfor %}
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Observações adicionais
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% for observacao in corretora.observacoes %}
                {% if observacao.text %}
                  <p class="text-xs mb-2">
                    {{ observacao.text }}
                    {% if observacao.source %}
                      <a href="{{observacao.source}}" rel="noopener noreferrer" target="_blank">Fonte</a>
                    {% endif %}
                  </p>
                {% else %}
                  <p class="text-xs mb-2">{{ observacao }}</p>
                {% endif %}
              {% endfor %}
            </td>
          {% endfor %}
        </tr>
        <tr class="bg-gray-200 text-gray-600 text-sm leading-normal">
          <td class="py-3 px-6 text-left font-medium" colspan="{{site.data.corretoras-exterior.size | plus: 1}}">
            Indicação
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left font-medium">
            Código ou link de indicação
          </td>
          {% for corretora in site.data.corretoras-exterior %}
            <td class="py-3 px-6 text-center">
              {% include cell.html cell=corretora.referral %}
            </td>
          {% endfor %}
        </tr>
      </tbody>
    </table>
  </div>
</main>
