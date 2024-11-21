class CorretoraExterior < Sitepress::Model
  collection glob: "corretoras_exterior/*.yml"
  data :nome,
    :link,
    :deposito_min_abertura,
    :abertura,
    :corretagem_eua,
    :corretagem_lse,
    :deposito_eua,
    :saque_eua,
    :spread_brasil,
    :acats,
    :inatividade,
    :sipc,
    :seguro,
    :telefone,
    :email,
    :chat_humano,
    :horarios,
    :idiomas,
    :eua_acoes,
    :eua_outros,
    :intl_acoes,
    :intl_outros,
    :crypto,
    :fracoes,
    :ach_pull,
    :cartao_debito_fisico,
    :cartao_debito_virtual,
    :cartao_credito_fisico,
    :residentes_fiscais,
    :relatorio_irpf_brasil,
    :joint,
    :margin,
    :offshore,
    :conta_bancaria,
    :conta_remunerada,
    :ano_fundacao,
    :sede,
    :funcionarios,
    :aum,
    :clientes,
    :observacoes,
    :referral

  def self.all
    site
      .glob("corretoras_exterior/*.yml")
    .sort_by { |record| record.data.dig("posicao") || Float::INFINITY }
    .map { |record| new record }
  end
end
