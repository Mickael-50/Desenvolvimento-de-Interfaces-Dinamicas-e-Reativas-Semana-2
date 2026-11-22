import Button from './components/Button';
import Badge from './components/Badge';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Design System com Tailwind CSS</h1>

      <Card titulo="Biblioteca de Componentes UI" descricao="Componentes estilizados com classes utilitárias do Tailwind e variações via props.">
        <div className="flex gap-2 mb-4">
          <Badge texto="Novo" cor="blue" />
          <Badge texto="Ativo" cor="green" />
          <Badge texto="Urgente" cor="red" />
        </div>

        <Input label="Seu Nome" placeholder="Digite seu nome..." />

        <div className="flex gap-3">
          <Button variant="primary">Confirmar Ação</Button>
          <Button variant="danger">Excluir Item</Button>
        </div>
      </Card>

      <Card titulo="Desafio Parte 3 - Componente Alert" descricao="Alertas dinâmicos com variantes success, warning e error.">
        <Alert variant="success" mensagem="Sucesso! Seus dados foram salvos corretamente." />
        <Alert variant="warning" mensagem="Atenção! Verifique os campos antes de continuar." />
        <Alert variant="error" mensagem="Erro! Não foi possível concluir a operação." />
      </Card>
    </div>
  );
}
