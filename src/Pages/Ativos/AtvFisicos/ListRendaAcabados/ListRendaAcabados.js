import React, {Fragment} from 'react';
import CardAtivo from '../../../../components/Cards/CardAtivo'
import ListImovelRendaAcabado from '../../../../components/Lists/ListImovelRendaAcabado'
import ListRendaAcabTotal from '../../../../components/Lists/ListImovelRendaAcabTotal'

const ListRendaAcabados = (props) => {
    return (
        <Fragment>
            {props.imoveis &&
                props.imoveis.length === 0 ? 
                    <h3 className="text-center p-2">Não há imóveis para serem exibidos</h3>
                    :
                    <Fragment>
                        {props.imoveis.map((imovel, ind) => (
                            <CardAtivo
                                bgNumber="success"
                                order={ind+1}
                                key={`lra${ind}`}
                                >
                                    <ListImovelRendaAcabado
                                        tipo="ira"
                                        imovel={imovel}
                                        order={ind+1}
                                        bgNumber="success"
                                    />
                            </CardAtivo>
                        ))}
                        <CardAtivo
                            bgNumber="focus"
                            order="T"
                            >
                                <ListRendaAcabTotal imoveis={props.imoveis}/>
                            </CardAtivo>
                    </Fragment>
            }
        </Fragment>
    );
};

export default ListRendaAcabados;