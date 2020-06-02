import React, {Fragment} from 'react';
import CardAtivo from '../../../../components/Cards/CardAtivo'
import ListImovelRendaAcabado from '../../../../components/Lists/ListImovelRendaAcabado'
import ListVendaAcabTotal from '../../../../components/Lists/ListImovelVendaAcabTotal'

const ListVendaAcabados = (props) => {
    return (
        <Fragment>
            {console.log("imoveis venda acabado", props.imoveis)}
            {props.imoveis &&
                props.imoveis.length === 0 ? 
                    <h3 className="text-center p-2">Não há imóveis para serem exibidos</h3>
                    :
                    <Fragment>
                        {props.imoveis.map((imovel, ind) => (
                            <CardAtivo
                                bgNumber="danger"
                                order={ind+1}
                                key={`lva${ind}`}
                                >
                                    <ListImovelRendaAcabado
                                        tipo="iva"
                                        imovel={imovel}
                                        order={ind+1}
                                        bgNumber="danger"
                                    />
                            </CardAtivo>
                        ))}
                        <CardAtivo
                            bgNumber="focus"
                            order="T"
                            >
                                <ListVendaAcabTotal imoveis={props.imoveis}/>
                        </CardAtivo>
                    </Fragment>
            }
        </Fragment>
    );
};

export default ListVendaAcabados;