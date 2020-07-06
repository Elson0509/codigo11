import React, {Fragment} from 'react';
import CardAtivo from '../../../../components/Cards/CardAtivo'
import ListImovelRendaContrucao from '../../../../components/Lists/ListImovelRendaContrucao'
import ListImovelVendaConstTotal from '../../../../components/Lists/ListImovelVendaConstTotal'

const ListaVendaContrucao = (props) => {
    return (
        <Fragment>
            {props.imoveis &&
                props.imoveis.length === 0 ? 
                    <h3 className="text-center p-2">Não há imóveis para serem exibidos</h3>
                    :
                    <Fragment>
                        {props.imoveis.map((imovel, ind) => (
                            <CardAtivo
                                bgNumber="dark"
                                order={ind+1}
                                key={`lvc${ind}`}
                                >
                                    <ListImovelRendaContrucao
                                        imovel={imovel}
                                        order={ind+1}
                                        bgNumber="dark"
                                        type="imc"
                                    />
                            </CardAtivo>
                        ))}
                        {<CardAtivo
                            bgNumber="focus"
                            order="T"
                            >
                                <ListImovelVendaConstTotal imoveis={props.imoveis}/>
                            </CardAtivo>}
                    </Fragment>
            }
        </Fragment>
    );
};

export default ListaVendaContrucao;