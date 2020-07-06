import React, {Fragment} from 'react';
import CardAtivo from '../../../../components/Cards/CardAtivo'
import ListImovelRendaContrucao from '../../../../components/Lists/ListImovelRendaContrucao'
import ListImovelRendaConstTotal from '../../../../components/Lists/ListImovelRendaConstTotal'

const ListRendaContrucao = (props) => {
    return (
        <Fragment>
            {props.imoveis &&
                props.imoveis.length === 0 ? 
                    <h3 className="text-center p-2">Não há imóveis para serem exibidos</h3>
                    :
                    <Fragment>
                        {props.imoveis.map((imovel, ind) => (
                            <CardAtivo
                                bgNumber="warning"
                                order={ind+1}
                                key={`lrc${ind}`}
                                >
                                    <ListImovelRendaContrucao
                                        imovel={imovel}
                                        order={ind+1}
                                        bgNumber="warning"
                                        type="irc"
                                    />
                            </CardAtivo>
                        ))}
                        {<CardAtivo
                            bgNumber="focus"
                            order="T"
                            >
                                <ListImovelRendaConstTotal imoveis={props.imoveis}/>
                            </CardAtivo>}
                    </Fragment>
            }
        </Fragment>
    );
};

export default ListRendaContrucao;