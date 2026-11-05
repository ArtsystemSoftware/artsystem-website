export default function PoliticaPrivacidade() {  
    return (
        <div className="w-screen mt-52 flex flex-col items-center justify-center bg-cover bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')]">
            <h1 className="text-6xl font-bold mb-4">Política de Privacidade — Artsystem</h1>
            <p className="text-xl mb-8">Última atualização: 29 de julho de 2025</p>
            <div className="text-2xl mb-8 max-w-4xl">
                <p className="mt-4">A Artsystem valoriza sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais regulamentações aplicáveis. Esta política explica como coletamos, utilizamos, armazenamos e protegemos suas informações quando você utiliza nosso aplicativo.</p>
                
                <h2 className="text-4xl font-bold mt-8">1. Dados Coletados</h2>
                <h3 className="text-2xl font-semibold mt-4">1.1 Informações fornecidas por você:</h3>
                <ul className="list-disc ml-6 mt-2">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Endereço para entrega</li>
                </ul>
                <h3 className="text-2xl font-semibold mt-4">1.2 Dados coletados automaticamente:</h3>
                <ul className="list-disc ml-6 mt-2">
                    <li>Localização (via Google Maps API, para otimizar rotas de entrega);</li>
                    <li>Dados de uso do aplicativo (interações, preferências);</li>
                    <li>Cookies ou identificadores anônimos (para personalização e publicidade).</li>
                </ul>
                
                <h2 className="text-4xl font-bold mt-8">2. Finalidades do Tratamento</h2>
                <p className="mt-4">Seus dados são utilizados para:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Processar pedidos e entregas;</li>
                    <li>Oferecer suporte ao cliente;</li>
                    <li>Enviar atualizações sobre pedidos ou serviços;</li>
                    <li>Personalizar anúncios (com seu consentimento);</li>
                    <li>Melhorar a experiência no aplicativo;</li>
                    <li>Cumprir obrigações legais.</li>
                </ul>
                
                <h2 className="text-4xl font-bold mt-8">3. Compartilhamento de Dados</h2>
                <p className="mt-4">Seus dados não são comercializados, mas podem ser compartilhados com:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Parceiros de pagamento (para transações seguras);</li>
                    <li>Google Maps API (apenas para cálculo de rotas);</li>
                    <li>Redes de publicidade autorizadas (veja detalhes na seção 3.1);</li>
                    <li>Autoridades competentes, se exigido por lei.</li>
                </ul>
                <h3 className="text-2xl font-semibold mt-4">3.1 Links de Terceiros e Publicidade</h3>
                <p className="mt-2">Nosso aplicativo pode exibir anúncios de parceiros comerciais, com links direcionados a plataformas externas. Esses parceiros têm acesso apenas a dados não identificáveis (como preferências de uso) e operam sob contratos que garantem a conformidade com a LGPD.</p>
                <p className="mt-2">Todo compartilhamento é previamente autorizado e auditado para proteger sua privacidade.</p>
                
                <h2 className="text-4xl font-bold mt-8">4. Segurança e Armazenamento</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Utilizamos criptografia, firewalls e controles de acesso;</li>
                    <li>Dados são armazenados em servidores seguros, com medidas físicas e digitais;</li>
                    <li>Retemos suas informações apenas pelo tempo necessário (exceto se a lei exigir).</li>
                </ul>
                
                <h2 className="text-4xl font-bold mt-8">5. Seus Direitos (LGPD e GDPR)</h2>
                <p className="mt-4">Você tem o direito de:</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
                    <li>Revogar consentimento (ex.: para publicidade personalizada);</li>
                    <li>Portabilidade dos dados (solicitar uma cópia em formato legível);</li>
                    <li>Opinar sobre o não tratamento de dados sensíveis.</li>
                </ul>
                <p className="mt-4"><strong>Como exercer seus direitos:</strong> Envie um e-mail para suporte@artsystem.com com o assunto &quot;Privacidade&quot;. Responderemos em até 15 dias úteis.</p>
                
                <h2 className="text-4xl font-bold mt-8">6. Proteção de Crianças</h2>
                <p className="mt-4">Nosso aplicativo não é destinado a menores de 13 anos. Se identificarmos coleta inadvertida de dados de crianças, os excluiremos imediatamente.</p>
                
                <h2 className="text-4xl font-bold mt-8">7. Atualizações desta Política</h2>
                <p className="mt-4">Alterações serão comunicadas via notificação no aplicativo ou e-mail. O uso contínuo do serviço após atualizações implica aceitação da nova versão.</p>
                
                <h2 className="text-4xl font-bold mt-8">8. Contato</h2>
                <p className="mt-4">Dúvidas ou solicitações sobre privacidade? Entre em contato com nosso Encarregado de Dados (DPO):</p>
                <p className="mt-2">📧 suporte@artsystem.com</p>
            </div>
        </div>
    );
}