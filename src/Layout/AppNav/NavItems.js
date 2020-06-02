
export const Profile = (fii) => [
    {
        icon: 'lnr-license',
        label: 'Perfil',
        to: '#/'+fii+'/profile'
    }
];
export const Info = (fii) => [
    {
        icon: 'lnr-apartment',
        label: 'Ativos',
        content: [
            {
                label: 'Físicos',
                to: '#/'+fii+'/ativos/fisicos',
            },
            {
                label: 'Financeiros',
                to: '#/'+fii+'/ativos/financeiros',

            },
            {
                label: 'Consolidado',
                to: '#/'+fii+'/ativos/consolidado',
            },
            {
                label: 'Aquisições/Alienações',
                to: '#/'+fii+'/ativos/aquisicoes',
            }
        ]
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Dados e simulações',
        content: [
            {
                label: 'Fundamentos',
                to: '#/'+fii+'/dados/fundamentos',
            },
            {
                label: 'Aluguéis',
                to: '#/'+fii+'/dados/alugueis',
            },
            {
                label: 'Simulação de investimento',
                to: '#/'+fii+'/dados/simulacao',
            },
            {
                label: 'Cotações',
                to: '#/'+fii+'/dados/cotacoes',
            }
        ]
    },
    {
        icon: 'lnr-pie-chart',
        label: 'Relatórios',
        content: [
            {
                label: 'Mensal',
                to: '#/'+fii+'/relatorios/mensal',
            },
            {
                label: 'Trimestral',
                to: '#/'+fii+'/relatorios/trimestral',
            },
            {
                label: 'Gerencial',
                to: '#/'+fii+'/relatorios/gerencial',
            },
        ]
    }
];

export const Discussao = (fii) => [
    {
        icon: 'pe-7s-chat',
        label: 'Discussão',
        to: '#/'+fii+'/discussao'
    }
];

export const Inicio = [
    {
        icon: 'pe-7s-graph2',
        label: 'Dashboard',
        to: '#/dashboard'
    },
    {
        icon: 'pe-7s-search',
        label: 'Pesquisar',
        to: '#/pesquisar'
    }
];